package stepDefinitionFile;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsMap {

	WebDriver driver;

	@Given("^user already in login page$")
	public void user_already_in_login_page() {
		System.setProperty("webdriver.chrome.driver", "F:\\ChromeDriver\\ChromeDriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.crmpro.com/");
	}

	@When("^Titles of page is CRMPRO$")
	public void titles_of_page_is_CRMPRO() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);

	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable userCredntials) {
		for (Map<String,String> data : userCredntials.asMaps(String.class, String.class)) {
			driver.findElement(By.name("username")).sendKeys(data.get("userName"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//input[@value='Login']")).click();
	}

	@Then("^user can able to get home page$")
	public void user_can_able_to_get_home_page() {
		String str = driver.getTitle();
		System.out.println(str);
		Assert.assertEquals("CRMPRO", str);
	}

	@Then("^user is clicks on Deals page$")
	public void user_is_clicks_on_Deals_page() throws Throwable {
		driver.switchTo().frame("mainpanel");
		Thread.sleep(2000);
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[text()='Deals']"))).build().perform();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[text()='New Deal']")).click();
	}

	@Then("^user enters Deals Details$")
	public void user_enters_Deals_Details(DataTable UserFields) throws Exception {
		for (Map<String, String> Data : UserFields.asMaps(String.class, String.class)) {
			driver.findElement(By.name("title")).sendKeys(Data.get("Title"));
			driver.findElement(By.name("amount")).sendKeys(Data.get("Amount"));
			driver.findElement(By.id("probability")).sendKeys(Data.get("Probability"));
			driver.findElement(By.id("commission")).sendKeys(Data.get("Comission"));
			
			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
			Thread.sleep(2000);
			Actions action = new Actions(driver);
			action.moveToElement(driver.findElement(By.xpath("//a[text()='Deals']"))).build().perform();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//a[text()='New Deal']")).click();
		}
	}

}
