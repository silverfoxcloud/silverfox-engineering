import { test, expect } from "@playwright/test";

const baseURL = "http://127.0.0.1:4173";
const widths = [
  { name: "320", width: 320, height: 900 },
  { name: "360", width: 360, height: 800 },
  { name: "375", width: 375, height: 812 },
  { name: "390", width: 390, height: 844 },
  { name: "414", width: 414, height: 896 },
  { name: "430", width: 430, height: 932 },
  { name: "768", width: 768, height: 1024 },
  { name: "834", width: 834, height: 1194 },
  { name: "1024", width: 1024, height: 900 },
  { name: "1120", width: 1120, height: 900 },
  { name: "1280", width: 1280, height: 900 },
  { name: "1440", width: 1440, height: 1000 },
  { name: "1600", width: 1600, height: 1000 },
  { name: "1920", width: 1920, height: 1080 },
];

const visualRoutes = [
  "/",
  "/architecture/",
  "/technology-radar/",
  "/packages/",
  "/platforms/sfas/",
  "/platforms/license-platform/",
  "/platforms/fox-pay/",
  "/engineering/",
  "/architecture-decisions/",
  "/build-stories/",
  "/changelog/",
];

const allRoutes = [
  "/",
  "/architecture/",
  "/platform/",
  "/cloud/",
  "/security/",
  "/data/",
  "/ai/",
  "/devops-sre/",
  "/technology-radar/",
  "/engineering-principles/",
  "/platforms/sfas/",
  "/platforms/license-platform/",
  "/platforms/fox-pay/",
  "/platforms/exotravel/",
  "/platforms/exohub/",
  "/packages/",
  "/packages/sfas-foundation/",
  "/packages/sfas-core/",
  "/packages/sfas-html-adapter/",
  "/packages/sfas-react-adapter/",
  "/packages/sfas-jalali/",
  "/packages/sfas-datatable/",
  "/packages/sfas-date-picker/",
  "/engineering/",
  "/engineering/bidirectional-ui-is-a-release-contract/",
  "/engineering/rights-should-survive-catalog-change/",
  "/engineering/payment-orchestration-without-owning-funds/",
  "/architecture-decisions/",
  "/architecture-decisions/license-tenant-isolation/",
  "/architecture-decisions/license-entitlement-snapshots/",
  "/architecture-decisions/foxpay-byom/",
  "/architecture-decisions/foxpay-provider-adapters/",
  "/architecture-decisions/sfas-directionality/",
  "/build-stories/",
  "/build-stories/shipping-seven-sfas-packages/",
  "/build-stories/license-engine-v1/",
  "/build-stories/foxpay-multi-tenant-core/",
  "/changelog/",
];

function slugify(route) {
  return route === "/" ? "home" : route.replace(/^\/+|\/+$/g, "").replace(/\//g, "-");
}

async function seedLocale(page, locale) {
  await page.addInitScript((value) => {
    const key = "silverfox-engineering-locale";
    if (window.localStorage.getItem(key) === null) {
      window.localStorage.setItem(key, value);
    }
  }, locale);
}

async function collectErrors(page) {
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  return errors;
}

async function settleVisualState(page) {
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(120);
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 720) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(20);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(80);
}

async function assertPageHealth(page, locale) {
  const fa = locale === "fa";
  await expect(page.locator("html")).toHaveAttribute("lang", locale);
  await expect(page.locator("html")).toHaveAttribute("dir", fa ? "rtl" : "ltr");
  await expect(page.locator("main")).toHaveAttribute("lang", locale);
  await expect(page.locator("main")).toHaveAttribute("dir", fa ? "rtl" : "ltr");
  await expect(page.locator("h1").first()).toBeVisible();
  await expect(page.locator(".sf-site-header .brandText")).toBeVisible();
  await expect(page.locator('[data-sf-component="site-header"]')).toHaveAttribute("data-sf-profile", "engineering");
  await expect(page.locator('[data-sf-component="site-footer"]')).toHaveAttribute("data-sf-profile", "engineering");
  expect(await page.locator(".sf-header-brand img").count(), "header brand must be typography-only").toBe(0);
  const technicalAccent = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--technical-accent").trim().toLowerCase());
  expect(technicalAccent, "technical accent must use Silver Fox orange").toBe("#ff8225");

  if (fa) {
    const bodyFont = await page.locator("body").evaluate((body) => getComputedStyle(body).fontFamily);
    expect(bodyFont, "Persian pages must use Shabnam").toContain("Shabnam");
  }

  const overflow = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    client: document.documentElement.clientWidth,
  }));
  expect(overflow.scroll, "horizontal overflow").toBeLessThanOrEqual(overflow.client + 2);

  const brokenImages = await page.locator("img").evaluateAll((images) =>
    images.filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.src),
  );
  expect(brokenImages).toEqual([]);

  const localeLinks = await page
    .locator('a[href="/fa"], a[href^="/fa/"], a[href="/en"], a[href^="/en/"], a[href*="engineering.silverfoxcloud.com/fa/"], a[href*="engineering.silverfoxcloud.com/en/"]')
    .count();
  expect(localeLinks, "normal navigation must never generate locale path segments").toBe(0);

  const centralAccent = await page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue("--sf-color-accent").trim().toLowerCase(),
  );
  expect(centralAccent, "central token package must be loaded").toBe("#ff8225");

  if (fa) {
    const humanIndex = page.locator(".featureIndex").first();
    if (await humanIndex.count()) {
      await expect(humanIndex).toHaveText(/^[۰-۹]+$/);
    }
  }
}

