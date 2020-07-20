@FunctionalTest
Feature: Free CRM Application Testing

@SmokeTest @RegressionTest
Scenario: Login with valid username and password
Given This is valid login test

@RegressionTest
Scenario: Login with invalid username and password
Given This is invalid login test

@RegressionTest
Scenario: Create a contacts
Given This is contacts test case

@RegressionTest
Scenario: Create a Deals
Given This is Deals test case

@SmokeTest
Scenario: Create a cases
Given This is cases test case

@SmokeTest
Scenario: verify left panel links
Given clicking on left panel links
 
@SmokeTest
Scenario: verify the left panel alerts
Given click on Alerts links

@SmokeTest @RegressionTest
Scenario: search task test
Given this is search task test

@SmokeTest @RegressionTest
Scenario: search deal test
Given this is search deal test

@SmokeTest @End2End
Scenario: search docs test
Given this is search docs test

@RegressionTest @End2End
Scenario: Application logout
Given application logout success




