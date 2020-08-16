import React from 'react';
import { Box, Container, Flex, Grid, Heading, Image } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';
import portrait from '../../images/jondarrer-soften-portrait.jpg';

const HomePage = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
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
  );
};

export default HomePage;
