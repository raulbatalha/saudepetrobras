import { Page } from "@playwright/test";
import { ConfigReader } from "../config-reader/config.reader";
//const path = require('path');
//const storageState = path.join(__dirname, 'authToken', '.auth', 'loginAuth.json');

export class AuthUtils {
    private page: Page;

    private userTextbox = () => this.page.locator('#UserId');
    private passwordTextbox = () => this.page.locator('#password');
    private signInButton = () => this.page.getByRole('button', { name: 'Entrar' });

    private configReader: ConfigReader;

    constructor(page: Page) {
        this.page = page;
        this.configReader = ConfigReader.getEnvVars();
    }

    async goto(extension) {
        await this.page.goto(ConfigReader.APP_URL + extension);
    }

    async loginToPage(email: string, password: string) {
        await this.userTextbox().fill(email);
        await this.passwordTextbox().fill(password);
        await this.signInButton().click();
        //await this.page.context().storageState({ path: storageState });
    }
}
