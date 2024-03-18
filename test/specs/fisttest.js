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
        await expect(verifyFilter).toBeExisting();
        //await console.log(verifyFilter.isExisting()?'true' : 'false');
        await browser.pause(100);

       // pause(1000);
    })
    it('open epedia.com',async ()=>{
        const whereTOSearchButton = await $('[data-stid="destination_form_field-menu-trigger"]'); 
        const wheretoSearchField = await $('#destination_form_field');
        const clickOnTimesquerFromSearch =await  $('[aria-label="Ahmedabad (AMD - Sardar Vallabhbhai Patel Intl.) India"]')
        const calanderButton =await $('[data-stid="uitk-date-selector-input1-default"]');
        const startDate = await $("div=2"); 
        await browser.url('https://www.expedia.co.in/');
            await browser.pause(2000);
            await whereTOSearchButton.click();
            await browser.pause(2000);
            await wheretoSearchField.click();
            await browser.pause(2000);
            //   await $("div=Popular destinations").waitForDisplayed();
            let inputString ='Ahmedabad';
            await wheretoSearchField.addValue(inputString);
            //  for(let i=0;i<inputString.length;i++){
            //     await wheretoSearchField.addValue(`${inputString[i]}`);
            //     await browser.pause(1000);

            // }
            //await browser.keys("\uE007");
       //     browser.waitForExist(clickOnTimesquerFromSearch[1000]['true']);
            await browser.pause(2000);
            //await calanderButton.click();
           // await console.log(browser.isExisting(clickOnTimesquerFromSearch));
            await clickOnTimesquerFromSearch.click();
            await browser.pause(2000);
            // Get the current date
            let currentDate = new Date();

            // Format the date as Mon-DD-YYYY
            let formattedDate = currentDate.toLocaleString('de-DE', { day: '2-digit',month: 'short' , year: 'numeric' });

            console.log(formattedDate); // Output: Current date in Mon-DD-YYYY format
            await startDate.click();
            await browser.pause(5000);

                        




    })
})