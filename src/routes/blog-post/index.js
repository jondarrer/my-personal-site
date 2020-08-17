import React from 'react';
import { Container, Flex } from 'theme-ui';
import { useParams } from 'react-router-dom';

import { BlogPost, Meta } from '../../components';

/**
 * Props for the BlogPostPage type
 *
 * @typedef {object} Props
 * @property {Array<string>}} locales The theme to apply to the links
 */

const BlogPostPage = ({ locales }) => {
  const { postId } = useParams();

  return (
    <>
      <Meta locales={locales} />
      <Flex>
        <Container
          sx={{ maxWidth: '1224px' }}
          px={['2', null, '3', '4']}
          py={['1', null, '2']}
        >
          <BlogPost postId={postId} />
        </Container>
      </Flex>
    </>
  );
};

export default BlogPostPage;
