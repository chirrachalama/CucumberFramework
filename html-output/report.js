$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/CHALAMA/eclipse-workspace/cucumberDemo/src/main/java/featureFiles/DealsMap.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Dealsmap Page",
  "description": "",
  "id": "free-crm-dealsmap-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM New DealsMap Page scenario",
  "description": "",
  "id": "free-crm-dealsmap-page;free-crm-new-dealsmap-page-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Titles of page is CRMPRO",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "chirrachalama",
        "@452dear"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user can able to get home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is clicks on Deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters Deals Details",
  "rows": [
    {
      "cells": [
        "Title",
        "Amount",
        "Probability",
        "Comission"
      ],
      "line": 15
    },
    {
      "cells": [
        "Deal Titile 1",
        "2000",
        "10",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "Deal Titile 2",
        "1000",
        "30",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "Deal Titile 3",
        "5000",
        "20",
        "20"
      ],
      "line": 18
    },
    {
      "cells": [
        "Deal Titile 4",
        "4000",
        "40",
        "40"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DealsMap.user_already_in_login_page()"
});
formatter.result({
  "duration": 34149455900,
  "status": "passed"
});
formatter.match({
  "location": "DealsMap.titles_of_page_is_CRMPRO()"
});
formatter.result({
  "duration": 24739500,
  "status": "passed"
});
formatter.match({
  "location": "DealsMap.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 540929000,
  "status": "passed"
});
formatter.match({
  "location": "DealsMap.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8981646400,
  "status": "passed"
});
formatter.match({
  "location": "DealsMap.user_can_able_to_get_home_page()"
});
formatter.result({
  "duration": 8089500,
  "status": "passed"
});
formatter.match({
  "location": "DealsMap.user_is_clicks_on_Deals_page()"
});
formatter.result({
  "duration": 6329586900,
  "status": "passed"
});
formatter.match({
  "location": "DealsMap.user_enters_Deals_Details(DataTable)"
});
formatter.result({
  "duration": 28361866400,
  "status": "passed"
});
});