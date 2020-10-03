import React from 'react';

import { Box, Container, Flex, Grid, Heading, Image, Text } from 'theme-ui';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';

import { useLanguage } from '../../contexts';

const ProfilePage = () => {
  const { currentLanguage: lng } = useLanguage();
  const { t } = useTranslation();
  const { isLoading, user: auth0User } = useAuth0();
  let user = {};
  if (!isLoading) {
    user = auth0User;
  }
  const { name, picture, email } = user;

  return (
    <>
      <Flex>
        <Container
          sx={{ maxWidth: '1224px' }}
          px={['2', null, '3', '4']}
          py={['1', null, '2']}
        >
          <Heading as="h1">{t('meta:profile-page-title', { lng })}</Heading>
          <Box>
            <Grid columns={[1, null, '128px auto']} gap={2}>
              {picture ? <Image src={picture} mt={[0, null, 4]} /> : <Box />}
              <Box>
                <Heading as="h2" mt={[0, null, 4]}>
                  {name}
                </Heading>
                <Text as="p" mb={2}>
                  {email}
                </Text>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default ProfilePage;
