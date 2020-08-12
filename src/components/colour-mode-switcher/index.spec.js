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

const SunIcon = () => <div />;
const MoonIcon = () => <div />;
const lightMode = 'light';
const darkMode = 'dark';

describe('components/ColourModeSwitcher', () => {
  // beforeAll(() => {
  //   ThemeUI.useColorMode.mockReturnValue(mockSetColorMode);
  // });
  it('Should show all modes, except the current one', async () => {
    // Arrange
    const currentLanguage = 'en';

    render(
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider
          value={{
            currentLanguage,
            availableLanguages: [currentLanguage],
          }}
        >
          <ColourModeSwitcher
            colourModes={[
              { name: lightMode, image: SunIcon },
              { name: darkMode, image: MoonIcon },
            ]}
          />
        </LanguageContext.Provider>
      </ThemeProvider>
    );

    // Act

    // Assert
    expect(
      screen.queryByLabelText(
        i18next.t(`colour-mode-switcher:${lightMode}`, {
          lng: currentLanguage,
        })
      )
    ).not.toBeInTheDocument();
    expect(
      screen.queryByLabelText(
        i18next.t(`colour-mode-switcher:${darkMode}`, {
          lng: currentLanguage,
        })
      )
    ).toBeInTheDocument();
  });
  it('Should allow the current mode to be changed from light to dark', async () => {
    // Arrange
    const currentLanguage = 'en';

    render(
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider
          value={{
            currentLanguage,
            availableLanguages: [currentLanguage],
          }}
        >
          <ColourModeSwitcher
            colourModes={[
              { name: lightMode, image: SunIcon },
              { name: darkMode, image: MoonIcon },
            ]}
          />
        </LanguageContext.Provider>
      </ThemeProvider>
    );

    // Act
    const darkModeButton = screen.queryByLabelText(
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
