import { Page, expect } from "@playwright/test";
import { ConfigReader } from "../config-reader/config.reader";

export class LoginPage {
    private page: Page
    private userTextbox = () => this.page.locator('#UserId');
    private passwordTextbox = () => this.page.locator('#password');
    private signInButton = () => this.page.getByRole('button', { name: 'Entrar' });
    private errorMessage = () => this.page.getByRole('alert');
    private errorMessageCard = () => this.page.locator('#msgCarteirinha')
    
    private configReader: ConfigReader;

    constructor(page: Page) {
        this.page = page;
        this.configReader = ConfigReader.getEnvVars();
    }

    public async goto() {
        await this.page.goto(ConfigReader.APP_URL);
    }

    public async loginToPage(email: string, password: string) {
        await this.userTextbox().fill(email);
        await this.passwordTextbox().fill(password);
        await this.signInButton().click();
    }

    public async emptyEmailAndPasswordField(email: string, password: string) {
        await this.userTextbox().fill(email);
        await this.passwordTextbox().fill(password);
        await this.signInButton().isDisabled;
    }

    public async emptyEmailField(password: string) {
        await this.userTextbox().click();
        await this.page.keyboard.press('Tab');
        await this.passwordTextbox().fill(password);
    }

    public async emptyPasswordField(email: string) {
        await this.userTextbox().fill(email);

        for (let i = 0; i < 2; i++) {
            await this.page.keyboard.press('Tab');
        }
    }

    /***
     * This code part should be the asserts
     */

    public async assertUserInvalidMessageIsVisible() {
        const errorItemElement = await this.errorMessage();

        await expect(errorItemElement).toBeVisible();
    }

    public async assertPassewordInvalidMessageIsVisible() {
        const errorItemElement = await this.errorMessageCard();

        await expect(errorItemElement).toBeVisible();
    }
}