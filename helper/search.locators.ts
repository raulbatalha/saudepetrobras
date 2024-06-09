import { Page} from "@playwright/test";

export class SearchLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public createLocator = (index: number) => ({
    search: () => this.page.locator(`#select2-chosen-${index}`),
    searchField: () => this.page.locator(`#s2id_autogen${index}_search`)
  });
}
