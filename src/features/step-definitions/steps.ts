import { Given, When, Then } from '@cucumber/cucumber';
import {getLanguageSwitcher, waitForLanguageSwitcher, waitForPopupVisible} from "../helpers/webelements";
import * as assert from "assert";

Given("I open the {string} page", (pageUrl: string) => {
    browser.url(pageUrl);
});

Then("I wait for {int} seconds", (miliseconds: number) => {
    browser.pause(miliseconds)
});

When("I switch the language {string}", (languageParameter: "en" | "lv" | "ru") => {
    waitForLanguageSwitcher(languageParameter);
    const element = getLanguageSwitcher(languageParameter).click();
});

When("I click on element {string}", (selector: string) => {
    if($(selector).isClickable()) {
        $(selector).click();
    }
});

When("I enter value {string} into the search field {string}", (searchValue, searchFieldSelector) => {
    $(searchFieldSelector).setValue(searchValue);
});

When("I select {string} location from dropdown menu {string}", (searchValue, dropdownSelector) => {
    const selectBox = $(dropdownSelector);
    selectBox.selectByAttribute("value", searchValue)
});

When("I select three random products from list", () => {
    selectThreeRandomProducts();
});

function selectThreeRandomProducts() {
    const products = getProductList();

    let productList: string[] =[];
    products.forEach(product => {
        const productId = product.getAttribute("id");
        productList.push(productId);
    })

    productList.sort(() => Math.random() - 0.5);
    productList = productList.slice(1,4);

    productList.forEach(product => {
        $(`tr[id*=${product}] > td > input[type='checkbox']`)
            .click();
    })
}

function getProductList() {
    return  $$("tbody > tr[style*='cursor']");
}

Then("Framework verifies selected products in favorites", () => {
    const expectedProductList = getSelectedProducts();

    addItemsToFavorites();
    openFavoritesPage();

    const products = getProductList();
    let actualProductList: string[] =[];
    products.forEach(product => {
        const productId = product.getAttribute("id");
        actualProductList.push(productId);
    })

    assert.ok(expectedProductList.length === actualProductList.length,
        "Actual product list length not equal to expected value");

    expectedProductList.forEach((value, idx) => {
        assert.strictEqual(value, actualProductList[idx]);
    });

});

function getSelectedProducts(): string[] {
    const products = getProductList();

    let selectedProductList: string[] =[];
    products.forEach(product => {
        const productId = product.getAttribute("id");
        if( $(`[id*=${productId}] > td > input[type='checkbox']`)
            .isSelected()) {
            selectedProductList.push(productId);
        }
    })
    return selectedProductList;
}

function addItemsToFavorites() {
    $('#a_fav_sel').scrollIntoView();
    $('#a_fav_sel').click();
    waitForPopupVisible();
}

function openFavoritesPage() {
    $('a[href*=\'favorites\']').scrollIntoView();
    $('a[href*=\'favorites\']').click();
}


