package ComplyAdvantageUI;

import org.openqa.selenium.By;



public class Utils extends BasePage {
    public static void clickButton(By by)
    {
        driver.findElement(by).click();
    }

    public static void enterElement(By by, String text)
    {
        driver.findElement(by).sendKeys("");
        driver.findElement(by).sendKeys(text);

    }


}
