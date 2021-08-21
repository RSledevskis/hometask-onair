import { Given, When, Then } from '@cucumber/cucumber';
import {getLanguageSwitcher, waitForLanguageSwitcher} from "../helpers/webelements";

Given("I am on the {string} page", (login: string) => {
    browser.url(`https://the-internet.herokuapp.com/${login}`);
});

Given("I open the {string} page", (pageUrl: string) => {
    browser.url(pageUrl);
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
    $('#username').setValue(username);
    $('#password').setValue(password);
    $('button[type="submit"]').click();
});

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect($('#flash')).toBeExisting();
    expect($('#flash')).toHaveTextContaining(message);
});

Then("I wait for {int} seconds", (miliseconds: number) => {
    browser.pause(miliseconds)
});

Then("I switch the language {string}", (languageParameter: "en" | "lv" | "ru") => {
    waitForLanguageSwitcher(languageParameter);
    const element = getLanguageSwitcher(languageParameter).click();
});


