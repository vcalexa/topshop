var expect = require('chai').expect;//installed chai module for assertions
export const gotoPage = () => {
    browser.url('/')

}

export const hasLogo = () => {
    browser.isVisible(".BrandLogo-img")
}


export const clickTops = () => {
	browser.url('/')
	$('[alt="Tops"]').click()
}

export const refine = () => {
	$(".Filters-refineButton").click()
}

export const clickColour = () => {
	$("#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article:nth-child(1) > div.Accordion-header.is-padded > header > div > span.RefinementList-label.is-value").click()
	// I tried to use $('[data-reactid="964"]') with no success

}

export const clickBlack = () => {
	$('#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > button:nth-child(1) > span.ValueOption-count').click()
	// I tried to use $('[data-reactid="960"]') with no success
	//it works fine in chrome dev tools, but not with this script
}

export const clickWhite = () => {
	browser.pause(1000)
	$('#root > div > div.Main-body.is-notScrollable > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Refinements.is-shown > div > div.AccordionGroup.RefinementList > article.Accordion.Accordion-groupMember.is-expanded > div.Accordion-wrapper > div > div > div > button:nth-child(15) > span.ValueOption-label').click()
	// I tried to use $('[data-reactid="1045"]') with no success
}



export const clickApply = () => {
	$(".Refinements-applyButton").click()
}

export const clearFilter = () => {
	$('.Refinements-clearButton').click()
	
}
export const hasFilter = () => {
	expect($('#root > div > div.Main-body > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Filters > div.Filters-row.Filters-refinement > div.Filters-column.Filters-refineButtonContainer > button').getText()).to.contain("Filter (1)")
	
}
export const hasNoFilter = () => {
	expect($('#root > div > div.Main-body > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.Filters > div.Filters-row.Filters-refinement > div.Filters-column.Filters-refineButtonContainer > button').getText()).to.contain("Filter")
	
}
export const productList = () => {
	$('#root > div > div.Main-body > div.Main-inner > div > div > div.PlpContainer-productListContainer > div.ProductList > div > div:nth-child(1) > a > div.ProductImages > img:nth-child(1)').isVisible//the first result should be present
	
}
