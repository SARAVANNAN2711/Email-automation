const puppeteer = require('puppeteer');
//const mysql = require('mysql2/promise');
//const nodemailer = require('nodemailer');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async () => {
    // Launch the browser
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--disable-gpu",
        "--no-sandbox",
        "--start-maximized",
        "--disable-web-security",
        "--disable-features=IsolateOrigins,site-per-process",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--disable-software-rasterizer",
        "--enable-chrome-browser-cloud-management",
        "--disable-blink-features=AutomationControlled",
        "--disable-notifications",
        "--disable-infobars",
        "--disable-popup-blocking",
        "--suppress-message-center-popups",
        "--disable-save-password-bubble"] // Useful arguments for stability
    });

    // Open a new page
    const page = await browser.newPage();

    // Set viewport size
    await page.setViewport({
        width: 1280,
        height: 720
    });

    // Navigate to a website
    await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AVdkyDm5DYlyNJOlTIMK_tvLYbVDfXsbs1C7zvhMcM87nCUzJZHkJNSVs5M7MzDCbP-K5rJruVH7wg&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin', {
        waitUntil: 'networkidle2' // Wait for the page to load completely
    });

    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await page.type('#identifierId', 'helpme21b019@gmail.com');
    await page.waitForSelector('#identifierNext', { visible: true, timeout: 30000 });
    const loginLink = await page.$('#identifierNext');
    await loginLink.evaluate(link => link.click());
    console.log("entered mail and clicked next");
    await sleep(3000);
    await page.screenshot({ path: 'screenshot2.png', fullPage: true });
    await page.waitForSelector('[type="password"]', { visible: true, timeout: 30000 });
    await page.type('[type="password"]', 'dummypassword');
    await sleep(3000);

    //    await page.waitForSelector('button:has-text("Next") ', { visible: true, timeout: 30000 });
    await page.waitForSelector('#passwordNext button.VfPpkd-LgbsSe', { visible: true, timeout: 30000 });
    const npLink = await page.$('#passwordNext button.VfPpkd-LgbsSe');
    await npLink.evaluate(link => link.click());
    console.log("entered password and clicked next");
    await sleep(3000);
    await page.waitForSelector('.z0 div', { visible: true, timeout: 60000 });
    const composeLink = await page.$('.z0 div');
    await composeLink.evaluate(link => link.click());
    console.log("entered dashboard and clicked compose ready for the content to be typed!");

    await page.waitForSelector('input.agP', { visible: true, timeout: 30000 });
    const toLink = await page.$('input.agP');
    await toLink.evaluate(link => link.click());
    await page.type('input.agP', 'abc');

    await page.waitForSelector('input[name="subjectbox"]', { visible: true, timeout: 30000 });
    const subjectLink = await page.$('input[name="subjectbox"]');
    await subjectLink.evaluate(link => link.click());
    await page.type('input[name="subjectbox"]', 'abc');

    await page.waitForSelector('div[aria-label="Message Body"]', { visible: true, timeout: 30000 });
    const bodyLink = await page.$('div[aria-label="Message Body"]');
    await bodyLink.evaluate(link => link.click());
    await page.type('div[aria-label="Message Body"]', 'abc');

    await page.waitForSelector('.dC .aoO ', { visible: true, timeout: 30000 });
    const sendLink = await page.$('.dC .aoO ');
    await sendLink.evaluate(link => link.click());

    // Close the browser
    //await browser.close();
})();