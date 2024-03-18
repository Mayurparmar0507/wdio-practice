//const { pause } = require("webdriverio/build/commands/browser");

//const { pause } = require("webdriverio/build/commands/browser");

describe('open google search page', function(){
    it('open google page',async ()=>{
        const AText =await $('#APjFqb');
        const selectThird =await $('#c7mM1c');
        const verifyFilter= await $('.fKmH1e');
        await browser.url('https://google.com');
        await AText.setValue('Hello World');
        await browser.getTitle();
        await selectThird.click();
        await console.log(verifyFilter.isExisting()?'true' : 'false');
        await browser.pause(10000);

       // pause(1000);
    })
})