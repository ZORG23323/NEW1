import { Given, When, Then } from '@wdio/cucumber-framework';
const Urlobj = new Map([
    ["главную", "/"],
    ["Тарифы", "/tariffs"],
    ["Номера", "/shop/number"],
    ["Маркет Tele2", "/stock-exchange/internet"],
    ["смартфоны", "/shop/devices/smartphones"],
    ["корзина", "/shop/checkout"],
    ["black", "black"],
    ["Мой онлайн+","/tariff/my-online-plus"],
    ["Mixx","/mixx-max"]

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
    paySim: "a[class=btn]",
    Prodolgit:"a[class='btn submit btn-black']",
    SpanPen: "span[class='ico icon-t2-edit-24']",
    choose: "a[class='btn btn-small']",
    blackTariff: "div[class='order-item-2__tariff-title']",
    btnSettings: "a[href='/mixx-max/subscription-setup?pageParams=subscriptionId%3D415909834398']",
    BtnX: "//div[text()='VK Музыка + онлайн-кинотеатр Wink и другие сервисы']//..//a",
    cardText: "//*[@id='msSetup']/div/div[2]/div[1]/div[2]/div/div[2]/div[1]",
    cardTariff: "//*[@id='msSetup']/div/div[2]/div[1]/div[2]/div/div[1]/div[2]/div[1]/div/div[1]/div/div[2]/span[2]",
    cardText2: "//*[@id='msSetup']/div/div[2]/div[1]/div[2]/div/div[1]/div[2]/div[1]/div/div[1]/div/div[1]/div",
    btnContin: "//*[@id='msSetup']/div/div[2]/div[2]/div/div/button",
    h2PopUp: "//*[@id='messagePopup']/div/div/div/div/div[1]/div/h2",
    pPopUp:"//*[@id='messagePopup']/div/div/div/div/div[2]/div/div[1]/div/div[1]/p[1]",
    btnPlug:"//*[@id='messagePopup']/div/div/div/div/div[2]/div/div[2]/a[1]",
    popUpTariff:"//*[@id='keycloakLoginModal']/div/div/div/div",
    


   
    

    
    




    PopUpButtons: {
        Enter: "//a[@class='btn btn-black']",
        Connect: "//a[@class='btn space-holder-xs-0']",
        Cancel: "a.cancel",
        Close: "a.icon-close",
        Continue: "//a[@class='btn']",
        Delete: "button.order-item-2__item-remove.icon-t2-trash-24",

        
     
        
       
    

        
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

Then(/^нажимаем на кнопку Купить SIM$/, async () => {
    await (await $(selectors.paySim)).click()
});

Then(/^нажимаем на кнопку Продолжить$/, async () => {
    await (await $(selectors.Prodolgit)).click()
});

Then(/^нажимаем изменить тариф$/, async () => {
    await (await $(selectors.SpanPen)).click()
});

Then(/^нажимаем на первый тариф$/, async () => {
    await (await $(selectors.choose)).click()
});

Then(/^проверяем что этот тариф "([^"]*)"$/, async (text) => {
    await browser.waitUntil(async () => {
        return await (await $(selectors.blackTariff)).getText() == text
    })
})

Then(/^нажимам на кнопку настроить тарифа Mixx S$/, async () => {
    await (await $(selectors.btnSettings)).click()
});

Then(/^удаляем подписку VK музыка$/, async () => {
    await (await $(selectors.BtnX)).click()
});

Then(/^отображается карточка "([^"]*)"$/, async (text) => {
    await browser.waitUntil(async () => {
        return await (await $(selectors.cardText)).getText() == text
    })
})

Then(/^добавляем карточку тарифа По другим правилам$/, async () => {
    await (await $(selectors.cardTariff)).click()
});

Then(/^карточка тарифа исчезла "([^"]*)"$/, async (text) => {
    await browser.waitUntil(async () => {
        return await (await $(selectors.cardText2)).getText() < text
    })
})

Then(/^нажимаем на кнопку Подключить$/, async () => {
    await (await $(selectors.btnContin)).click()
});

Then(/^отображается Поп-ап с заголовком "([^"]*)"$/, async (text) => {
    await browser.waitUntil(async () => {
        return await (await $(selectors.h2PopUp)).getText() == text
    })
})

Then(/^нажимаем на кнопку Подключить подписку$/, async () => {
    await (await $(selectors.btnPlug)).click()
});

Then(/^отображается Поп-ап с авторизацией пользователя$/, async () => {
    await (await $(selectors.PopUp)).waitForDisplayed()
});