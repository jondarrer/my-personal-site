/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-arrow-callback */
import { Before, Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:9000';

Before(() => {
  cy.wrap('dark').as('prefersColorScheme');
});

// eslint-disable-next-line space-before-function-paren
Given('I open {string} page in {string}', function GivenIOpenAPageInALanguage(
  pageName,
  language
) {
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
    case 'Blog':
      path += 'blog';
      break;
    default:
      break;
  }
  const prefersColorScheme = this.prefersColorScheme;
  cy.visit(`${url}${path}`, {
    onBeforeLoad(win) {
      const stubMatchMedia = cy.stub(win, 'matchMedia');

      stubMatchMedia.withArgs('(prefers-color-scheme: dark)').returns({
        media: '(prefers-color-scheme: dark)',
        matches: prefersColorScheme === 'dark',
        onchange: null,
      });

      stubMatchMedia.withArgs('(prefers-color-scheme: light)').returns({
        media: '(prefers-color-scheme: light)',
        matches: prefersColorScheme === 'light',
        onchange: null,
      });
    },
  });
});

Then('I see the title {string}', (title) => {
  cy.get('h1').should('contain', title);
});
