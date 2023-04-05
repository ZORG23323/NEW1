import { Given, When, Then } from '@wdio/cucumber-framework';
const Urlobj = new Map([
    ["главную", "/"],
    ["Тарифы", "/tariffs"],
    ["Номера", "/shop/number"],
    ["Маркет Tele2", "/stock-exchange/internet"],
    ["смартфоны", "/shop/devices/smartphones"],
    ["корзина", "/shop/checkout"],
    ["black", "black"],

])

const cardsBig = "a[class='product-article-list__card-with-image wide-card']"
const cardSmall = "a[class='product-article-list__card-with-image ']"

 
const selectors = {
    tariffsCard: (tariffs) => `//h3[text()='${tariffs}']`,
    header: "div.h1",

    GB: (quantity) => `//div[@class="lots-group-item"]//div//div//span[text()='${quantity}']`,
    priceLot: (price) => `//div[@class="amount"] [text()="${price}"]`,
    button: "a.btn.btn-black.btn-small",
    PopUp: "div.info-modal",
    ProductName: "span.order-item-2__product-name",
    Quantity: "input.text-field.count",
    CheckoutText: "span.text",
    Promotions: "a[href='/promotions']",
    // cardSmall: "a[class='product-article-list__card-with-image ']",
    // cardsBig : "a[class='product-article-list__card-with-image wide-card']",


    PopUpButtons: {
        Enter: "//a[@class='btn btn-black']",
        Connect: "//a[@class='btn space-holder-xs-0']",
        Cancel: "a.cancel",
        Close: "a.icon-close",
        Continue: "//a[@class='btn']",
        Delete: "button.order-item-2__item-remove.icon-t2-trash-24"
    

        
    },
    buttonMobil: (smartfoon) => `//span[@class="title"][text()="${smartfoon}"]//..//..//div//div//a[@class="btn icon-basket"]`


}

Given(/^заходит на "([^"]*)" страницу Теле2$/, async (page) => {
    await browser.url(`https://msk.tele2.ru${Urlobj.get(page)}`)
});

Then(/^нажимает на карточку тариф "([^"]*)"$/, async (tariffs) => {
    await (await $(selectors.tariffsCard(tariffs))).click()
});

Then(/^открылась страница "([^"]*)"$/, async (page) => {
    await browser.waitUntil(async () => {
        return (await browser.getUrl()).includes(Urlobj.get(page))
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


Then(/^добавляем в корзину "([^"]*)"$/, async (smartfon) => {
    await (await $(selectors.buttonMobil(smartfon))).click()
});

Then(/^отображается кнопка "([^"]*)"$/, async (buttonName) => {
    await browser.waitUntil(async () => {
        return await (await $(selectors.PopUpButtons.Enter)).getText() == buttonName
    })
})

Then(/^отображается белая кнопка "([^"]*)"$/, async (buttonName) => {
    await browser.waitUntil(async () => {
        return await (await $(selectors.PopUpButtons.Continue)).getText() == buttonName
    })
})

Then(/^нажимаем на кнопку Перейти к оформлению$/, async () => {
    await (await $(selectors.PopUpButtons.Enter)).click()
});

Then(/^отображается товар "([^"]*)"$/, async (product) => {
    await browser.waitUntil(async () => {
        return await (await $(selectors.ProductName)).getText() == product
    })
})

Then(/^отображается импут с кол-ом "([^"]*)"$/, async (quantity) => {
    await browser.waitUntil(async () => {
        return await (await $(selectors.Quantity)).getValue() == quantity
    })
})

Then(/^нажимаем на кнопку удалить$/, async () => {
    await (await $(selectors.PopUpButtons.Delete)).click()
});

Then(/^отображается сообщение "([^"]*)"$/, async (text) => {
    await browser.waitUntil(async () => {
        return await (await $(selectors.CheckoutText)).getText() == text
    })
})

Then(/^нажимаем на пункт меню Акции$/, async () => {
    await (await $(selectors.Promotions)).click()
});

Then(/^отображается большая карточка в количестве "([^"]*)"$/, async (number) => {
    await browser.waitUntil(async () => {
        return await (await $$(cardsBig)).length == number
    })
})

Then(/^отображается маленькая карточка в количестве > чем "([^"]*)"$/, async (number) => {
    await browser.waitUntil(async () => {
        return await (await $$(cardSmall)).length > number
    })
})