import { Given, When, Then } from '@wdio/cucumber-framework';
const Urlobj = new Map([
    ["Главная", "/"],
    ["Тарифы", "/tariffs"],
    ["Номера", "/shop/number"]
])

Given(/^заходит на "([^"]*)" страницу Теле2$/, async (page) => {
    await browser.url(`https://msk.tele2.ru${page}`)
});
