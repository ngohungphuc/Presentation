using NUnit.Framework;
using OpenQA.Selenium;

namespace SpecflowDemo.Helper
{
    [TestFixture]
    public class BaseConfig
    {
        protected IWebDriver _driver;
        public static string WebAppUrl = string.Empty;

        [SetUp]
        protected virtual void Initialize()
        {
            _driver = Configuration.CreateWebDriver(Configuration.GetConfigurationByKey("Browser"));
            WebAppUrl = Configuration.GetConfigurationByKey("WebUrl");
        }
    }
}
