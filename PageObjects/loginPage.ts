import { Page } from "playwright";
import { OurWorld } from "../types";

export class LoginPage {
  async navigateToLoginPage() {
    await page.goto("https://www.saucedemo.com");
  }
}
