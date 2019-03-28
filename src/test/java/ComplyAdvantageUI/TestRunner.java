package ComplyAdvantageUI;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features =".",
        plugin = {"pretty:target/cucumber-pretty.txt",
                  "html:target/cucumber-report.html",
                  "junit:target/cucumber-results.xml",
                   "json:target/cucumber.json"},
                tags="@AddNewEntity")


public class TestRunner
{

}