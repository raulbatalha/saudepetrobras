import { test as setup } from '@playwright/test';
import { AuthUtils } from '../helper/authUtils';
import { ConfigReader } from "../config-reader/config.reader";

let authUtils: AuthUtils;

setup("Setup login with valid credentials", async ({ page }) => {
    authUtils = new AuthUtils(page);
    await authUtils.goto('/beneficiario');
    await authUtils.loginToPage(ConfigReader.USER, ConfigReader.PASSWORD);
});