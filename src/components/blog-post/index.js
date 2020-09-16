import React from 'react';
import { Card, Heading, Image, Link, Text, useThemeUI } from 'theme-ui';
import ReactMarkdown from 'react-markdown';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import prism from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

SyntaxHighlighter.registerLanguage('js', javascript);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('json', json);

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
  let codeBgColour = 'rgb(245, 242, 240)';
  let style = prism;

  if (colorMode === 'dark') {
    codeBgColour = 'rgb(43, 43, 43)';
    style = dark;
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
            <Card mb={3} p={0} sx={{ borderRadius: 0 }}>
              <Image
                alt={props.alt}
                src={props.src}
                variant="images.blogPost"
              />
              {props.alt && <Text variant="text.blogPost">{props.alt}</Text>}
            </Card>
          ),
          text: ({ children }) => (
            <Text sx={{ display: 'inline' }} variant="text.default">
              {children}
            </Text>
          ),
          link: ({ children, ...props }) => <Link {...props}>{children}</Link>,
          code: ({ language, value }) => (
            <SyntaxHighlighter language={language} style={style}>
              {value}
            </SyntaxHighlighter>
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
