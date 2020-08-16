import React from 'react';
import { Heading, Text } from 'theme-ui';
import ReactMarkdown from 'react-markdown';

/**
 * Props for the BlogPost type
 *
 * @typedef {object} Props
 * @property {string} markdown The available colour modes
 */

const BlogPost = ({ markdown }) => {
  console.log({ markdown });
  return (
    <ReactMarkdown
      source={markdown}
      renderers={{
        heading: ({ children, ...props }) => (
          <Heading as={`h${props.level}`}>{children}</Heading>
        ),
        paragraph: ({ children }) => <Text as="p">{children}</Text>,
        text: ({ children }) => <Text>{children}</Text>,
      }}
    />
  );
};

export default BlogPost;
