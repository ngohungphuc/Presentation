Feature: ForgotPassword
	I want to test my forget password function

@forgot pass
Scenario: Forgot Password
	Given navigate to forgot password page
	And I enter my registered email that have value "test@gmail.com"
	When I click retrieve password
	Then I should see message "Your e-mail's been sent!"
