Feature: As a user I should be able to add politician details to a database in http://ec2-34-251-162-89.eu-west-1.compute.amazonaws.com/

 @AddNewEntity
  Scenario: To verify user should be able to add politician details to a database

    Given user is on the given webpage
    When user enter the name
    And user enter the country
    And user enter the year of birth
    And user enter the position
    And user enter source info URL
    And user enter risk level
    And user click the save button
    Then user should check the confirm details


