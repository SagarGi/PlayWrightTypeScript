import { World as CucumberWorld } from "@cucumber/cucumber";
import { BrowserContext, Page } from "playwright";
import { Expect } from "@playwright/test";
import { LoginPage } from "./PageObjects/loginPage";

export interface OurWorld extends CucumberWorld {
  context: BrowserContext;
  page: Page;
  expect: Expect;
}
