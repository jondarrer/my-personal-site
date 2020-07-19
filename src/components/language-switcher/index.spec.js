import React from 'react';
import i18next from 'i18next';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

// import react-testing methods
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { LanguageContext } from '../../contexts';
import { i18n as _i18n } from '../../utils';

// the component to test
import LanguageSwitcher from './';

describe('components/LanguageSwitcher', () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/');
  });
  it('Should show all languages, except the current one', async () => {
    // Arrange
    const currentLanguage = 'en';
    const otherLanguage = 'ro';

    render(
      <Router history={history}>
        <LanguageContext.Provider
          value={{
            currentLanguage,
            availableLanguages: [currentLanguage, otherLanguage],
          }}
        >
          <LanguageSwitcher />
        </LanguageContext.Provider>
      </Router>
    );

    // Act

    // Assert
    expect(
      screen.queryByText(
        i18next.t(`language-switcher:${currentLanguage}`, {
          lng: currentLanguage,
        })
      )
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        i18next.t(`language-switcher:${otherLanguage}`, {
          lng: currentLanguage,
        })
      )
    ).toBeInTheDocument();
  });
  it('Should change to the selected language', async () => {
    // Arrange
    const currentLanguage = 'en';
    const otherLanguage = 'ro';

    render(
      <Router history={history}>
        <LanguageContext.Provider
          value={{
            currentLanguage,
            availableLanguages: [currentLanguage, otherLanguage],
          }}
        >
          <LanguageSwitcher />
        </LanguageContext.Provider>
      </Router>
    );

    // Act
    const otherLanguageLink = screen.queryByText(
      i18next.t(`language-switcher:${otherLanguage}`, {
        lng: currentLanguage,
      })
    );
    fireEvent.click(otherLanguageLink);

    // Assert
    expect(history.location.pathname).toBe('/ro');
  });
});
