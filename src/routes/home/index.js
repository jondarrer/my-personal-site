import React from 'react';
import { Container, Flex, Heading } from 'theme-ui';
import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../contexts';

const HomePage = () => {
  const { currentLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <Flex>
      <Container
        sx={{ maxWidth: '1224px' }}
        px={['2', '2', '3', '4']}
        py={['1', '1', '2', '2']}
      >
        <Heading as="h1" px={['0', '0', '2', '0']}>
          {t('home-page:hello', { lng: currentLanguage })}
        </Heading>
      </Container>
    </Flex>
  );
};

export default HomePage;
