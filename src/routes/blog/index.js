import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from 'theme-ui';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';

import { Meta } from '../../components';
import { useLanguage } from '../../contexts';
import { GET_POSTS } from '../../graphql/shared-queries';

/**
 * Props for the BlogPage type
 *
 * @typedef {object} Props
 * @property {Array<string>}} locales The theme to apply to the links
 */

const BlogPage = ({ locales }) => {
  const { currentLanguage: lng } = useLanguage();
  const { t } = useTranslation();
  const { data } = useQuery(GET_POSTS, {
    variables: { language: lng },
  });

  return (
    <>
      <Meta
        locales={locales}
        pageTitle={t('meta:blog-page-title', { lng })}
        keywords={t('meta:meta-keywords-blog', { lng })}
        description={t('meta:meta-description-blog', { lng })}
        picture={t('blog-page:picture', { lng })}
      />
      <Flex>
        <Container
          sx={{ maxWidth: '1224px' }}
          px={['2', null, '3', '4']}
          py={['1', null, '2']}
        >
          <Heading as="h1">{t('meta:blog-page-title', { lng })}</Heading>
          <Box>
            {data?.getPosts.map((post, index) => (
              <Link
                key={index}
                as={RouterLink}
                sx={{ display: 'block' }}
                to={`${lng === 'ro' ? '/ro' : ''}/blog/${post.id}`}
              >
                <Grid columns={[1, null, '128px auto']} gap={2}>
                  {post.picture ? (
                    <Image src={post.picture} mt={[0, null, 4]} />
                  ) : (
                    <Box />
                  )}
                  <Box>
                    <Heading as="h2" mt={[0, null, 4]}>
                      {post.title}
                    </Heading>
                    <Text as="p" mb={2}>
                      {post.datePosted}
                    </Text>
                    <Text as="p" mb={[4, null, 2]}>
                      {post.description}
                    </Text>
                  </Box>
                </Grid>
              </Link>
            ))}
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default BlogPage;
