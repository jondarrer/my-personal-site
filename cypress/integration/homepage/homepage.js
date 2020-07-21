/* global cy */
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:9000';

Given('I open {string} page in {string}', function (pageName, language) {
  let languageCode = '';
  switch (language) {
    case 'Romanian':
      languageCode = 'ro';
      break;
    default:
      languageCode = 'en';
      break;
  }
  let path = `/${languageCode === 'en' ? '' : languageCode + '/'}`;
  path = path + (pageName === 'Home' ? '' : `${pageName.toLowerCase()}`);
  let options = {};
  if (this.prefersColorScheme) {
    // options = {
    //   // https://timdeschryver.dev/blog/setting-up-cypress-with-axe-for-accessibility
    //   // https://github.com/bahmutov/cypress-dark/issues/29
    //   // Cypress.on('window:before:load', (win) => {
    //   onBeforeLoad(win) {
    //     cy.stub(win, 'matchMedia')
    //       .withArgs(`(prefers-color-scheme: ${this.prefersColorScheme})`)
    //       .returns({
    //         matches: true,
    //       });
    //     // });
    //   },
    // };
  }
  cy.visit(`${url}${path}`, options);
});

Given('I have not changed the colour mode before', () => {});

Given('I do not have a colour preference', () => {
  // cy.wrap('light').as('prefersColorScheme');
});

Given('I do have a colour preference of {string}', (colourMode) => {
  cy.wrap(colourMode).as('prefersColorScheme');
});

Given('I have already selected a colour mode of {string}', (colourMode) => {});

When('I change the colour mode to {string}', (colourMode) => {
  const colourModeButtonText =
    colourMode === 'light' ? 'Light Mode' : 'Dark Mode';
  const colourModeButton = cy.contains(colourModeButtonText);
  colourModeButton.click();
});

Then('I see the title {string}', (title) => {
  cy.get('h1').should('contain', title);
});

Then('I see the page in {string} mode', (colourMode) => {
  const bodyBackgroundColor =
    colourMode === 'light' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
  cy.get('body').should('have.css', 'background-color', bodyBackgroundColor);
});
