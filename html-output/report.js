$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/CHALAMA/eclipse-workspace/cucumberDemo/src/main/java/featureFiles/Tags.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM Application Testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 41,
  "name": "search docs test",
  "description": "",
  "id": "free-crm-application-testing;search-docs-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@SmokeTest"
    },
    {
      "line": 40,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "this is search docs test",
  "keyword": "Given "
});
formatter.match({
  "location": "Tags.this_is_search_docs_test()"
});
formatter.result({
  "duration": 257725700,
  "status": "passed"
});
});