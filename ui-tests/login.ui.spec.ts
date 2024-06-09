import { test } from '../fixtures/base.page';
import { AuthUtils } from '../helper/authUtils';
import { LoginTemplate } from '../data-factory/templates/loginTemplate';

let authUtils: AuthUtils;

test.beforeEach(async ({ context, page }) => {
    authUtils = new AuthUtils(page);
    await authUtils.goto('/beneficiario');
    context.clearCookies();
});

test.describe("Login feature tests", async () => {
    const loginTemplate = new LoginTemplate();

    test("Login with invalid user and valid password", async ({ loginPage }) => {
        const invalidTemplate = loginTemplate.giveme("invalidUser");
        await loginPage.loginToPage(invalidTemplate.user as string, invalidTemplate.password as string);
        await loginPage.assertUserInvalidMessageIsVisible();
    });

    test("Login with valid user and invalid password", async ({ loginPage }) => {
        const invalidTemplate = loginTemplate.giveme("invalidPassword");
        await loginPage.loginToPage(invalidTemplate.user as string, invalidTemplate.password as string);
        await loginPage.assertPassewordInvalidMessageIsVisible();
    });

    test("Login with empty user field and valid password", async ({ loginPage }) => {
        const invalidTemplate = loginTemplate.giveme("fakerUserAndPassword");
        await loginPage.emptyEmailField(invalidTemplate.password as string);
        await loginPage.assertPassewordInvalidMessageIsVisible();
    });


    test("Login with faker user and password", async ({ loginPage }) => {
        const invalidTemplate = loginTemplate.giveme("fakerUserAndPassword");
        await loginPage.loginToPage(invalidTemplate.user as string, invalidTemplate.password as string);
        await loginPage.assertPassewordInvalidMessageIsVisible();
    });
});