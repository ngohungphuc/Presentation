Feature: Testing
	I want to test that I can select a dropdown list in https://the-internet.herokuapp.com

@select dropdown
Scenario: Click on dropdown
	Given I navigate to the url
	And I see the dropdown
	When I click on dropdown
	Then I can choose options 2
	And I should see selected option is 2
