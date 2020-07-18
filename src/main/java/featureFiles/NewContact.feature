Feature: Free CRM New Contact page Feature

Scenario Outline: Free CRM Login Test Scenario

Given user is already in login page
When title of page is CRMPRO
Then user is enter "<Username>" and "<Password>"
Then user is click on login button 
Then user enter to home screen
Then user move to new contact page
Then user enters "<FirstName>" and "<Lastname>"
Then users clicks on save button

Examples:
	|	Username	|	Password	|	FirstName	|	Lastname	|
	| chirrachalama	|	@452dear	|	sunny		|	reddy		|
	| chirrachalama	|	@452dear	|	chalama		|	reddie		|	
