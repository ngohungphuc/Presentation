using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;

namespace SeleniumAuto
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            IWebDriver driver = new ChromeDriver(@"D:\Chromedriver");
            driver.Navigate().GoToUrl("https://google.com");

            var searchField = driver.FindElement(By.Name("q"));
            searchField.SendKeys("Selenium Tutorial");
            searchField.Submit();
        }

        private static IWebDriver CreateWebDriver(string browserName)
        {
            switch (browserName.ToLowerInvariant())
            {
                case "chrome":
                    return new OpenQA.Selenium.Chrome.ChromeDriver();

                case "edge":
                    return new OpenQA.Selenium.Edge.EdgeDriver();

                case "firefox":
                    return new OpenQA.Selenium.Firefox.FirefoxDriver();

                case "internetexplorer":
                    var options = new OpenQA.Selenium.IE.InternetExplorerOptions() { IgnoreZoomLevel = true };
                    return new OpenQA.Selenium.IE.InternetExplorerDriver(options);

                default:
                    throw new NotSupportedException($"The browser '{browserName}' is not supported.");
            }
        }
    }
}
