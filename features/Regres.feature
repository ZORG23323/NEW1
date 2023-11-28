@1111
Feature: Verify billing

@smoke
  Scenario: Get A Pokemon
  Given I make a GET request to "https://pokeapi.co/api/v2/pokemon/ditto"
  When I receive a response
  Then I expect the response to have the status 200
  And I expect response to match a json snapshot "user-1.json"
  And I expect response should have a json at "species"
    """
    {
    "name": "ditto",
    "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
  } 
    """
@test97
  Scenario: Create A User
    Given I make a POST request to "https://automationintesting.online/auth/login"
      And I set body to
      """
      {
    "username":"admin",
    "password":"password"
}
      """
     When I receive a response
     Then I expect the response to have the status 200 


@test98
     Scenario: список вакансий озон
  Given I make a GET request to "https://job-api.ozon.ru/filters"
  When I receive a response
  Then I expect the response to have the status 200
  And I expect response to match a json snapshot "response.json"
  Then I expect response body should contain "levels"

#  @atest @increasedExchangeRateFalse @autoTestExternalId-api.selfcare.npz.promocodes.GetPromocodesLimits.1
#   Сценарий: Получения доступных номиналов скидок для Малевича
#     Пусть пользователь планирует вызывать метод "/api/promocodes/limits"
#     И пользователь делает GET вызов
#     Тогда пользователь получает ответ с кодом "200", статусом "OK"
#     И тело ответа JSON "selfcare/npz/promocodes/data/response.json" будет проверяться по правилу "STRICT"