/** @jsx jsx */
import React from 'react';
import { Box, Text, jsx } from 'theme-ui';
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
    >
      <Text sx={{ display: ['block', null, 'inline-block'] }}>
        {t('footer:copyright-notice', { lng: currentLanguage })}
      </Text>
      <Box sx={{ display: ['block', null, 'inline-block'] }}>
        <a href={`mailto:${t('footer:email', { lng: currentLanguage })}`}>
          {t('footer:email', { lng: currentLanguage })}
        </a>
        <a href={`${t('footer:github', { lng: currentLanguage })}`}>
          {t('footer:github', { lng: currentLanguage })}
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
