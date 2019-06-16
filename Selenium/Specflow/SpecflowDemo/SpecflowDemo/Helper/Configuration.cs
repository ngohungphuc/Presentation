using Microsoft.Extensions.Configuration;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;

namespace SpecflowDemo.Helper
{

    public static class Configuration
    {
        private static IConfigurationRoot ReadConfiguration()
        {
            var config = new ConfigurationBuilder()
                   .AddJsonFile("appsettings.json")
                   .Build();
            return config;
        }

        public static string GetConfigurationByKey(string key)
        {
            var config = ReadConfiguration();
            return config[key];
        }

        public static IWebDriver CreateWebDriver(string browserName)
        {
            switch (browserName.ToLowerInvariant())
            {
                case "chrome":
                    return new ChromeDriver(@"D:\Chromedriver");

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
