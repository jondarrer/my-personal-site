/* global cy */
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:9000';

Given('I open {string} page in {string}', (pageName, language) => {
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
  switch (pageName) {
    case 'BlogPost1':
      path += 'blog/post-1';
      break;
    case 'BlogPost2':
      path += 'blog/post-2';
      break;
    default:
      break;
  }
  cy.visit(`${url}${path}`);
});

Then('I see the title {string}', (title) => {
  cy.get('h1').should('contain', title);
});
