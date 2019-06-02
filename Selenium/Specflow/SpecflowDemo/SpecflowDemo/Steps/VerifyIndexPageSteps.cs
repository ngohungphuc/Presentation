using NUnit.Framework;
using SpecflowDemo.Pages;
using TechTalk.SpecFlow;

namespace SpecflowDemo.Steps
{
    [Binding]
    public class VerifyIndexPageSteps
    {
        private IndexPage indexPage = new IndexPage();

        [Given(@"I already login")]
        public void GivenIAlreadyLogin()
        {

        }

        [When(@"I navigate to my github page")]
        public void WhenINavigateToMyGithubPage()
        {
            indexPage.NavigateToIndexPage();
        }

        [Then(@"I can see my detail")]
        public void ThenICanSeeMyDetail()
        {
            var result = indexPage.VerifyProfile();
            Assert.IsTrue(result);
        }

        [Then(@"I can see my contribute graph")]
        public void ThenICanSeeMyContributeGraph()
        {
            var result = indexPage.VerifyContributeGraph();
            Assert.IsTrue(result);
        }

        [Then(@"my pinned repo")]
        public void ThenMyPinnedRepo()
        {
            var result = indexPage.VerifyPinnedRepo();
            Assert.AreEqual(6, result.Count);
        }
    }
}