for (const route of visualRoutes) {
  for (const locale of ["en", "fa"]) {
    for (const viewport of widths) {
      test(`visual ${locale} ${route} at ${viewport.name}px`, async ({ page }, testInfo) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await seedLocale(page, locale);
        const errors = await collectErrors(page);

        const response = await page.goto(baseURL + route, { waitUntil: "domcontentloaded" });
        expect(response?.ok()).toBeTruthy();
        await assertPageHealth(page, locale);
        await settleVisualState(page);

        await page.screenshot({
          path: testInfo.outputPath(`${locale}-${slugify(route)}-${viewport.name}.png`),
          fullPage: true,
        });

        expect(errors.filter((item) => /hydration|uncaught|failed to/i.test(item))).toEqual([]);
      });
    }
  }
}

for (const route of allRoutes) {
  for (const locale of ["en", "fa"]) {
    test(`route smoke ${locale} ${route}`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await seedLocale(page, locale);
      const response = await page.goto(baseURL + route, { waitUntil: "domcontentloaded" });
      expect(response?.ok()).toBeTruthy();
      await assertPageHealth(page, locale);
    });
  }
}

test("language switch keeps the exact url, history position and locale across navigation", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await seedLocale(page, "en");
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });

  const initialURL = page.url();
  const initialHistory = await page.evaluate(() => history.length);
  const switcher = page.locator(".langSwitch");

  await switcher.click();
  await expect(page).toHaveURL(initialURL);
  await expect(page.locator("html")).toHaveAttribute("lang", "fa");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.locator("main")).toHaveAttribute("lang", "fa");
  await expect(page.locator("h1").first()).toContainText("محصولات مستقل");
  expect(await page.evaluate(() => history.length)).toBe(initialHistory);

  await page.locator('a[href="/architecture/"]:visible').first().click();
  await expect(page).toHaveURL(baseURL + "/architecture/");
  await expect(page.locator("html")).toHaveAttribute("lang", "fa");
  expect(await page.evaluate(() => localStorage.getItem("silverfox-engineering-locale"))).toBe("fa");

  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(page.locator("main")).toHaveAttribute("lang", "fa");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");

  const cleanURL = page.url();
  await page.locator(".langSwitch").click();
  await expect(page).toHaveURL(cleanURL);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
  expect(await page.evaluate(() => history.length)).toBe(initialHistory + 1);
});

test("locale path segments are not generated as public routes", async ({ request }) => {
  for (const forbidden of ["/fa/", "/en/"]) {
    const response = await request.get(baseURL + forbidden);
    expect(response.status(), forbidden + " must not exist as a generated public route").toBe(404);
  }
});

test("Persian human indices use Persian digits while technical versions stay ASCII", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await seedLocale(page, "fa");
  await page.goto(baseURL + "/packages/", { waitUntil: "domcontentloaded" });
  const firstIndex = page.locator(".packageIdentity small").first();
  await expect(firstIndex).toHaveText(/^[۰-۹]+$/);
  await expect(page.locator(".packageVersion").first()).toHaveText(/^[0-9]/);
});

test("engineering desktop disclosure stays click-only", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await seedLocale(page, "en");
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });

  const trigger = page.locator(".sf-header-trigger").first();
  await trigger.hover();
  await page.waitForTimeout(180);
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(".sf-mega-surface")).toHaveCount(0);

  await trigger.focus();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");

  await trigger.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(".sf-mega-surface")).toBeVisible();
});

