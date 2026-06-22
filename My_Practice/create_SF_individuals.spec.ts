import { test,expect } from "@playwright/test";

test("Create Individual",async ({page}) => {
    const lastName="Monkey"
    await page.goto("https://login.salesforce.com")
    await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('[id="password"]').fill("TestLeaf@2025")
    await page.locator('[id="Login"]').click()
    await page.locator('[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator('//div[@title="New"]').last().click()
    await page.locator('[placeholder="Last Name"]').fill(lastName)
    await page.locator('//span[text()="Save"]').click()
    await expect(page.locator('//h1[.//div[text()="Individual"]]//span')).toHaveText(lastName)
    console.log("End of testCase");
})