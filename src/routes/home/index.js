import React from 'react';
import { Heading } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

const HomePage = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <Heading as="h1">{t('home-page:hello', { lng: currentLanguage })}</Heading>
  );
};

export default HomePage;
