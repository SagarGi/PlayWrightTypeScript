import {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { devices, chromium, Browser } from "playwright";
const { expect } = require("@playwright/test");
import { OurWorld } from "./types";
// global.expect = expect;

export let browser: Browser;
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  // Browsers are expensive in Playwright so only create 1
  browser = await chromium.launch({
    // Not headless so we can watch test runs
    headless: false,
    // Slow so we can see things happening
    slowMo: 1000,
  });
});
AfterAll(async function () {
  browser.close();
});

Before(async function (this: OurWorld) {
  this.expect = expect;
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

// Cleanup after each scenario
After(async function (this: OurWorld) {
  await this.page.close();
  await this.context.close();
});
