$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/CHALAMA/eclipse-workspace/cucumberDemo/src/main/java/featureFiles/NewContact.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM New Contact page Feature",
  "description": "",
  "id": "free-crm-new-contact-page-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-new-contact-page-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter to home screen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cFirstName\u003e\" and \"\u003cLastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "users clicks on save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-new-contact-page-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "FirstName",
        "Lastname"
      ],
      "line": 15,
      "id": "free-crm-new-contact-page-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "chirrachalama",
        "@452dear",
        "sunny",
        "reddy"
      ],
      "line": 16,
      "id": "free-crm-new-contact-page-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "chirrachalama",
        "@452dear",
        "chalama",
        "reddie"
      ],
      "line": 17,
      "id": "free-crm-new-contact-page-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-new-contact-page-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is enter \"chirrachalama\" and \"@452dear\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter to home screen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"sunny\" and \"reddy\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "users clicks on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefin.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 95762068900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.title_of_page_is_CRMPRO()"
});
formatter.result({
  "duration": 380906600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chirrachalama",
      "offset": 15
    },
    {
      "val": "@452dear",
      "offset": 35
    }
  ],
  "location": "LoginStepDefin.user_is_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 1145651300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_is_click_on_login_button()"
});
formatter.result({
  "duration": 17174702400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_enter_to_home_screen()"
});
formatter.result({
  "duration": 11010900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 7552828500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sunny",
      "offset": 13
    },
    {
      "val": "reddy",
      "offset": 25
    }
  ],
  "location": "LoginStepDefin.user_enters_and(String,String)"
});
formatter.result({
  "duration": 504219900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.users_clicks_on_save_button()"
});
formatter.result({
  "duration": 2623833200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-new-contact-page-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is enter \"chirrachalama\" and \"@452dear\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter to home screen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"chalama\" and \"reddie\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "users clicks on save button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefin.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 51816902500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.title_of_page_is_CRMPRO()"
});
formatter.result({
  "duration": 1075326700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chirrachalama",
      "offset": 15
    },
    {
      "val": "@452dear",
      "offset": 35
    }
  ],
  "location": "LoginStepDefin.user_is_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 1071059600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_is_click_on_login_button()"
});
formatter.result({
  "duration": 13176613400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_enter_to_home_screen()"
});
formatter.result({
  "duration": 9746900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 10892596600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chalama",
      "offset": 13
    },
    {
      "val": "reddie",
      "offset": 27
    }
  ],
  "location": "LoginStepDefin.user_enters_and(String,String)"
});
formatter.result({
  "duration": 612184200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.users_clicks_on_save_button()"
});
formatter.result({
  "duration": 3348565600,
  "status": "passed"
});
});