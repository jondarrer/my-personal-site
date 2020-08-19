import React from 'react';
import { Box, Container, Flex, Grid, Heading, Image } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { Meta } from '../../components';
import { useLanguage } from '../../contexts';

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
      <Meta
        locales={locales}
        pageTitle={t('nav-bar:home', { lng: currentLanguage })}
      />
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
