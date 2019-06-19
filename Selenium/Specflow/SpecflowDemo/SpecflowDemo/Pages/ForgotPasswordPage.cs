using OpenQA.Selenium;
using SpecflowDemo.Helper;
using System;
using System.Collections.Generic;
using System.Text;

namespace SpecflowDemo.Pages
{
    public class ForgotPasswordPage : BaseConfig
    {
        public ForgotPasswordPage()
        {
            base.Initialize();
        }

        public By EmailInput { get; set; } = By.Id("email");
        public By SubmitButton { get; set; } = By.Id("form_submit");
        public By Content { get; set; } = By.Id("content");

        public void NavigateToForgotPassPage()
        {
            _driver.Navigate().GoToUrl($"{WebAppUrl2}/forgot_password");
        }

        public void InputEmail(string email)
        {
            WebElement.FindElement(_driver, EmailInput, 5).SendKeys(email);
        }

        public void ClickSubmit()
        {
            WebElement.FindElement(_driver, SubmitButton, 5).Click();
        }

        public string GetSuccessText()
        {
            return WebElement.FindElement(_driver, Content, 5).Text;
        }
    }
}
