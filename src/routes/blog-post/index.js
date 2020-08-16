import React from 'react';
import { Container, Flex } from 'theme-ui';
import { useParams } from 'react-router-dom';

import { BlogPost } from '../../components';

const BlogPostPage = () => {
  const { postId } = useParams();

  return (
    <Flex>
      <Container
        sx={{ maxWidth: '1224px' }}
        px={['2', null, '3', '4']}
        py={['1', null, '2']}
      >
        <BlogPost postId={postId} />
      </Container>
    </Flex>
  );
};

export default BlogPostPage;
