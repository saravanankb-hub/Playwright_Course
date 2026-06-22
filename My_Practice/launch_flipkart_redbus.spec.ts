import { chromium, webkit,test, expect } from "@playwright/test";

test("To launch Flipkart", async () => {
    const browserInstance = await chromium.launch({ headless: false, channel: "chrome" });
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    let url="https://www.redbus.in/";
    await page.goto(url);
    let title=await page.title()
    await expect(page).toHaveTitle("Bus Booking Online and Train Tickets at Lowest Price - redBus")
    await browserInstance.close();
});

test("To launch Red bus", async () => {
    const browserInstance = await webkit.launch({ headless: false, channel: "webkit" });
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://www.flipkart.com/");
    await browserInstance.close();
});