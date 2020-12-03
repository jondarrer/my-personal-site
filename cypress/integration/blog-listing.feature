Feature: Blog Listing

  I want to see the blog posts

  Scenario: Opening the English version of a blog page blog listing
    Given I open "Blog" page in "English"
    Then I see the title "Blog Posts"

  Scenario: Opening the Romanian version of a blog page blog listing
    Given I open "Blog" page in "Romanian"
    Then I see the title "Postări pe Blog"

  Scenario: Seeing pagination on the blog listing
    Given I open "Blog" page in "English"
    And I see pagination on page "1"
    When I click page "2"
    Then I see pagination on page "2"