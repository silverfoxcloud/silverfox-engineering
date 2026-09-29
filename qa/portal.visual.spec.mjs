import { test, expect } from "@playwright/test";

const baseURL = "http://127.0.0.1:4173";

const viewports = [
  { name: "320", width: 320, height: 900 },
  { name: "375", width: 375, height: 900 },
  { name: "430", width: 430, height: 932 },
  { name: "768", width: 768, height: 1024 },
  { name: "1024", width: 1024, height: 900 },
  { name: "1280", width: 1280, height: 900 },
  { name: "1440", width: 1440, height: 1000 },
  { name: "1920", width: 1920, height: 1080 },
];

const majorRoutes = [
  "/",
  "/fa/",
  "/architecture/",
  "/fa/architecture/",
  "/technology-radar/",
  "/fa/technology-radar/",
  "/platforms/sfas/",
  "/fa/platforms/sfas/",
  "/platforms/license-platform/",
  "/fa/platforms/license-platform/",
  "/platforms/fox-pay/",
  "/fa/platforms/fox-pay/",
  "/packages/",
  "/fa/packages/",
  "/packages/sfas-core/",
  "/fa/packages/sfas-core/",
  "/engineering/",
  "/fa/engineering/",
  "/architecture-decisions/",
  "/fa/architecture-decisions/",
  "/build-stories/",
  "/fa/build-stories/",
  "/changelog/",
  "/fa/changelog/",
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
  "/fa/",
  "/fa/architecture/",
  "/fa/platform/",
  "/fa/cloud/",
  "/fa/security/",
  "/fa/data/",
  "/fa/ai/",
  "/fa/devops-sre/",
  "/fa/technology-radar/",
  "/fa/engineering-principles/",
  "/fa/platforms/sfas/",
  "/fa/platforms/license-platform/",
  "/fa/platforms/fox-pay/",
  "/fa/platforms/exotravel/",
  "/fa/platforms/exohub/",
  "/packages/",
  "/packages/sfas-foundation/",
  "/packages/sfas-core/",
  "/packages/sfas-html-adapter/",
  "/packages/sfas-react-adapter/",
  "/packages/sfas-jalali/",
  "/packages/sfas-datatable/",
  "/packages/sfas-date-picker/",
  "/fa/packages/",
  "/fa/packages/sfas-foundation/",
  "/fa/packages/sfas-core/",
  "/fa/packages/sfas-html-adapter/",
  "/fa/packages/sfas-react-adapter/",
  "/fa/packages/sfas-jalali/",
  "/fa/packages/sfas-datatable/",
  "/fa/packages/sfas-date-picker/",
  "/engineering/",
  "/engineering/bidirectional-ui-is-a-release-contract/",
  "/engineering/rights-should-survive-catalog-change/",
  "/engineering/payment-orchestration-without-owning-funds/",
  "/fa/engineering/",
  "/fa/engineering/bidirectional-ui-is-a-release-contract/",
  "/fa/engineering/rights-should-survive-catalog-change/",
  "/fa/engineering/payment-orchestration-without-owning-funds/",
  "/architecture-decisions/",
  "/architecture-decisions/license-tenant-isolation/",
  "/architecture-decisions/license-entitlement-snapshots/",
  "/architecture-decisions/foxpay-byom/",
  "/architecture-decisions/foxpay-provider-adapters/",
  "/architecture-decisions/sfas-directionality/",
  "/fa/architecture-decisions/",
  "/fa/architecture-decisions/license-tenant-isolation/",
  "/fa/architecture-decisions/license-entitlement-snapshots/",
  "/fa/architecture-decisions/foxpay-byom/",
  "/fa/architecture-decisions/foxpay-provider-adapters/",
  "/fa/architecture-decisions/sfas-directionality/",
  "/build-stories/",
  "/build-stories/shipping-seven-sfas-packages/",
  "/build-stories/license-engine-v1/",
  "/build-stories/foxpay-multi-tenant-core/",
  "/fa/build-stories/",
  "/fa/build-stories/shipping-seven-sfas-packages/",
  "/fa/build-stories/license-engine-v1/",
  "/fa/build-stories/foxpay-multi-tenant-core/",
  "/changelog/",
  "/fa/changelog/",
];

