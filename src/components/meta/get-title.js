import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

const getTitle = (pageTitle) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  const defaultPageTitle = t(`meta:default-page-title`, { currentLanguage });

  return `${pageTitle || defaultPageTitle} - ${t('nav-bar:domain', {
    currentLanguage,
  })}`;
};

export default getTitle;
