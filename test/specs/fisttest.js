//const { pause } = require("webdriverio/build/commands/browser");

//const { pause } = require("webdriverio/build/commands/browser");

describe('open google search page', function(){
    it('open google page',async ()=>{
        const AText =await $('#APjFqb');
        const selectThird =await $('#c7mM1c');
        await browser.url('https://google.com');
        await AText.setValue('Hello World');
        await selectThird.click();
        await browser.pause(10000);
       // pause(1000);
    })
})