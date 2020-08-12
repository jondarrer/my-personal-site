import React from 'react';
import { IconButton, useColorMode } from 'theme-ui';
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
const ColourModeSwitcher = ({ colourModes, variant }) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const [currentColorMode, setColorMode] = useColorMode();

  return (
    <>
      {colourModes.map((colourMode, index) => {
        const Icon = colourMode.image;
        return colourMode.name === currentColorMode ? null : (
          <IconButton
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setColorMode(colourMode.name);
            }}
            variant={variant}
            aria-label={t(`colour-mode-switcher:${colourMode.name}`, {
              lng: currentLanguage,
            })}
          >
            <Icon width="24px" height="24px" fill="currentcolor" />
          </IconButton>
        );
      })}
    </>
  );
};

export default ColourModeSwitcher;
