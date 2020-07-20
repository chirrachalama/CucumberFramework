Feature: Free CRM Deals Page

Scenario: Free CRM New Deals Page Scenario

Given user is an already in login page
When Title of page is CRMPRO
Then user enter username and password
| chirrachalama | @452dear 	|

Then user click on login button
Then user is able to get home page
Then user is click on Deals page
Then user enters title and amount and probability and commission
| Deal Titile 1 | 2000 | 10 | 30 |

Then user click on save button
