import { Given, When, Then, World } from "@cucumber/cucumber";
import { LoginPage } from "../PageObjects/loginPage";

Given("the user has browsed to login page", async function () {
  // await this.page.goto("https://saucedemo.com");
  // const page = this.page;
  // const expect = this.expect;
  const loginPage = new LoginPage(this.page, this.expect);
  await loginPage.navigateToLoginPage();
});

When(
  "the user logs in with valid username {string} and valid password {string}",
  async function (username: string, password: any) {
    const loginPage = new LoginPage(this.page, this.expect);
    await loginPage.login(username, password);
  }
);

Then("the user should be able to acces his account", async function () {
  const loginPage = new LoginPage(this.page, this.expect);
  await loginPage.navigateToMainPage();
});
