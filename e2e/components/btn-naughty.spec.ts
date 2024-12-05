import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/components/btn-naughty/");
});

test("页面必须存在（title 不可出现 404）", async ({ page }) => {
  const title = await page.title();
  expect(title).not.toContain("404");
});

test.describe("基本用法", () => {
  test("必须有文字为「基本用法」的 h3", async ({ page }) => {
    const h3Els = page.locator("h3");
    const target = h3Els.getByText("基本用法");
    await expect(target).toBeVisible();
  });

  test("必须包含一个按钮", async ({ page }) => {
    const section = page.getByTitle("basic-usage");
    await expect(section).toBeVisible();

    const button = section.getByRole("button");
    await expect(button).toBeVisible();
  });

  test("停用时，按钮被 hover 会移动", async ({ page }) => {
    const section = page.getByTitle("basic-usage");
    await expect(section).toBeVisible();

    const button = section.getByRole("button");
    // boundingBox 用於取得元素的位置與大小
    const beforeBoundingBox = await button.boundingBox();

    await button.hover();
    await page.waitForTimeout(800);

    const afterBoundingBox = await button.boundingBox();

    if (!beforeBoundingBox || !afterBoundingBox) {
      throw new Error("boundingBox is null");
    }

    expect(beforeBoundingBox.x).not.toBe(afterBoundingBox.x);
    expect(beforeBoundingBox.y).not.toBe(afterBoundingBox.y);

    expect(beforeBoundingBox.width).toBeCloseTo(afterBoundingBox.width);
    expect(beforeBoundingBox.height).toBeCloseTo(afterBoundingBox.height);
  });

  test("停用时，按钮被 click 会移动", async ({ page }) => {
    const section = page.getByTitle("basic-usage");
    await expect(section).toBeVisible();

    const button = section.getByRole("button");
    const beforeBoundingBox = await button.boundingBox();

    await button.click();
    await page.waitForTimeout(800);

    const afterBoundingBox = await button.boundingBox();

    if (!beforeBoundingBox || !afterBoundingBox) {
      throw new Error("boundingBox is null");
    }

    expect(beforeBoundingBox.x).not.toBe(afterBoundingBox.x);
    expect(beforeBoundingBox.y).not.toBe(afterBoundingBox.y);

    expect(beforeBoundingBox.width).toBeCloseTo(afterBoundingBox.width);
    expect(beforeBoundingBox.height).toBeCloseTo(afterBoundingBox.height);
  });

  test("沒有停用时，按钮被 hover 不会移动", async ({ page }) => {
    const section = page.getByTitle("basic-usage");
    await expect(section).toBeVisible();

    // 取消停用
    const checkbox = section.getByRole("checkbox");
    checkbox.uncheck();

    const button = section.getByRole("button");
    const beforeBoundingBox = await button.boundingBox();

    await button.hover();
    await page.waitForTimeout(800);

    const afterBoundingBox = await button.boundingBox();

    if (!beforeBoundingBox || !afterBoundingBox) {
      throw new Error("boundingBox is null");
    }

    expect(beforeBoundingBox.x).toBeCloseTo(afterBoundingBox.x);
    expect(beforeBoundingBox.y).toBeCloseTo(afterBoundingBox.y);

    expect(beforeBoundingBox.width).toBeCloseTo(afterBoundingBox.width);
    expect(beforeBoundingBox.height).toBeCloseTo(afterBoundingBox.height);
  });

  test("沒有停用时，按钮被 click 不会移动", async ({ page }) => {
    const section = page.getByTitle("basic-usage");
    await expect(section).toBeVisible();

    // 取消停用
    const checkbox = section.getByRole("checkbox");
    checkbox.uncheck();

    const button = section.getByRole("button");
    const beforeBoundingBox = await button.boundingBox();

    await button.click();
    await page.waitForTimeout(800);

    const afterBoundingBox = await button.boundingBox();

    if (!beforeBoundingBox || !afterBoundingBox) {
      throw new Error("boundingBox is null");
    }

    expect(beforeBoundingBox.x).toBeCloseTo(afterBoundingBox.x);
    expect(beforeBoundingBox.y).toBeCloseTo(afterBoundingBox.y);

    expect(beforeBoundingBox.width).toBeCloseTo(afterBoundingBox.width);
    expect(beforeBoundingBox.height).toBeCloseTo(afterBoundingBox.height);
  });
});

test.describe("移动距离", () => {
  test("必须有文字为「移动距离」的 h3", async ({ page }) => {
    const h3Els = page.locator("h3");
    const target = h3Els.getByText("移动距离");
    await expect(target).toBeVisible();
  });

  test("必须包含一个按钮", async ({ page }) => {
    const section = page.getByTitle("moving-distance");
    await expect(section).toBeVisible();

    const button = section.getByRole("button");
    await expect(button).toBeVisible();
  });

  test("超出最大范围，按钮会自动回归", async ({ page }) => {
    const section = page.getByTitle("moving-distance");

    // 滾动到按钮位置，以免 scroll 導致 boundingBox 偏移
    const button = section.getByRole("button");
    await button.scrollIntoViewIfNeeded();

    const beforeBoundingBox = await button.boundingBox();

    // 先觸發一次移动（click 会自动 scroll，改用 dispatchEvent ）
    await button.dispatchEvent("click");

    // 設定最大范围为 0
    const input = section.locator("input");
    await input.fill("0");

    // 由於最大范围为 0，按钮会回归原位
    await button.dispatchEvent("click");
    await page.waitForTimeout(800);

    const afterBoundingBox = await button.boundingBox();

    if (!beforeBoundingBox || !afterBoundingBox) {
      throw new Error("boundingBox is null");
    }

    expect(afterBoundingBox.x).toBeCloseTo(beforeBoundingBox.x);
    expect(afterBoundingBox.y).toBeCloseTo(beforeBoundingBox.y);
  });
});

test.describe("自定义按钮", () => {
  test("必须有文字为「自定义按钮」的 h3", async ({ page }) => {
    const h3Els = page.locator("h3");
    const target = h3Els.getByText("自定义按钮");
    await expect(target).toBeVisible();
  });

  test("自定义按钮的背景色为 rgb(255, 131, 69)", async ({ page }) => {
    const section = page.getByTitle("custom-button");

    const target = section.getByText("自定义按钮");

    expect(target).toBeVisible();
    // 取出按钮的實際樣式
    const style = await target.evaluate((el) => window.getComputedStyle(el));
    expect(style.backgroundColor).toBe("rgb(255, 131, 69)");
  });
});

test.describe("自定义拓印", () => {
  test("必须有文字为「自定义拓印」的 h3", async ({ page }) => {
    const h3Els = page.locator("h3");
    const target = h3Els.getByText("自定义拓印");
    await expect(target).toBeVisible();
  });

  test("自定义拓印的文字为「啪！跑了」，border 为 dashed", async ({ page }) => {
    const section = page.getByTitle("custom-rubbing");

    const target = section.getByText("啪！跑了");

    expect(target).toBeVisible();
    // 取出按钮的實際樣式
    const style = await target.evaluate((el) => window.getComputedStyle(el));
    expect(style.borderStyle).toBe("dashed");
  });
});
