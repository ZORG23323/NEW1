Feature: It java to js

@test97
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
     Then I expect the response to have the status 200