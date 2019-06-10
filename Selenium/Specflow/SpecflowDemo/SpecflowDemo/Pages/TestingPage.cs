using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using SpecflowDemo.Helper;
using System;
using System.Collections.Generic;
using System.Text;

namespace SpecflowDemo.Pages
{
    public class TestingPage : BaseConfig
    {
        public TestingPage()
        {
            base.Initialize();
        }

        public By Dropdown { get; set; } = By.Id("dropdown");


        public void NavigateToDropdownPage()
        {
            _driver.Navigate().GoToUrl($"{WebAppUrl2}/dropdown");
        }

        public bool VerifDropdown()
        {
            return WebElement.FindElement(_driver, Dropdown, 10).Displayed;
        }

        public void ClickOnDropdown()
        {
            WebElement.FindElement(_driver, Dropdown, 10).Click();
        }

        public void ChooseOptions(string value)
        {
            var dropdown = WebElement.FindElement(_driver, Dropdown, 10);
            var selectElement = new SelectElement(dropdown);
            selectElement.SelectByValue(value);
        }

        public string VerifySelectedValue()
        {
            var dropdown = WebElement.FindElement(_driver, Dropdown, 10);
            var selectElement = new SelectElement(dropdown);
            return selectElement.SelectedOption.GetAttribute("value").ToString();
        }
    }
}
