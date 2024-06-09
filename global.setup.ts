import { Browser, chromium, Page } from "@playwright/test";
let context: any;
let page: Page;
let browser: Browser;

async function globalSetup() {
    const browser: Browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();

    await page.waitForLoadState('load');
    return { browser, context, page };
}

async function afterEach() {
    if (page) {
        await page.close();
    }
}

export default globalSetup;
export { afterEach };