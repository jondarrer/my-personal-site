import React from 'react';
import { Heading, Image, Text } from 'theme-ui';
import ReactMarkdown from 'react-markdown';

/**
 * @typedef {import('../../models').PostInfo} PostInfo
 */

/**
 * Props for the BlogPost type
 *
 * @typedef {object} Props
 * @property {PostInfo} postInfo Blog post info
 */

const BlogPost = ({ postInfo }) => {
  return (
    <>
      <ReactMarkdown
        source={postInfo.markdown}
        renderers={{
          heading: ({ children, ...props }) => (
            <Heading as={`h${props.level}`}>{children}</Heading>
          ),
          paragraph: ({ children }) => <Text as="p">{children}</Text>,
          image: ({ children: _, ...props }) => (
            <Image alt={props.alt} src={props.src} />
          ),
          text: ({ children }) => <Text>{children}</Text>,
        }}
      />
    </>
  );
};

export default BlogPost;
