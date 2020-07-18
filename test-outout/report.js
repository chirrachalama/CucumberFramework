$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/CHALAMA/eclipse-workspace/cucumberDemo/src/main/java/featureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user is enter username and password",
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
formatter.match({
  "location": "LoginStepDefin.user_is_already_in_login_page()"
});
formatter.result({
  "duration": 31002562200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.title_of_page_is_CRMPRO()"
});
formatter.result({
  "duration": 515435300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_is_enter_username_and_password()"
});
formatter.result({
  "duration": 587770500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_is_click_on_login_button()"
});
formatter.result({
  "duration": 6528961700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefin.user_enter_to_home_screen()"
});
formatter.result({
  "duration": 11249700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user is able to create new contacts",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-new-contacts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user is already on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user is mouser over on contacts link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user click on new contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enters FirstName and LastName",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user click on sava button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewContact.user_is_already_on_home_page()"
});
formatter.result({
  "duration": 854400,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitionFile.CreateNewContact.user_is_already_on_home_page(CreateNewContact.java:18)\r\n\tat ✽.Given user is already on home page(C:/Users/CHALAMA/eclipse-workspace/cucumberDemo/src/main/java/featureFiles/Login.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewContact.user_is_mouser_over_on_contacts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewContact.user_click_on_new_contact_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewContact.user_enters_FirstName_and_LastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewContact.user_click_on_sava_button()"
});
formatter.result({
  "status": "skipped"
});
});