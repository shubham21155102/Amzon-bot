const puppeteer=require('puppeteer');
const instagram='https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3Ftag%3Dmsndeskabkin-21%26hvadid%3D72705283629710%26hvqmt%3De%26hvbmt%3Dbe%26hvdev%3Dc%26ref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&';
const userId=//define;
const password=//define;
function waitAndClick(selector,cpage){
    return new Promise((resolve, reject) => {
        let waitPromise=cpage.waitForSelector(selector,{visible:true})
        waitPromise.then(function(){
            let clickPromise=cpage.click(selector)
            return clickPromise;
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject(err);
        })
    })
}

(async () => {
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:["--start-maximized"]
    })
    const page = await browser.newPage()
    // await page.setDefaultNavigationTimeout(0)
    await page.goto(instagram)
    await page.type("#ap_email",userId,{delay:50})
    await page.click("#continue",{delay:50})
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
    // await page.goBack();
    await page.type("#ap_password",password,{delay:50});
    await page.click("#signInSubmit",{delay:50})
    await page.waitForNavigation();
    await page.click("#nav-orders",{delay:50})
    // { waitUntil: 'load', timeout: 0 }
    await page.screenshot({path: 'example.png', fullPage: true},{delay:500});
    // await page.waitForNavigation();
    // const f=await page.click('.a-link-normal');
    // await page.click("#twotabsearchtextbox",{delay:50});
//     await page.type("#twotabsearchtextbox","iphone 12",{delay:50});
//     //nav-search-submit-button
//     await page.click("#nav-search-submit-button",{delay:50})
//     await page.waitForNavigation();
//     // await page.click("div['data-index'='3']",{delay:50})
//     const element = await page.$('#example');
// const element_property = await element.getProperty('innerHTML');
// const inner_html = await element_property.jsonValue();
    // await page.click('#csd-encrypted-div-f5a44a89-f500-49e4-8834-4b07776b4c1f',{delay:50});
//     const element = await page.$('#csd-encrypted-div-f5a44a89-f500-49e4-8834-4b07776b4c1f');
// const element_property = await element.getProperty('innerHTML');
// const inner_html = await element_property.jsonValue();
// console.log(inner_html);
// await page.screenshot({path: 'example.png', fullPage: true});
// await browser.close();
   })()