@1111
Feature: Verify billing

@smoke
  Scenario: Get A Pokemon
  Given I make a GET request to https://pokeapi.co/api/v2/pokemon/ditto
  When I receive a response
  Then I expect the response to have the status 200
  And I expect response to match a json snapshot user-1
  And I expect response should have a json at species
    """
    {
    "name": "ditto",
    "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
  } 
    """
@test97
  Scenario: Create A User
    Given I make a POST request to https://automationintesting.online/auth/login
      And I set body to
      """
      {
    "username":"admin",
    "password":"password"
}
      """
     When I receive a response
     Then I expect the response to have the status 200 |


@test98
     Scenario: malevich
  Given I make a GET request to https://api.tele2.ru/api/promocodes/limits
  When I receive a response
  Then I expect the response to have the status 200
  And I expect response to match a json snapshot response





#     #  @atest @increasedExchangeRateFalse @autoTestExternalId-api.selfcare.npz.promocodes.GetPromocodesLimits.1 @test97
#   Сценарий: Получения доступных номиналов скидок для Малевича
#     Пусть пользователь планирует вызывать метод "/api/promocodes/limits"
#     И пользователь делает GET вызов
#     Тогда пользователь получает ответ с кодом "200", статусом "OK"
#     И тело ответа JSON "selfcare/npz/promocodes/data/response.json" будет проверяться по правилу "STRICT"

# {
#   "meta": {
#     "status": "OK"
#   },
#   "data": {
#     "discountLimits": [
#       1000,
#       2000,
#       3000,
#       4000
#     ],
#     "limits": [
#       500,
#       1000,
#       1500,
#       2000
#     ],
#     "increasedDiscountText": "Повышенный курс: 1 минута = 2 ₽"
#   }
# }