import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import { useLanguage } from '../../contexts';
import { getLanguageForLocale } from '../../utils';

import getTitle from './get-title';

import portrait from '../../images/jondarrer-soften-portrait.jpg';

/**
 * Props for the Meta type
 *
 * @typedef {object} Props
 * @property {Array<string>}} locales The theme to apply to the links
 */

const Meta = ({ locales, pageTitle, keywords, description, picture }) => {
  const { currentLanguage: lng } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();
  const title = getTitle(pageTitle);
  const baseUrl = `https://${t('nav-bar:domain', { lng })}`;
  const pictureUrl = `${baseUrl}${picture || portrait}`;

  return (
    <Helmet>
      <html lang={lng} />
      <title>{title}</title>
      {locales.map((locale) => {
        const localLng = getLanguageForLocale(locale);
        return (
          <link
            rel="alternate"
            href={`https://${t('nav-bar:domain', { lng: localLng })}${t(
              'routes:' + location.pathname,
              {
                lng: localLng,
              }
            )}`}
            hrefLang={locale}
            key={locale}
          />
        );
      })}
      <meta
        name="description"
        content={description || t('meta:meta-description-home', { lng })}
      />
      <meta
        name="keywords"
        content={keywords || t('meta:meta-keywords', { lng })}
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:site_name"
        content={t('nav-bar:business-name', { lng })}
      />
      <meta property="og:url" content={`${baseUrl}${location.pathname}`} />
      <meta
        property="og:description"
        content={description || t('meta:meta-description-home', { lng })}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={pictureUrl} />
      <script type="application/ld+json">
        {`{
          "@context": {
            "@id": "https://schema.org",
            "name": {
              "@id": "https://schema.org/name",
              "@language": "${lng}"
            },
            "url": {
              "@id": "https://schema.org/url",
              "@language": "${lng}"
            }
          },
          "@type": "Organization",
          "url": "${baseUrl}",
          "name": "${t('nav-bar:business-name', { lng })}",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "${t('footer:email', { lng })}",
            "contactType": "customer service"
          }
        }`}
      </script>
    </Helmet>
  );
};

export default Meta;
