package stepDefinitionFile;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefin {

	WebDriver driver;
	
	@Given("^user is already in login page$")
	public void user_is_already_in_login_page() {
		System.setProperty("webdriver.chrome.driver", "F:\\ChromeDriver\\ChromeDriver.exe");
		driver =new ChromeDriver();
		driver.get("https://www.crmpro.com/");
		
	}
	
	@When("^title of page is CRMPRO$")
	public void title_of_page_is_CRMPRO() {
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	   
	}
	
	@Then("^user is enter \"(.*)\" and \"(.*)\"$")
	public void user_is_enter_username_and_password(String Username, String Password) {
		driver.findElement(By.name("username")).sendKeys(Username);
		driver.findElement(By.name("password")).sendKeys(Password);
	   
	}
	
	@Then("^user is click on login button$")
	public void user_is_click_on_login_button() {
		driver.findElement(By.xpath("//input[@value='Login']")).click();
		 
	}
	
	@Then("^user enter to home screen$")
	public void user_enter_to_home_screen() {
		String str=driver.getTitle();
		System.out.println(str);
		Assert.assertEquals("CRMPRO", str);
	    	}
	
	@Then("^user move to new contact page$")
	public void user_move_to_new_contact_page() throws Throwable {
		driver.switchTo().frame("mainpanel");
		Thread.sleep(2000);
		Actions action=new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[@title='Contacts']"))).build().perform();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[text()='New Contact']")).click();
	   
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String FirstName, String Lastname) {
		driver.findElement(By.name("first_name")).sendKeys(FirstName);
		driver.findElement(By.name("surname")).sendKeys(Lastname);
	}

	@Then("^users clicks on save button$")
	public void users_clicks_on_save_button()  {
		
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}


	
}
