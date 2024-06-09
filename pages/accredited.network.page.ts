import { Page, expect } from "@playwright/test";

export class AccreditedNetworkPage {
  private page: Page;
  private stateSearch = '#select2-chosen-1';
  private citySearch = '#select2-chosen-2';
  private planSearch = '#select2-chosen-3';
  private rowsCount = '.table-container table';
  private tableCount = '.table-container table tbody tr';
  private searchFieldElement = 'input[ng-model="searchFormFields.search.value"]';

  constructor(page: Page) {
    this.page = page;
  }

  private async selectAndFill(inputLocator: string, searchLocator: string, value: string) {
    const select = () => this.page.locator(inputLocator);
    const searchField = () => this.page.locator(searchLocator);

    await select().click();
    await searchField().fill(value);
    await this.page.keyboard.press('Enter');
  }

  async fillAllSearchField(state: string, city: string, plan: string) {
    await this.selectAndFill(this.stateSearch, '#s2id_autogen1_search', state);
    await this.selectAndFill(this.citySearch, '#s2id_autogen2_search', city);
    await this.selectAndFill(this.planSearch, '#s2id_autogen3_search', plan);
  }

  async fillSearchField(value: string) {
    const searchFieldLocator = this.searchFieldElement;

    await this.page.fill(searchFieldLocator, value);
    await this.page.press(searchFieldLocator, 'Enter');
  }

  async getTableRows(selector: string): Promise<string[][]> {
    await this.page.waitForSelector(this.rowsCount);

    const rows = await this.page.$$eval(selector, (rows: Element[]) => {
        return rows.map(row => {
            const columns = row.querySelectorAll('td');
            return Array.from(columns, (column: Element) => (column.textContent ?? '').trim());
        });
    });

    return rows;
}

  /**
 * This code part should be the asserts
  */

  async assertTableIsVisible(expectedValue: number) {
    const tableRows = await this.getTableRows(this.tableCount);
    const rowCount = tableRows.length;

    await expect(rowCount).toEqual(expectedValue);
  }

  async assertNoResultsMessageIsVisible(noResultsMessageVisible: string) {
    await expect(noResultsMessageVisible).toBeTruthy();
  }
}