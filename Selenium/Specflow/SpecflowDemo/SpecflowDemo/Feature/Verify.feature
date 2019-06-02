Feature: Verify index page
	I want to verify that I can see my profile
	When I navigate to my github profile
	that contain graph, pinned repo, my detail

@index
Scenario: Go to index page of github
	Given I already login
	When I navigate to my github page
	Then I can see my detail
	And I can see my contribute graph
	And my pinned repo
