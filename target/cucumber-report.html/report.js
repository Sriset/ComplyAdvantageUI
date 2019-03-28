$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Resources/AddPolitician.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I should be able to add politician details to a database in http://ec2-34-251-162-89.eu-west-1.compute.amazonaws.com/",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-add-politician-details-to-a-database-in-http://ec2-34-251-162-89.eu-west-1.compute.amazonaws.com/",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "To verify user should be able to add politician details to a database",
  "description": "",
  "id": "as-a-user-i-should-be-able-to-add-politician-details-to-a-database-in-http://ec2-34-251-162-89.eu-west-1.compute.amazonaws.com/;to-verify-user-should-be-able-to-add-politician-details-to-a-database",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@AddNewEntity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the given webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter the name",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter the country",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter the year of birth",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter the position",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter source info URL",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter risk level",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click the save button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should check the confirm details",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheGivenWebpage()"
});
formatter.result({
  "duration": 24435431033,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterTheName()"
});
formatter.result({
  "duration": 901924264,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterTheCountry()"
});
formatter.result({
  "duration": 404414117,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterTheYearOfBirth()"
});
formatter.result({
  "duration": 324721280,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterThePosition()"
});
formatter.result({
  "duration": 406646775,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterSourceInfoURL()"
});
formatter.result({
  "duration": 678624688,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterRiskLevel()"
});
formatter.result({
  "duration": 484708891,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickTheSaveButton()"
});
formatter.result({
  "duration": 170308068,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldCheckTheConfirmDetails()"
});
formatter.result({
  "duration": 93809055,
  "error_message": "java.lang.AssertionError: expected [Barry Gardner] but found []\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat ComplyAdvantageUI.MyStepdefs.userShouldCheckTheConfirmDetails(MyStepdefs.java:103)\r\n\tat ✽.Then user should check the confirm details(src/test/java/Resources/AddPolitician.feature:14)\r\n",
  "status": "failed"
});
});