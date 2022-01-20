import {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { devices, chromium } from "playwright";
const { expect } = require("@playwright/test");
import { OurWorld } from "./types";
global.expect = expect;
setDefaultTimeout(60 * 1000);
BeforeAll(async function () {
  // Browsers are expensive in Playwright so only create 1
  global.browser = await chromium.launch({
    // Not headless so we can watch test runs
    headless: false,
    // Slow so we can see things happening
    slowMo: 2000,
  });
});
AfterAll(async function () {
  await global.browser.close();
});

// Before(async function () {
//   this.context = await global.browser.newContext();
//   this.page = await this.context.newPage();
// });

Before(async function () {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

// Cleanup after each scenario
// After(async function (this: OurWorld) {
//   await this.page.close();
//   await this.context.close();
// });

After(async function () {
  await page.pause();
  await global.page.close();
  await global.context.close();
});
