import { chromium,test } from "@playwright/test";

test('Create Salesforce Lead',async ({page}) => {
    await page.goto("https://login.salesforce.com")
    await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('[id="password"]').fill("TestLeaf@2025")
    await page.locator('[id="Login"]').click()
    await page.locator('[title="App Launcher"]').click()
    await page.locator('//div[@aria-label="Apps"]/descendant::p[text()="Sales"]').click()
    await page.locator('//span[@title="Sales"]').isVisible()
    await page.locator('[title="Leads"]').click()
    await page.locator('[title="New"]').nth(1).click()
    await page.locator('[name="salutation"]').click()
    await page.locator('[data-value="Mr."]').click()
    await page.locator('[placeholder="Last Name"]').fill("KB1")
    await page.locator('[name="Company"]').fill("Sarav")
    await page.locator('[name="SaveEdit"]').click()
    await page.locator('[name="primaryField"]').isVisible()

})