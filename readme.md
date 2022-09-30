# browserlab

Test runner made for running api tests in the browser.

### Use Case
Consider a product which is being run by multiple teams. (ex: booking sites, ecomm sites)

There is usually a customer facing api, that sits behinds many web services. And these web services are managed and released independently by different teams.

This leads to a common issue where a customer journey would break, post deployment of a service. This is usually remedied by writing automation tests in Postman / api testing scripts to catch failures. And usually the testing team runs the api test by triggering a job post deployment of a service.


Browserlab helps teams to write the api test cases for customer journeys, that can be executed on the browser.

The browserlab test suite can be hosted on the companies local intranet, thereby democratizing access to anyone who wants to run these tests be able to go a browserl url and run tests on demand.