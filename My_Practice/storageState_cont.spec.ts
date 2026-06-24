import {test} from "@playwright/test"

test.use({
    storageState:'session_data/Salesforcelogin.json'
})
test("Storage state purpose here: ",async ({page}) => {

    await page.goto('https://testleaf.lightning.force.com/lightning/page/home')
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