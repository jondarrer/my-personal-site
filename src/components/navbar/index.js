import React from 'react';

import LanguageSwitcher from '../language-switcher';
import ColourModeSwitcher from '../colour-mode-switcher';

const Navbar = () => (
  <>
    <LanguageSwitcher />
    <ColourModeSwitcher colourModes={['light', 'dark']} />
  </>
);

export default Navbar;
