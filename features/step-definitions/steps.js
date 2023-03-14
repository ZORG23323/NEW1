import { Given, When, Then } from '@wdio/cucumber-framework';
const Urlobj = new Map([
    ["главную", "/"],
    ["Тарифы", "/tariffs"],
    ["Номера", "/shop/number"]
])
const selectors = {
    tariffsCard: (tariffs) => `//h3[text()='${tariffs}']`,
        header: "div.h1"
}

Given(/^заходит на "([^"]*)" страницу Теле2$/, async (page) => {
    await browser.url(`https://msk.tele2.ru${Urlobj.get(page)}`)
});

Then(/^нажимает на карточку тариф "([^"]*)"$/, async (tariffs) => {
    await (await $(selectors.tariffsCard(tariffs))).click()
});

Then(/^открылась страница карточки "([^"]*)"$/, async (tariffs) => {
    await browser.waitUntil(async () => {
        return (await browser.getUrl()).includes(tariffs)
    })
});

Then(/^отобразился заголовок "([^"]*)"$/, async (tariffs) => {
    await expect(await $(selectors.header)).toHaveText(tariffs)
});