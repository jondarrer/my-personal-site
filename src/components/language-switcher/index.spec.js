import React from 'react';
import i18next from 'i18next';

// import react-testing methods
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { LanguageContext } from '../../contexts';
import { i18n as _i18n } from '../../utils';

// the component to test
import LanguageSwitcher from './';

describe('components/LanguageSwitcher', () => {
  it('Should show all languages, except the current one', async () => {
    // Arrange
    const currentLanguage = 'en';
    const otherLanguage = 'ro';

    render(
      <LanguageContext.Provider
        value={{
          currentLanguage,
          availableLanguages: [currentLanguage, otherLanguage],
        }}
      >
        <LanguageSwitcher />
      </LanguageContext.Provider>
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
});
