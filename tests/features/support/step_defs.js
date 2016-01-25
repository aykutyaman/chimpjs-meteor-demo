module.exports = function() {

  this.Given(/^I have visited localhost$/, function () {
    // Write the automation code here
    browser.url('http://localhost:3000');
  });

  this.When(/^I press "([^"]*)"$/, function (arg1) {
    // Write the automation code here
    client.click('button');
    client.click('button');
    client.click('button');
  });

  this.Then(/^I see "([^"]*)"$/, function (arg1) {
    // Write the automation code here
    expect(client.getText('p')).toEqual("You've pressed the button 3 times.");
  });

}
