import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Link as ThemeUILink, useColorMode } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

/**
 * Provides a way to change from the current language to another one from the provided list
 *
 * @typedef {object} Props
 * @property {Array<string>} colourModes The available colour modes
 */

/**
 * Provides a way to change from the current language to another one from the provided list
 *
 * @type {React.FC<Props>}
 */
const ColourModeSwitcher = ({ colourModes }) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const [currentColorMode, setColorMode] = useColorMode();

  return (
    <>
      {colourModes.map((colourMode, index) => {
        return colourMode === currentColorMode ? (
          <Box as="span" key={index} />
        ) : (
          <ThemeUILink
            href="#!"
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setColorMode(colourMode);
            }}
          >
            {t(`colour-mode-switcher:${colourMode}`, { lng: currentLanguage })}
          </ThemeUILink>
        );
      })}
    </>
  );
};

export default ColourModeSwitcher;
