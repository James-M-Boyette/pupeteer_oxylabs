import puppeteer from "puppeteer";

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    
    // If we just take a screen shot, Puppeteer defaults to a browser size of 800x600 - in order to change this (and get a larger screen shot) we need to use teh 'setViewport' function
    await page.setViewport({
        width: 1920,
        height: 1080,
    });    

    await page.goto('https://oxylabs.io/');

    await page.screenshot({path: 'oxylabs_1080.png'}) 
    // await browser.close();
})();
