package ComplyAdvantageUI;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Given;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;
import org.openqa.selenium.support.ui.Select;

import java.util.concurrent.TimeUnit;

public class MyStepdefs extends Utils {

    By fullName = By.id("fullName");
    By country = By.cssSelector("input[name=country]");

    By position=By.id("position");
    By URL=By.id("url");
    By save=By.xpath("//div/div/form/button");


   @Given("^user is on the given webpage$")
    public void userIsOnTheGivenWebpage() {

       System.setProperty("webdriver.chrome.driver", "src\\test\\java\\Resources\\broswerdriver\\chromedriver.exe");
       ChromeOptions options = new ChromeOptions();
       options.addArguments("disable-infobars");
       options.addArguments("--disable-browser-side-navigation");
       driver = new ChromeDriver(options);

       //Navigate to given URL
       driver.get("http://ec2-34-251-162-89.eu-west-1.compute.amazonaws.com/");
       // Apply implicit wait for
       driver.manage().timeouts().implicitlyWait(30, TimeUnit.MILLISECONDS);
        //To verify user is on the HomePage
        String expected = "http://ec2-34-251-162-89.eu-west-1.compute.amazonaws.com/";
       // String actual=
        Assert.assertEquals(driver.getCurrentUrl(), expected);
    }

    @When("^user enter the name$")
    public void userEnterTheName() {
        enterElement(fullName, "");
        enterElement(fullName, "Barry Gardner");

    }

    @And("^user enter the country$")
    public void userEnterTheCountry() {
        enterElement(country, "");
        enterElement(country, "United Kingdom");
    }

    @And("^user enter the year of birth$")
    public void userEnterTheYearOfBirth() {

        WebElement dateBox = driver.findElement(By.xpath("//form//input[@name='yob']"));
        //Fill date as mm/dd/yyyy as 09/25/1973
        dateBox.sendKeys("09251973");

   }

    @And("^user enter the position$")
    public void userEnterThePosition() {
        enterElement(position,"");
        enterElement(position,"Member of Parliment");

    }

    @And("^user enter source info URL$")
    public void userEnterSourceInfoURL() {

        enterElement(URL,"");
        enterElement(URL,"https://barry.mp@parliment.gov.uk");

    }

    @And("^user enter risk level$")
    public void userEnterRiskLevel() {


        Select risk = new Select(driver.findElement(By.id("risk")));
        risk.selectByVisibleText(("Medium"));

    }

    @And("^user click the save button$")
    public void userClickTheSaveButton() {
        clickButton(save);

    }

    @Then("^user should check the confirm details$")
    public void userShouldCheckTheConfirmDetails()
    {

      String actual=driver.findElement(By.xpath("/html/body/div[2]/div/div[1]/div/div/div[1]/span")).getText();
      System.out.println(actual);
      String expected ="Barry Gardner";
      Assert.assertEquals(actual, expected);
      driver.close();
      driver.quit();

    }
}
