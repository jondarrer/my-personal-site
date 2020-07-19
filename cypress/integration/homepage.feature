Feature: Homepage

  I want to open the homepage

  Scenario: Opening the English version of the homepage
    Given I open "Home" page in "English"
    Then I see the title "Hello!"

  Scenario: Opening the Romanian version of the homepage
    Given I open "Home" page in "Romanian"
    Then I see the title "Buna!"
