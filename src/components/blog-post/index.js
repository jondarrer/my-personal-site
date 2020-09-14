import React from 'react';
import { Card, Heading, Image, Link, Text, useThemeUI } from 'theme-ui';
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
  const { colorMode } = useThemeUI();
  let codeBgColour = '#eee';

  if (colorMode === 'dark') {
    codeBgColour = '#222';
  }

  return (
    <>
      <ReactMarkdown
        source={postInfo.markdown}
        renderers={{
          heading: ({ children, ...props }) => (
            <Heading as={`h${props.level}`}>{children}</Heading>
          ),
          paragraph: ({ children }) => (
            <Text as="p" variant="text.default">
              {children}
            </Text>
          ),
          image: ({ children: _, ...props }) => (
            <Card mb={3}>
              <Image alt={props.alt} src={props.src} />
              <Text variant="text.default">{props.alt}</Text>
            </Card>
          ),
          text: ({ children }) => (
            <Text sx={{ display: 'inline' }} variant="text.default">
              {children}
            </Text>
          ),
          link: ({ children, ...props }) => <Link {...props}>{children}</Link>,
          code: ({ language, value }) => (
            <pre
              style={{
                backgroundColor: codeBgColour,
                padding: '1em',
                overflowX: 'scroll',
              }}
            >
              <code
                className={`language-${language}`}
                style={{
                  fontFamily: 'Consolas,Monaco,"Andale Mono",Menlo,monospace',
                  fontSize: '16px',
                }}
              >
                {value}
              </code>
            </pre>
          ),
          inlineCode: ({ children }) => (
            <code
              style={{
                backgroundColor: codeBgColour,
                fontFamily: 'Consolas,Monaco,"Andale Mono",Menlo,monospace',
                fontSize: '16px',
                padding: '0.25em',
              }}
            >
              {children}
            </code>
          ),
        }}
      />
    </>
  );
};

export default BlogPost;
