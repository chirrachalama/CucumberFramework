package stepDefinitionFile;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsPage {
	
	WebDriver driver;
	
	@Given("^user is an already in login page$")
	public void user_is_an_already_in_login_page() 
	{
		System.setProperty("webdriver.chrome.driver", "F:\\ChromeDriver\\ChromeDriver.exe");
		driver =new ChromeDriver();
		driver.get("https://www.crmpro.com/");
	}

	@When("^Title of page is CRMPRO$")
	public void title_of_page_is_CRMPRO() 
	{
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	   
	   
	}

	@Then("^user enter username and password$")
		public void user_is_enter_username_and_password(DataTable userCredntials) 
	{
			List<List<String>> data=userCredntials.raw();
			driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
			driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	   
	}

	@Then("^user click on login button$")
	public void user_click_on_login_button() 
	{
		driver.findElement(By.xpath("//input[@value='Login']")).click();
	}

	@Then("^user is able to get home page$")
	public void user_is_able_to_get_home_page() 
	{
		String str=driver.getTitle();
		System.out.println(str);
		Assert.assertEquals("CRMPRO", str);
	}

	@Then("^user is click on Deals page$")
	public void user_is_click_on_Deals_page() throws Throwable 
	{
	   driver.switchTo().frame("mainpanel");
	   Thread.sleep(2000);
	   Actions action=new Actions(driver);
	   action.moveToElement(driver.findElement(By.xpath("//a[text()='Deals']"))).build().perform();
	   Thread.sleep(2000);
	   driver.findElement(By.xpath("//a[text()='New Deal']")).click();
	}

	@Then("^user enters title and amount and probability and commission$")
	public void user_enters_title_and_amount_and_probability_and_commission(DataTable UserFields) 
	{
		List<List<String>> Data=UserFields.raw(); 
		driver.findElement(By.name("title")).sendKeys(Data.get(0).get(0));
		driver.findElement(By.name("amount")).sendKeys(Data.get(0).get(1));
		driver.findElement(By.id("probability")).sendKeys(Data.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(Data.get(0).get(3));
	}
	
	@Then("^user click on save button$")
	public void user_click_on_save_button() 
	{
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}

	

}
