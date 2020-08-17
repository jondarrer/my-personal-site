import React from 'react';
import { Box, Container, Flex, Grid, Heading, Image } from 'theme-ui';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

import { useLanguage } from '../../contexts';
import { getLanguageForLocale } from '../../utils';

import portrait from '../../images/jondarrer-soften-portrait.jpg';

/**
 * Props for the HomePage type
 *
 * @typedef {object} Props
 * @property {Array<string>}} locales The theme to apply to the links
 */

const HomePage = ({ locales }) => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <html lang={currentLanguage} />
        <title>
          {t('nav-bar:home', { currentLanguage })} -{' '}
          {t('nav-bar:domain', { currentLanguage })}
        </title>
        {locales.map((locale) => {
          const lng = getLanguageForLocale(locale);
          return (
            <link
              rel="alternate"
              href={`https://${t('nav-bar:domain', { lng })}${t(
                'nav-bar:' + location.pathname,
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
          content={t('meta:meta-description-home', { currentLanguage })}
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
          content={t('meta:meta-description-home', { currentLanguage })}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://{t('nav-bar:domain', { currentLanguage })}${portrait}`}
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
      <Flex>
        <Container sx={{ maxWidth: '1224px' }}>
          <Grid columns={[1, null, 2]} gap={0}>
            <Box>
              <Image src={portrait} sx={{ display: 'block' }} />
            </Box>
            <Box px={['2', null, '3', '4']} py={['1', null, '2']}>
              <Heading as="h1" px={['0', null, '2', '0']}>
                {t('home-page:hello', { lng: currentLanguage })}
              </Heading>
              <Heading as="h2" px={['0', null, '2', '0']}>
                {t('home-page:my-name-is', { lng: currentLanguage })}
              </Heading>
            </Box>
          </Grid>
        </Container>
      </Flex>
    </>
  );
};

export default HomePage;
