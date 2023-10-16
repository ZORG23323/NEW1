Feature: It java to js

#   Scenario: Get A Pokemon
#   Given I make a GET request to https://pokeapi.co/api/v2/pokemon/ditto
#   When I receive a response
#   Then I expect the response to have the status 200
#   And I expect response to match a json snapshot user-1
#   And I expect response should have a json at species
#     """
#     {
#     "name": "ditto",
#     "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
#   } 
#     """

  Scenario: Create A User
    Given I make a POST request to https://pokeapi.co/api/v2/pokemon/ditto
      And I set body to
      """
      {
#     "name": "ditto",
#     "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
#   }
      """
     When I receive a response
     Then I expect response should have a status 201
     Then I expect response time should be less than 3000 ms