import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import { useLanguage } from '../../contexts';
import { getLanguageForLocale } from '../../utils';

import portrait from '../../images/jondarrer-soften-portrait.jpg';

/**
 * Props for the Meta type
 *
 * @typedef {object} Props
 * @property {Array<string>}} locales The theme to apply to the links
 */

const Meta = ({ locales }) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <Helmet>
      <html lang={currentLanguage} />
      <title>
        {t(`nav-bar:blog`, { currentLanguage })} -{' '}
        {t('nav-bar:domain', { currentLanguage })}
      </title>
      {locales.map((locale) => {
        const lng = getLanguageForLocale(locale);
        return (
          <link
            rel="alternate"
            href={`https://${t('nav-bar:domain', { lng })}${t(
              'routes:' + location.pathname,
              {
                lng,
              }
            )}`}
            hrefLang={locale}
            key={locale}
          />
        );
      })}
      <meta
        name="description"
        content={t('meta:meta-description-blog', { currentLanguage })}
      />
      <meta
        name="keywords"
        content={t('meta:meta-keywords', { currentLanguage })}
      />
      <meta
        property="og:title"
        content={`${t('nav-bar:business-name', {
          currentLanguage,
        })} - ${t('meta:meta-business-description', { currentLanguage })}`}
      />
      <meta
        property="og:site_name"
        content={t('nav-bar:business-name', { currentLanguage })}
      />
      <meta
        property="og:url"
        content={`https://${t('nav-bar:domain', { currentLanguage })}`}
      />
      <meta
        property="og:description"
        content={t('meta:meta-description-blog', { currentLanguage })}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`https://${t('nav-bar:domain', {
          currentLanguage,
        })}${portrait}`}
      />
      <script type="application/ld+json">
        {`{
          "@context": {
            "@id": "https://schema.org",
            "name": {
              "@id": "https://schema.org/name",
              "@language": "${currentLanguage}"
            },
            "url": {
              "@id": "https://schema.org/url",
              "@language": "${currentLanguage}"
            }
          },
          "@type": "Organization",
          "url": "https://${t('nav-bar:domain', { currentLanguage })}",
          "name": "${t('nav-bar:business-name', { currentLanguage })}",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "${t('footer:email', { currentLanguage })}",
            "contactType": "customer service"
          }
        }`}
      </script>
    </Helmet>
  );
};

export default Meta;
