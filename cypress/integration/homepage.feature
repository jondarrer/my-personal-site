Feature: Homepage

  I want to open the homepage

  Scenario: Opening the English version of the homepage
    Given I open "Home" page in "English"
    Then I see the title "Hello!"

  Scenario: Opening the Romanian version of the homepage
    Given I open "Home" page in "Romanian"
    Then I see the title "Buna!"

  @ignore
  Scenario: See the default colour mode of light
    Given I do not have a colour preference
    Given I have not changed the colour mode before
    Given I open "Home" page in "English"
    Then I see the page in "light" mode

  @ignore
  Scenario: Change colour mode to dark
    Given I do not have a colour preference
    Given I open "Home" page in "English"
    When I change the colour mode to "dark"
    Then I see the page in "dark" mode

  @ignore
  Scenario: Has a preference of dark colour mode
    Given I do have a colour preference of "dark"
    Given I open "Home" page in "English"
    Then I see the page in "dark" mode

  @ignore
  Scenario: Has previously selected dark colour mode
    Given I have already selected a colour mode of "dark"
    Given I open "Home" page in "English"
    Then I see the page in "dark" mode

