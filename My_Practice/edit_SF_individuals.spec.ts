import { test,expect } from "@playwright/test";

test("Create Individual",async ({page}) => {
    const lastName="Monkey"
    const firstNameUpdate="sarav"
    await page.goto("https://login.salesforce.com")
    await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('[id="password"]').fill("TestLeaf@2025")
    await page.locator('[id="Login"]').click()
    await page.locator('[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator('[placeholder="Search this list..."]').fill(lastName)
    await page.keyboard.press('Enter');
    await page.locator('[title="'+lastName+'"]').isVisible
    await page.locator('//tr[@data-row-number="1"]/td').last().click()
    await page.keyboard.press('Enter');

    await page.locator(`text='Edit'`).click()
    await page.locator('//span[text()="Salutation"]/parent::span/following-sibling::div//span').click()
    await page.locator('[title="Mr."]').click()
    await page.locator('[placeholder="First Name"]').fill(firstNameUpdate)
    await page.locator('//span[text()="Save"]').click()
    await expect(page.locator('//div[contains(@id,"toastDescription")]/span')).toContainText(/sarav.*saved/i);
    
    console.log("End of testCase");
})