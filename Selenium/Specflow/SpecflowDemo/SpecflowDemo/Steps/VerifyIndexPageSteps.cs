using NUnit.Framework;
using SpecflowDemo.Pages;
using System;
using TechTalk.SpecFlow;

namespace SpecflowDemo.Steps
{
    [Binding]
    public class VerifyIndexPageSteps
    {
        private readonly IndexPage _indexPage;

        public VerifyIndexPageSteps(IndexPage indexPage)
        {
            _indexPage = indexPage ?? throw new ArgumentNullException(nameof(indexPage));
        }

        [Given(@"I already login")]
        public void GivenIAlreadyLogin()
        {

        }

        [When(@"I navigate to my github page")]
        public void WhenINavigateToMyGithubPage()
        {
            _indexPage.NavigateToIndexPage();
        }

        [Then(@"I can see my detail")]
        public void ThenICanSeeMyDetail()
        {
            var result = _indexPage.VerifyProfile();
            Assert.IsTrue(result);
        }

        [Then(@"I can see my contribute graph")]
        public void ThenICanSeeMyContributeGraph()
        {
            var result = _indexPage.VerifyContributeGraph();
            Assert.IsTrue(result);
        }

        [Then(@"my pinned repo")]
        public void ThenMyPinnedRepo()
        {
            var result = _indexPage.VerifyPinnedRepo();
            Assert.AreEqual(6, result.Count);
        }
    }
}
