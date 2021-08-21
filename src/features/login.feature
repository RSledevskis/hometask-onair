Feature: The Internet Guinea Pig Website

  #@test
  Scenario Outline: As a user, I can log into the secure area
    Given I am on the "login" page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |


  @test
  Scenario: As a user, I can log into the secure area
    Given I open the "https://ss.com" page
    Then I switch the language "ru"
    Then I wait for 10000 seconds
#    When I login with <username> and <password>
#    Then I should see a flash message saying <message>
#
#    Examples:
#      | username | password             | message                        |
#      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#      | foobar   | barfoo               | Your username is invalid!      |
