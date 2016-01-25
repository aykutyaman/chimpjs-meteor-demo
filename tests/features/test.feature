@watch
Feature: Search the Web

  As a human
  I want to click a button
  So I can find increment the counter

  Scenario: Navigationg to localhost
    Given I have visited localhost
    When I press "Click Me! button"
    Then I see "Counter"
