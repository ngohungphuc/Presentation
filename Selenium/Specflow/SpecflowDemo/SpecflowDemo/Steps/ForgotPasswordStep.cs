using NUnit.Framework;
using SpecflowDemo.Pages;
using System;
using System.Collections.Generic;
using System.Text;
using TechTalk.SpecFlow;

namespace SpecflowDemo.Steps
{
    [Binding]
    public class ForgotPasswordStep
    {
        private readonly ForgotPasswordPage _forgotPasswordPage;

        public ForgotPasswordStep(ForgotPasswordPage forgotPasswordPage)
        {
            _forgotPasswordPage = forgotPasswordPage ?? throw new ArgumentNullException(nameof(forgotPasswordPage));
        }

        [Given(@"navigate to forgot password page")]
        public void GivenNavigateToForgotPasswordPage()
        {
            _forgotPasswordPage.NavigateToForgotPassPage();
        }

        [Given(@"I enter my registered email that have value ""(.*)""")]
        public void GivenIEnterMyRegisteredEmailThatHaveValue(string email)
        {
            _forgotPasswordPage.InputEmail(email);
        }

        [When(@"I click retrieve password")]
        public void WhenIClickRetrievePassword()
        {
            _forgotPasswordPage.ClickSubmit();
        }

        [Then(@"I should see message ""(.*)""")]
        public void ThenIShouldSeeMessage(string p0)
        {
            var message = _forgotPasswordPage.GetSuccessText();
            Assert.AreEqual("Your e-mail's been sent!", message);
        }
    }
}
