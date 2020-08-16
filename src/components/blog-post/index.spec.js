import React from 'react';

const mockMarkdown = '# This is a header\n\nAnd this is a paragraph';
const mockMarkdownResult = 'This is a headerAnd this is a paragraph';
jest.mock('react-markdown', () => () => mockMarkdownResult);
jest.mock('../../utils', () => {
  return {
    ...jest.requireActual('../../utils'),
    getPostInfo: () => {
      return {
        markdown: mockMarkdown,
      };
    },
  };
});

// Import react-testing methods
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// The component to test
import BlogPost from './';

describe('components/BlogPost', () => {
  it('Should show all modes, except the current one', async () => {
    // Arrange

    // Act
    render(<BlogPost postId="postId" />);

    // Assert
    expect(screen.queryByText(mockMarkdownResult)).toBeInTheDocument();
  });
});
