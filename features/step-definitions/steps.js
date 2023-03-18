import { Given, When, Then } from '@wdio/cucumber-framework';
const Urlobj = new Map([
    ["главную", "/"],
    ["Тарифы", "/tariffs"],
    ["Номера", "/shop/number"],
    ["Маркет Tele2", "/stock-exchange/internet"],
])
const selectors = {
    tariffsCard: (tariffs) => `//h3[text()='${tariffs}']`,
    header: "div.h1",
    GB: (quantity) => `//div[@class="lots-group-item"]//div//div//span[text()='${quantity}']`,
    priceLot: (price) => `//div[@class="amount"] [text()="${price}"]`,
    button: "a.btn.btn-black.btn-small",
    PopUp: "div.info-modal",
    PopUpButtons: { 
        Enter: "//a[@class='btn btn-black']",
        Connect: "//a[@class='btn space-holder-xs-0'] ",
        Cancel: "a.cancel",
        Close: "a.icon-close"
    }
    



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

Then(/^нажимаем на номинал "([^"]*)"$/, async (GB) => {
    await (await $(selectors.GB(GB))).click()
});

Then(/^выбираем цену "([^"]*)"$/, async (price) => {
    await (await $(selectors.priceLot(price))).click()
});

Then(/^нажимаем на кнопку Купить$/, async () => {
    await (await $(selectors.button)).click()
});

Then(/^отображается Поп-ап$/, async () => {
    await (await $(selectors.PopUp)).waitForDisplayed()
});

Then(/^отображается кнопка Войти$/, async () => {
    await (await $(selectors.PopUpButtons.Enter)).waitForDisplayed()
});

Then(/^отображается кнопка Подключится к Tele2$/, async () => {
    await (await $(selectors.PopUpButtons.Connect)).waitForDisplayed()
});

Then(/^отображается кнопка-ссылка Закрыть$/, async () => {
    await (await $(selectors.PopUpButtons.Cancel)).waitForDisplayed()
});

Then(/^отображается крестик$/, async () => {
    await (await $(selectors.PopUpButtons.Close)).waitForDisplayed()
});