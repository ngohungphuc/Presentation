using OpenQA.Selenium;
using SpecflowDemo.Helper;
using System.Collections.Generic;

namespace SpecflowDemo.Pages
{
    public class IndexPage : BaseConfig
    {
        public IndexPage()
        {
            base.Initialize();
        }

        public By Profile { get; set; } = By.ClassName("p-name");

        public By PinnedRepo { get; set; } = By.ClassName("pinned-item-list-item");

        public By ContributeGraph { get; set; } = By.ClassName("graph-before-activity-overview");

        public void NavigateToIndexPage()
        {
            _driver.Navigate().GoToUrl(WebAppUrl);
        }

        public bool VerifyProfile()
        {
            return WebElement.FindElement(_driver, Profile, 10).Displayed;
        }

        public IReadOnlyCollection<IWebElement> VerifyPinnedRepo()
        {
            return WebElement.FindElements(_driver, PinnedRepo, 10);
        }

        public bool VerifyContributeGraph()
        {
            return WebElement.FindElement(_driver, ContributeGraph, 10).Displayed;
        }
    }
}
