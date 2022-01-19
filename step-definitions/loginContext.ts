import { Given, When, Then, World } from "@cucumber/cucumber";
import { LoginPage } from "../PageObjects/loginPage";

const loginPage: LoginPage = new LoginPage();
Given("the user has browsed to login page", async function () {
  await loginPage.navigateToLoginPage();
});
