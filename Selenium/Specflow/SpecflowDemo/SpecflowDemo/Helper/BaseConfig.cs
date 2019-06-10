using NUnit.Framework;
using OpenQA.Selenium;

namespace SpecflowDemo.Helper
{
    [TestFixture]
    public class BaseConfig
    {
        protected IWebDriver _driver;
        public static string WebAppUrl = string.Empty;
        public static string WebAppUrl2 = string.Empty;

        [SetUp]
        protected virtual void Initialize()
        {
            _driver = Configuration.CreateWebDriver(Configuration.GetConfigurationByKey("Browser"));
            WebAppUrl = Configuration.GetConfigurationByKey("WebUrl");
            WebAppUrl2 = Configuration.GetConfigurationByKey("WebUrl2");
        }
    }
}
