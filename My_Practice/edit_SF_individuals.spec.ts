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
    await page.locator('[placeholder="Search this list..."]').fill(lastName)
    await page.keyboard.press('Enter');
    await page.locator('[title="'+lastName+'"]').isVisible
    await page.locator('[title="Show 2 more actions"]').click() // [title="Show 2 more actions]
    await page.keyboard.press('Enter');
    await page.locator(`text='Edit'`).click()

    // await expect(page.locator('//h1[.//div[text()="Individual"]]//span')).toHaveText(lastName)
    console.log("End of testCase");
})