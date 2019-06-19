using NUnit.Framework;
using SpecflowDemo.Pages;
using System;
using TechTalk.SpecFlow;

namespace SpecflowDemo.Steps
{
    [Binding]
    public class TestingPageStep
    {
        private readonly TestingPage _testingPage;

        public TestingPageStep(TestingPage testingPage)
        {
            _testingPage = testingPage ?? throw new ArgumentNullException(nameof(testingPage));
        }

        [Given(@"I navigate to the url")]
        public void GivenINavigateToTheUrl()
        {
            _testingPage.NavigateToDropdownPage();
        }

        [Given(@"I see the dropdown")]
        public void GivenISeeTheDropdown()
        {
            var isDropdownExist = _testingPage.VerifDropdown();
            Assert.IsTrue(isDropdownExist);
        }

        [When(@"I click on dropdown")]
        public void WhenIClickOnDropdown()
        {
            _testingPage.ClickOnDropdown();
        }

        [Then(@"I can choose options (.*)")]
        public void ThenICanChooseOptions(string value)
        {
            _testingPage.ChooseOptions(value);
        }

        [Then(@"I should see selected option is (.*)")]
        public void ThenIShouldSeeSelectedOptionIs(string value)
        {
            var selectedValue = _testingPage.VerifySelectedValue();
            Assert.AreEqual(value, selectedValue);
        }

    }
}
