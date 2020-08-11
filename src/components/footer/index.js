/** @jsx jsx */
import React from 'react';
import { Box, NavLink, Text, jsx } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        textAlign: 'center',
        width: '100%',
      }}
      px={['2', '2', '3', '4']}
      py={['1', '1', '2', '2']}
      variant="styles.footer"
    >
      <Text sx={{ display: 'block' }}>
        {t('footer:copyright-notice', { lng: currentLanguage })}
      </Text>
      <Box sx={{ display: ['block', null, 'inline-block'] }}>
        <NavLink
          href={`mailto:${t('footer:email', { lng: currentLanguage })}`}
          sx={{ variant: 'links.footer' }}
          mr="2"
        >
          {t('footer:email', { lng: currentLanguage })}
        </NavLink>
        <NavLink
          href={`${t('footer:github', { lng: currentLanguage })}`}
          sx={{ variant: 'links.footer' }}
        >
          {t('footer:github', { lng: currentLanguage })}
        </NavLink>
      </Box>
    </Box>
  );
};

export default Footer;
