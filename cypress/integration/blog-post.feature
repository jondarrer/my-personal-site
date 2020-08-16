Feature: Blog Post

  I want to open a blog post

  Scenario: Opening the English version of a blog-post
    Given I open "BlogPost1" page in "English"
    Then I see the title "Blog Post 1!"

  Scenario: Opening the Romanian version of a blog-post
    Given I open "BlogPost2" page in "Romanian"
    Then I see the title "Postul De Blog 2!"