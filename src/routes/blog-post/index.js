import React from 'react';
import { Container, Flex } from 'theme-ui';
import { useParams } from 'react-router-dom';

import { BlogPost, Meta } from '../../components';
import { getPostInfo } from '../../utils';

/**
 * Props for the BlogPostPage type
 *
 * @typedef {object} Props
 * @property {Array<string>}} locales The theme to apply to the links
 */

const BlogPostPage = ({ locales }) => {
  const { postId } = useParams();
  const postInfo = getPostInfo(postId);

  return (
    <>
      <Meta
        locales={locales}
        pageTitle={postInfo.title}
        keywords={postInfo.tags}
        description={postInfo.description}
        picture={postInfo.picture}
      />
      <Flex>
        <Container
          sx={{ maxWidth: '1224px' }}
          px={['2', null, '3', '4']}
          py={['1', null, '2']}
        >
          <BlogPost postInfo={postInfo} />
        </Container>
      </Flex>
    </>
  );
};

export default BlogPostPage;
