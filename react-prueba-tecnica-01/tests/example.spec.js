// @ts-check
import { test, expect } from "@playwright/test";

const LOCAL_HOST = "http://127.0.0.1:5173/";
const PREFIX_URL = "https://cataas.com";

test("App shows random fact and image", async ({ page }) => {
  await page.goto(LOCAL_HOST);

  const text = await page.getByRole("paragraph");
  const image = await page.getByRole("img");

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute("src");

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(PREFIX_URL)).toBeTruthy();
});
