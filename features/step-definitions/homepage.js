import * as homepage from '../../pageObjects/homepage'
module.exports = function () {
    this.Given(/^I am on the landing page$/, homepage.gotoPage)
    this.Then(/^I can see logo in navigation bar$/, homepage.hasLogo)
    this.Given(/^I am viewing product list tops$/, homepage.clickTops)
    this.Given(/^I filter the product list$/, homepage.refine)
    this.Given(/^I filter by option "Colour"$/, homepage.clickColour)
    this.Given(/^I select colour "Black"$/, homepage.clickBlack)
    this.Given(/^I select colour "White"$/, homepage.clickWhite)
    this.When(/^I apply these filters$/, homepage.clickApply)
    this.When(/^I clear all filters$/, homepage.clearFilter)
    this.Then(/^Filter button has 1 filter$/, homepage.hasFilter)
    this.Then(/^Filter button has no filters$/, homepage.hasNoFilter)
    this.Then(/^Filter returns a product list$/, homepage.productList)

}


