import React from 'react';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

const HomePage = () => {
  const lng = useLanguage();
  const { t } = useTranslation();

  return <h1>{t('home-page:hello', { lng })}</h1>;
};

export default HomePage;
