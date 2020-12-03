/* eslint-disable implicit-arrow-linebreak */
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const iSeePaginationOnPageNo = (pageNo) => {
  cy.get(`span[aria-label="Page Button ${pageNo}"]`)
    .first()
    .should('contain', pageNo);
};

When('I see pagination on page {string}', iSeePaginationOnPageNo);

Then('I click page {string}', (pageNo) => {
  cy.get(`a[aria-label="Page Button ${pageNo}"]`).first().click();
});
