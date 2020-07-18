Feature: Free CRM Login Feature

# Without Examples keyword (Sample Data Driven)
#Scenario: Free CRM Login Test Scenario

#Given user is already in login page
#When title of page is CRMPRO
#Then user is enter "chirrachalama" and "@452dear"
#Then user is click on login button 
#Then user enter to home screen


# With Examples Keyword (Scenario outline)
Scenario Outline: Free CRM Login Test Scenario

Given user is already in login page
When title of page is CRMPRO
Then user is enter "<Username>" and "<Password>"
Then user is click on login button 
Then user enter to home screen

Examples:
		| Username		| Password	|
		| chirrachalama	| @452dear	|	
		| chalama		| 123cccre	|
		

