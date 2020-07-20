$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/CHALAMA/eclipse-workspace/cucumberDemo/src/main/java/featureFiles/Deals.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Deals Page",
  "description": "",
  "id": "free-crm-deals-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM New Deals Page Scenario",
  "description": "",
  "id": "free-crm-deals-page;free-crm-new-deals-page-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is an already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "chirrachalama",
        "@452dear"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is able to get home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is click on Deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters title and amount and probability and commission",
  "rows": [
    {
      "cells": [
        "Deal Titile 1",
        "2000",
        "10",
        "30"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsPage.user_is_an_already_in_login_page()"
});
formatter.result({
  "duration": 30158778900,
  "status": "passed"
});
formatter.match({
  "location": "DealsPage.title_of_page_is_CRMPRO()"
});
formatter.result({
  "duration": 48658900,
  "status": "passed"
});
formatter.match({
  "location": "DealsPage.user_is_enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 527290100,
  "status": "passed"
});
formatter.match({
  "location": "DealsPage.user_click_on_login_button()"
});
formatter.result({
  "duration": 10550392900,
  "status": "passed"
});
formatter.match({
  "location": "DealsPage.user_is_able_to_get_home_page()"
});
formatter.result({
  "duration": 7730400,
  "status": "passed"
});
formatter.match({
  "location": "DealsPage.user_is_click_on_Deals_page()"
});
formatter.result({
  "duration": 7262166000,
  "status": "passed"
});
formatter.match({
  "location": "DealsPage.user_enters_title_and_amount_and_probability_and_commission(DataTable)"
});
formatter.result({
  "duration": 1196897100,
  "status": "passed"
});
formatter.match({
  "location": "DealsPage.user_click_on_save_button()"
});
formatter.result({
  "duration": 2757875000,
  "status": "passed"
});
});