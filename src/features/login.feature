Feature: Favorite Items Feature

  @test
  Scenario: Selected items appearance in Favorites
    Given I open the "https://ss.com" page
    * I switch the language "ru"
    * I click on element "a[href*='/ru/electronics'][title*='Электротехника']"
    * I click on element "a[href*='/ru/electronics/search']"
    When I enter value "Computers" into the search field "#ptxt"
    * I select "riga_f" location from dropdown menu "#s_region_select"
    * I click on element "#sbtn"
    * I click on element "td > a[href*='/ru/electronics/search/riga_f/']"
    * I enter value "160" into the search field "input[name*='topt[8][min]']"
    * I enter value "300" into the search field "input[name*='topt[8][max]']"
    * I click on element "#sbtn"
    * I select three random products from list
    Then Framework verifies selected products in favorites
