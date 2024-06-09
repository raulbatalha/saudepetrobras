import { test } from '../fixtures/base.page';
import { AuthUtils } from '../helper/authUtils';
import { StateCityTemplate, PlanSearchTemplate } from '../data-factory/templates/customTemplate';

let authUtils: AuthUtils;

test.beforeEach(async ({ context, page }) => {
    authUtils = new AuthUtils(page);
    await authUtils.goto('/busca_rede');
    context.clearCookies();
});

test.describe("Accredited Network feature tests", async () => {
    const stateCityTemplate = new StateCityTemplate();
    const planSearchTemplate = new PlanSearchTemplate();

    test("Create a search with a valid value", async ({ accreditedNetworkPage }) => {
        const provinceTemplate = stateCityTemplate.giveme("cityAndStateValid");
        const descriptionTemplate = planSearchTemplate.giveme ("planAndSearchValid")
        
        await accreditedNetworkPage.fillAllSearchField( provinceTemplate.state as string, provinceTemplate.city as string, descriptionTemplate.plan as string);
        await accreditedNetworkPage.fillSearchField(descriptionTemplate.search as string)
        await accreditedNetworkPage.assertTableIsVisible(4);
    });

    test("Create a search with a invalid value", async ({ accreditedNetworkPage }) => {
        const provinceTemplate = stateCityTemplate.giveme("cityAndStateValid");
        const descriptionTemplate = planSearchTemplate.giveme ("planAndSearchInvalid")
        
        await accreditedNetworkPage.fillAllSearchField( provinceTemplate.state as string, provinceTemplate.city as string, descriptionTemplate.plan as string);
        await accreditedNetworkPage.fillSearchField(descriptionTemplate.search as string)
        await accreditedNetworkPage.assertNoResultsMessageIsVisible('Nenhum resultado encontrado...');
    });
});