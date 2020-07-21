import React from 'react';
import i18next from 'i18next';

const mockSetColorMode = jest.fn();
jest.mock('theme-ui', () => {
  return {
    ...jest.requireActual('theme-ui'),
    useColorMode: () => ['light', mockSetColorMode],
  };
});
import { ThemeProvider } from 'theme-ui';

// import react-testing methods
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { LanguageContext } from '../../contexts';
import { theme, i18n as _i18n } from '../../utils';

// the component to test
import ColourModeSwitcher from './';

describe('components/ColourModeSwitcher', () => {
  // beforeAll(() => {
  //   ThemeUI.useColorMode.mockReturnValue(mockUseColorMode);
  // });
  it('Should show all modes', async () => {
    // Arrange
    const currentLanguage = 'en';
    const lightMode = 'light';
    const darkMode = 'dark';

    render(
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider
          value={{
            currentLanguage,
            availableLanguages: [currentLanguage],
          }}
        >
          <ColourModeSwitcher colourModes={['light', 'dark']} />
        </LanguageContext.Provider>
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(
      screen.queryByText(
        i18next.t(`colour-mode-switcher:${lightMode}`, {
          lng: currentLanguage,
        })
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        i18next.t(`colour-mode-switcher:${darkMode}`, {
          lng: currentLanguage,
        })
      )
    ).toBeInTheDocument();
  });
  it('Should allow the current mode to be changed from light to dark', async () => {
    // Arrange
    const currentLanguage = 'en';
    const darkMode = 'dark';

    render(
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider
          value={{
            currentLanguage,
            availableLanguages: [currentLanguage],
          }}
        >
          <ColourModeSwitcher colourModes={['light', 'dark']} />
        </LanguageContext.Provider>
      </ThemeProvider>
    );

    // Act
    const darkModeButton = screen.queryByText(
      i18next.t(`colour-mode-switcher:${darkMode}`, {
        lng: currentLanguage,
      })
    );
    fireEvent.click(darkModeButton);

    // Assert
    expect(mockSetColorMode).toBeCalledWith(darkMode);
    // expect(darkModeButton).toBeChecked();
  });
});
