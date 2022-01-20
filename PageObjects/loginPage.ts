import { Expect, Page } from "@playwright/test";


// import { Page } from "playwright";
export class LoginPage {
  readonly page: Page;
  readonly expect: Expect;
  websiteURL: string = "https://saucedemo.com";
  usernameSelector: string = "#user-name";
  passwordSelector: string = "#password";
  loginButtonSelector: string = "#login-button";
  appLogoSelector: string = ".app_logo";

  constructor(page: Page, expect: Expect) {
    this.page = page;
    this.expect = expect;
  }

  async navigateToLoginPage() {
    await this.page.goto(this.websiteURL);
  }

  async login(username, password) {
    const usernameLocator = this.page.locator(this.usernameSelector);
    await usernameLocator.fill(username);
    const passwordLocator = this.page.locator(this.passwordSelector);
    await passwordLocator.fill(password);
    const loginButtonLocator = this.page.locator(this.loginButtonSelector);
    await loginButtonLocator.click();
  }

  async navigateToMainPage() {
    const logoLocator = this.page.locator(this.appLogoSelector);
    await this.expect(logoLocator).toBeVisible();
  }
}
