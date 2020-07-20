package testRunnerFile;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\CHALAMA\\eclipse-workspace\\cucumberDemo\\src\\main\\java\\featureFiles\\Tags.feature",
		glue= {"stepDefinitionFile"},
		plugin= {"pretty","html:html-output", "json:json_output/cucumber.json", "junit:junit_output/cucumber.xml"},
		//format= {"pretty","html:test-outout"},
		monochrome = true,
		strict =true,
		dryRun = false,
		tags= {"~@RegressionTest" , "@End2End"}    
				
		)

// OR : tags= {"@RegressionTest , @End2End"} -->execute all tests tagged as @regressiontest or @end2end
//And : tags= {"@RegressionTest" , "@End2End"} -->execute all tests tagged as @regressiontest and @end2end
// ~  : ignore tags
public class TestRunner {
	

}
