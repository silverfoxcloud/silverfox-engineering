import { test, expect } from "@playwright/test";

const baseURL = "http://127.0.0.1:4173";
const widths = [
  { name: "320", width: 320, height: 900 },
  { name: "375", width: 375, height: 900 },
  { name: "430", width: 430, height: 932 },
  { name: "768", width: 768, height: 1024 },
  { name: "1024", width: 1024, height: 900 },
  { name: "1280", width: 1280, height: 900 },
  { name: "1440", width: 1440, height: 1000 },
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

const legacyRoutes = [
  ["/fa/", "/"],
  ["/fa/architecture/", "/architecture/"],
  ["/fa/technology-radar/", "/technology-radar/"],
  ["/fa/platforms/fox-pay/", "/platforms/fox-pay/"],
  ["/fa/packages/", "/packages/"],
  ["/fa/packages/sfas-core/", "/packages/sfas-core/"],
  ["/fa/engineering/", "/engineering/"],
  ["/fa/architecture-decisions/", "/architecture-decisions/"],
  ["/fa/build-stories/", "/build-stories/"],
  ["/fa/changelog/", "/changelog/"],
];

function slugify(route) {
  return route === "/" ? "home" : route.replace(/^\/+|\/+$/g, "").replace(/\//g, "-");
}

async function seedLocale(page, locale) {
  await page.addInitScript((value) => {
    window.localStorage.setItem("silverfox-engineering-locale", value);
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

  const overflow = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    client: document.documentElement.clientWidth,
  }));
  expect(overflow.scroll, "horizontal overflow").toBeLessThanOrEqual(overflow.client + 2);

  const brokenImages = await page.locator("img").evaluateAll((images) =>
    images.filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.src),
  );
  expect(brokenImages).toEqual([]);

  const legacyLinks = await page.locator('a[href^="/fa"], a[href*="engineering.silverfoxcloud.com/fa/"]').count();
  expect(legacyLinks, "normal navigation must never generate /fa links").toBe(0);
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

  await page.locator('a[href="/architecture/"]').first().click();
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

for (const [legacy, clean] of legacyRoutes) {
  test(`legacy ${legacy} migrates to ${clean} and preserves Persian`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(baseURL + legacy, { waitUntil: "domcontentloaded" });
    await page.waitForURL(baseURL + clean);
    await expect(page.locator("html")).toHaveAttribute("lang", "fa");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.locator("main")).toHaveAttribute("lang", "fa");
    expect(await page.evaluate(() => localStorage.getItem("silverfox-engineering-locale"))).toBe("fa");
  });
}

test("desktop mega menu closes with Escape and returns focus", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await seedLocale(page, "en");
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });
  const trigger = page.locator(".megaNavButton").first();
  await trigger.focus();
  await trigger.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(".megaSurface")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".megaSurface")).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test("mobile navigation uses an accessible accordion and returns focus on Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await seedLocale(page, "fa");
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });
  const trigger = page.locator(".mobileMenuTrigger");
  await trigger.click();
  await expect(page.locator(".mobileNavSurface")).toBeVisible();
  const group = page.locator(".mobileGroupTrigger").first();
  await expect(group).toHaveAttribute("aria-expanded", "true");
  await group.click();
  await expect(group).toHaveAttribute("aria-expanded", "false");
  await group.click();
  await expect(group).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(page.locator(".mobileNavSurface")).toHaveCount(0);
  await expect(trigger).toBeFocused();
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
