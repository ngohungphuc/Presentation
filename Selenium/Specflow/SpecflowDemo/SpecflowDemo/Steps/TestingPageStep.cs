using NUnit.Framework;
using SpecflowDemo.Pages;
using System;
using System.Collections.Generic;
using System.Text;
using TechTalk.SpecFlow;

namespace SpecflowDemo.Steps
{
    [Binding]
    public class TestingPageStep
    {
        private TestingPage testingPage = new TestingPage();

        [Given(@"I navigate to the url")]
        public void GivenINavigateToTheUrl()
        {
            testingPage.NavigateToDropdownPage();
        }

        [Given(@"I see the dropdown")]
        public void GivenISeeTheDropdown()
        {
            var isDropdownExist = testingPage.VerifDropdown();
            Assert.IsTrue(isDropdownExist);
        }

        [When(@"I click on dropdown")]
        public void WhenIClickOnDropdown()
        {
            testingPage.ClickOnDropdown();
        }

        [Then(@"I can choose options (.*)")]
        public void ThenICanChooseOptions(string value)
        {
            testingPage.ChooseOptions(value);
        }

        [Then(@"I should see selected option is (.*)")]
        public void ThenIShouldSeeSelectedOptionIs(string value)
        {
            var selectedValue = testingPage.VerifySelectedValue();
            Assert.AreEqual(value, selectedValue);
        }

    }
}
