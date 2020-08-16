/* global cy */
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

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

Then('I see the page in {string} mode', (colourMode) => {
  const bodyBackgroundColor =
    colourMode === 'light' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';
  cy.get('body').should('have.css', 'background-color', bodyBackgroundColor);
});
