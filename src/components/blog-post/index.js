import React from 'react';
import { Heading, Text } from 'theme-ui';
import ReactMarkdown from 'react-markdown';

import { getPostInfo } from '../../utils';

/**
 * Props for the BlogPost type
 *
 * @typedef {object} Props
 * @property {string} postId The id of the blog post
 */

const BlogPost = ({ postId }) => {
  const postInfo = getPostInfo(postId);

  return (
    <>
      <ReactMarkdown
        source={postInfo.markdown}
        renderers={{
          heading: ({ children, ...props }) => (
            <Heading as={`h${props.level}`}>{children}</Heading>
          ),
          paragraph: ({ children }) => <Text as="p">{children}</Text>,
          text: ({ children }) => <Text>{children}</Text>,
        }}
      />
    </>
  );
};

export default BlogPost;
