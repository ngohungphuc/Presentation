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
        private ForgotPasswordPage forgotPasswordPage = new ForgotPasswordPage();

        [Given(@"navigate to forgot password page")]
        public void GivenNavigateToForgotPasswordPage()
        {
            forgotPasswordPage.NavigateToForgotPassPage();
        }

        [Given(@"I enter my registered email that have value ""(.*)""")]
        public void GivenIEnterMyRegisteredEmailThatHaveValue(string email)
        {
            forgotPasswordPage.InputEmail(email);
        }

        [When(@"I click retrieve password")]
        public void WhenIClickRetrievePassword()
        {
            forgotPasswordPage.ClickSubmit();
        }

        [Then(@"I should see message ""(.*)""")]
        public void ThenIShouldSeeMessage(string p0)
        {
            var message = forgotPasswordPage.GetSuccessText();
            Assert.AreEqual("Your e-mail's been sent!", message);
        }
    }
}
