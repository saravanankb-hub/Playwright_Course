import {chromium,test,expect} from "@playwright/test"

test("Edit Lead in leaftaps:",async ({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("demoCSR2")

    await page.locator('[class="inputLogin"]').nth(1).fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator(`text='CRM/SFA'`).click()
    await expect(page).toHaveTitle('My Home | opentaps CRM')
    await page.locator(`text='Create Lead'`).nth(0).click()

    const cmpyName="Perfi"
    const firstName="Sand"
    const lastName="Wich"
    const newCmpyName="Updated-Perfiii-love"
    await page.locator('[id="createLeadForm_companyName"]').fill(cmpyName)
    await page.locator('[id="createLeadForm_firstName"]').fill(firstName)
    await page.locator('[id="createLeadForm_lastName"]').fill(lastName)
    await page.locator('[name="submitButton"]').click()
    
    await expect(page).toHaveTitle('View Lead | opentaps CRM')
    
    let cmpyTextUI=await page.locator('[id="viewLead_companyName_sp"]')
    cmpyTextUI.isVisible()
    await page.locator('[id="viewLead_firstName_sp"]').isVisible()
    await page.locator('[id="viewLead_lastName_sp"]').isVisible()
    await expect(page.locator('[id="viewLead_firstName_sp"]')).toContainText(firstName)
    await expect(page.locator('[id="viewLead_lastName_sp"]')).toContainText(lastName)

    await page.locator(`text='Edit'`).click()
    await page.locator('[id="sectionHeaderTitle_leads"]').isVisible()
    await page.locator('[id="updateLeadForm_companyName"]').fill(newCmpyName)
    await page.locator('[value="Update"]').click()
    cmpyTextUI.isVisible()

})