# Automation Task for Tray.io
E2E Automation Framework using Javascript, WebdriverIO, Mocha and Chai

To install the package please download the:
Pre-requisite: node should be installed on the system, here is the link to download node :https://nodejs.org/en/download/

Step 1 : Clone the repo on to your local system or Download the tgz "Eg:e2e-1.0.0-npm.tgz" from GitHub packages page. 

Step 2 : Once you have the code/repo, go to folder with package.json(eg:/Users/AB/MyProjects/TestPackage/package) and execute `npm install`
Step 3 : Please ignore the npm deprecation message for now. But install chai using `npm install chai`

Step 4 : To run the test use `npm test -- --spec ../test/E2E.js`

By default Chrome browser will be used to run the test, to run against different browser(Eg:Firefox) please update `wdio.conf.js`





