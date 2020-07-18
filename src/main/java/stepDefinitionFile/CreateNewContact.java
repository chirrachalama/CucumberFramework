package stepDefinitionFile;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CreateNewContact {
	
	WebDriver driver;
	
	@Given("^user is already on home page$")
	public void user_is_already_on_home_page()  {
		String str=driver.getTitle();
		System.out.println(str);
		Assert.assertEquals("CRMPRO", str);
	   
	}

	@When("^user is mouser over on contacts link$")
	public void user_is_mouser_over_on_contacts_link() throws InterruptedException {
		driver.switchTo().frame("mainpanel");
		Thread.sleep(2000);
		Actions action=new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[@title='Contacts']"))).build().perform();
		Thread.sleep(2000);
	}

	@Then("^user click on new contact link$")
	public void user_click_on_new_contact_link()  {
	    
		driver.findElement(By.xpath("//a[text()='New Contact']")).click();
	}

	@Then("^user enters FirstName and LastName$")
	public void user_enters_FirstName_and_LastName()  {
		driver.findElement(By.name("first_name")).sendKeys("chalama");
		driver.findElement(By.name("surname")).sendKeys("chirra");
	}

	@Then("^user click on sava button$")
	public void user_click_on_sava_button()  {
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}


}
