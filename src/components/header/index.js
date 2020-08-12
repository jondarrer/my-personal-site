/** @jsx jsx */
import React from 'react';
import { Container, Flex, jsx } from 'theme-ui';

import Navbar from '../navbar';

const Header = () => (
  <Flex
    as="header"
    sx={{
      position: ['fixed', null, null, 'relative'],
      alignItems: 'center',
      alignContent: 'center',
      variant: 'styles.header',
      width: '100%',
    }}
  >
    <Container
      sx={{ display: 'flex', maxWidth: '1224px' }}
      px={['2', null, '3', '4']}
      py={['1', null, '2']}
    >
      <Navbar variant="links.header" />
    </Container>
  </Flex>
);

export default Header;
