import React from 'react';
import { Container, Flex } from 'theme-ui';
import { useParams } from 'react-router-dom';

import { BlogPost } from '../../components';

import post1 from '../../markdown/post-1.md';
import post2 from '../../markdown/post-2.md';

const posts = { post1, post2 };

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = posts[postId?.replace('-', '')];

  return (
    <Flex>
      <Container
        sx={{ maxWidth: '1224px' }}
        px={['2', null, '3', '4']}
        py={['1', null, '2']}
      >
        <BlogPost markdown={post} />
      </Container>
    </Flex>
  );
};

export default BlogPostPage;
