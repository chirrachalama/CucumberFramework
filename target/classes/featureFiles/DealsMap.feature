Feature: Free CRM Dealsmap Page 

Scenario: Free CRM New DealsMap Page scenario 

Given user already in login page
When Titles of page is CRMPRO
Then user enters username and password
| userName |	password 	|
| chirrachalama | @452dear 	|

Then user clicks on login button
Then user can able to get home page
Then user is clicks on Deals page
Then user enters Deals Details
		|	Title 		|Amount| Probability | Comission |
		| Deal Titile 1 | 2000 | 10 | 10 |
		| Deal Titile 2 | 1000 | 30 | 20 |
		| Deal Titile 3 | 5000 | 20 | 20 |
		| Deal Titile 4 | 4000 | 40 | 40 |
		
	