test("desktop mega menu closes with Escape and returns focus", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await seedLocale(page, "en");
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });
  const trigger = page.locator(".sf-header-trigger").first();
  await trigger.focus();
  await trigger.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(".sf-mega-surface")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".sf-mega-surface")).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test("mobile navigation uses an accessible accordion and returns focus on Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await seedLocale(page, "fa");
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });
  const trigger = page.locator(".sf-header-mobile-trigger");
  await trigger.click();
  await expect(page.locator(".sf-mobile-nav")).toBeVisible();
  const group = page.locator(".sf-mobile-group-trigger").first();
  await expect(group).toHaveAttribute("aria-expanded", "true");
  await group.click();
  await expect(group).toHaveAttribute("aria-expanded", "false");
  await group.click();
  await expect(group).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(page.locator(".sf-mobile-nav")).toBeHidden();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(trigger).toBeFocused();
});

test("mobile navigation traps focus inside the header surface", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await seedLocale(page, "en");
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });

  const trigger = page.locator(".sf-header-mobile-trigger");
  await trigger.click();
  await expect(page.locator(".sf-mobile-nav")).toBeVisible();

  await page.evaluate(() => {
    const root = document.querySelector(".sf-site-header");
    if (!root) throw new Error("Missing central header");
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');
    const focusable = Array.from(root.querySelectorAll(selector))
      .filter((node) => node instanceof HTMLElement && !node.hasAttribute("hidden") && node.getClientRects().length > 0);
    const last = focusable.at(-1);
    if (!(last instanceof HTMLElement)) throw new Error("Missing mobile focus target");
    last.focus();
  });

  await page.keyboard.press("Tab");
  const focusStayedInside = await page.evaluate(() => {
    const root = document.querySelector(".sf-site-header");
    return Boolean(root && root.contains(document.activeElement));
  });
  expect(focusStayedInside).toBe(true);
});

test("mobile navigation closes when returning to desktop width", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await seedLocale(page, "en");
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });

  const trigger = page.locator(".sf-header-mobile-trigger");
  await trigger.click();
  await expect(page.locator(".sf-mobile-nav")).toBeVisible();

  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator(".sf-mobile-nav")).toBeHidden();
});

test("technology radar blips are visible immediately and filtering remains interactive", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await seedLocale(page, "en");
  await page.goto(baseURL + "/technology-radar/", { waitUntil: "domcontentloaded" });

  const visible = await page.locator(".radarBlip:not(.filtered)").evaluateAll((nodes) =>
    nodes.filter((node) => {
      const style = getComputedStyle(node);
      return style.visibility !== "hidden" && Number.parseFloat(style.opacity || "0") >= 0.9;
    }).length,
  );
  expect(visible).toBeGreaterThan(0);

  const trial = page.getByRole("button", { name: "Trial", exact: true });
  await trial.click();
  await expect(trial).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".radarDetail")).toBeVisible();
});

test("reduced motion keeps primary content visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await seedLocale(page, "en");
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".capabilityRow").first()).toBeVisible();
  const transition = await page.locator(".capabilityVisual img").first().evaluate(
    (node) => getComputedStyle(node).transitionDuration,
  );
  expect(Number.parseFloat(transition || "1")).toBeLessThan(0.001);
});

test("persisted Persian is resolved before visible application state", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await seedLocale(page, "fa");
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("html")).toHaveAttribute("data-locale", "fa");
  await expect(page.locator("html")).not.toHaveAttribute("data-locale-pending", "true");
  await expect(page.locator("main")).toHaveAttribute("lang", "fa");
  await expect(page.locator("h1").first()).toContainText("محصولات مستقل");
});

for (const locale of ["en", "fa"]) {
  test(`200% zoom reflow proxy ${locale}`, async ({ page }) => {
    // A 1280 CSS-pixel desktop viewport viewed at 200% exposes about 640 CSS px.
    // Validate reflow at that effective width without relying on browser-specific zoom APIs.
    await page.setViewportSize({ width: 640, height: 900 });
    await seedLocale(page, locale);
    const response = await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });
    expect(response?.ok()).toBeTruthy();
    await assertPageHealth(page, locale);
    const overflow = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      client: document.documentElement.clientWidth,
    }));
    expect(overflow.scroll, "200% zoom proxy horizontal overflow").toBeLessThanOrEqual(overflow.client + 2);
  });
}