function slugify(route) {
  return route === "/" ? "home" : route.replace(/^\/+|\/+$/g, "").replace(/\//g, "-");
}

async function settleVisualState(page) {
  await page.waitForTimeout(900);
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 650) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(45);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(180);
}

async function assertPageHealth(page, route) {
  const isFa = route === "/fa/" || route.startsWith("/fa/");
  await expect(page.locator("main")).toHaveAttribute("lang", isFa ? "fa" : "en");
  await expect(page.locator("main")).toHaveAttribute("dir", isFa ? "rtl" : "ltr");
  await expect(page.locator("h1").first()).toBeVisible();

  const overflow = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    client: document.documentElement.clientWidth,
  }));
  expect(overflow.scroll, "horizontal overflow").toBeLessThanOrEqual(overflow.client + 2);

  const brokenImages = await page.locator("img").evaluateAll((images) =>
    images
      .filter((img) => !(img).complete || (img).naturalWidth === 0)
      .map((img) => (img).src),
  );
  expect(brokenImages).toEqual([]);

  const hiddenRevealContent = await page.locator("[data-reveal]").evaluateAll((nodes) =>
    nodes
      .filter((node) => Number.parseFloat(getComputedStyle(node).opacity) < 0.95)
      .map((node) => node.tagName + "." + node.className),
  );
  expect(hiddenRevealContent, "content must never be hidden behind reveal state").toEqual([]);

  const languageHref = await page.locator(".langSwitch").getAttribute("href");
  expect(languageHref).toBeTruthy();
  if (isFa) expect(languageHref).not.toMatch(/^\/fa(?:\/|$)/);
  else expect(languageHref).toMatch(/^\/fa(?:\/|$)/);
}

for (const route of majorRoutes) {
  for (const viewport of viewports) {
    test(`visual ${route} at ${viewport.name}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });

      const consoleErrors = [];
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      page.on("pageerror", (error) => consoleErrors.push(error.message));

      await page.goto(baseURL + route, { waitUntil: "domcontentloaded" });
      await page.evaluate(() => document.fonts.ready);
      await assertPageHealth(page, route);
      await settleVisualState(page);

      await page.screenshot({
        path: testInfo.outputPath(`${slugify(route)}-${viewport.name}.png`),
        fullPage: true,
      });

      expect(consoleErrors, "browser console/page errors").toEqual([]);
    });
  }
}

for (const route of allRoutes) {
  for (const viewport of [
    { name: "mobile", width: 390, height: 844 },
    { name: "desktop", width: 1440, height: 1000 },
  ]) {
    test(`route smoke ${route} ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      const response = await page.goto(baseURL + route, { waitUntil: "domcontentloaded" });
      expect(response?.ok()).toBeTruthy();
      await assertPageHealth(page, route);
    });
  }
}

test("desktop mega menu supports keyboard close", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });
  const trigger = page.locator(".megaNavButton").first();
  await trigger.focus();
  await trigger.press("Enter");
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(".megaSurface")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".megaSurface")).toHaveCount(0);
});

test("mobile navigation opens and closes with Escape in both directions", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ["/", "/fa/"]) {
    await page.goto(baseURL + route, { waitUntil: "domcontentloaded" });
    const trigger = page.locator(".mobileMenuTrigger");
    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator(".mobileNavSurface")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator(".mobileNavSurface")).toHaveCount(0);
  }
});

test("technology radar filtering remains interactive", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(baseURL + "/technology-radar/", { waitUntil: "domcontentloaded" });
  const trial = page.getByRole("button", { name: "Trial", exact: true });
  await trial.click();
  await expect(trial).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".radarDetail")).toBeVisible();
});

test("reduced motion keeps primary content visible and disables nonessential transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(baseURL + "/", { waitUntil: "domcontentloaded" });
  const state = await page.evaluate(() => {
    const capability = document.querySelector(".capabilityRow");
    const visual = document.querySelector(".capabilityVisual img");
    return {
      capabilityOpacity: capability ? getComputedStyle(capability).opacity : null,
      capabilityVisibility: capability ? getComputedStyle(capability).visibility : null,
      visualTransition: visual ? getComputedStyle(visual).transitionDuration : null,
    };
  });
  expect(state.capabilityOpacity).toBe("1");
  expect(state.capabilityVisibility).toBe("visible");
  expect(state.visualTransition).toBe("0s");
});
