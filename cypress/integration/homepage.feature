Feature: Homepage

  I want to open the homepage

  Scenario: Opening the English version of the homepage
    Given I do not have a colour preference
    Given I open "Home" page in "English"
    Then I see the title "Hello,"

  Scenario: Opening the Romanian version of the homepage
    Given I do not have a colour preference
    Given I open "Home" page in "Romanian"
    Then I see the title "Buna,"

  Scenario: See the default colour mode of dark
    Given I do not have a colour preference
    Given I have not changed the colour mode before
    Given I open "Home" page in "English"
    Then I see the page in "dark" mode

  Scenario: Change colour mode to light
    Given I do not have a colour preference
    Given I open "Home" page in "English"
    When I change the colour mode to "light"
    Then I see the page in "light" mode

  Scenario: Has a preference of light colour mode
    Given I do have a colour preference of "light"
    Given I open "Home" page in "English"
    Then I see the page in "light" mode

  Scenario: Has previously selected light colour mode
    Given I have already selected a colour mode of "light"
    Given I open "Home" page in "English"
    Then I see the page in "light" mode

