import {test} from "@playwright/test"

test("Storing the sessino data of SF login",async ({page}) => {
    await page.goto("https://login.salesforce.com")
    await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('[id="password"]').fill("TestLeaf@2025")
    await page.locator('[id="Login"]').click()
    await page.context().storageState({path:'session_data/Salesforcelogin.json'})
    await page.waitForTimeout(30000)
})