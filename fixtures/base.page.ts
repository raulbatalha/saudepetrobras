import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { AccreditedNetworkPage } from "../pages/accredited.network.page";

export const test = base.extend<{
  loginPage: LoginPage, accreditedNetworkPage: AccreditedNetworkPage}
  >({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  accreditedNetworkPage: async ({ page }, use) => {
    await use(new AccreditedNetworkPage(page));
  }
});
