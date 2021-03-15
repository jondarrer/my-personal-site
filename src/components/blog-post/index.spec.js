import React from 'react';

const mockMarkdown1 = '# This is a header\n\nAnd this is a paragraph';
const mockMarkdown2 =
  '# This is a header <!-- omit in toc -->\n\nAnd this is a paragraph';
const mockMarkdownResult = 'This is a headerAnd this is a paragraph';
jest.mock('react-markdown', () => () => mockMarkdownResult);

// Import react-testing methods
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// The component to test
import BlogPost from './';

describe('components/BlogPost', () => {
  it('Should show all modes, except the current one', async () => {
    // Arrange
    const postInfo = {
      markdown: mockMarkdown1,
    };

    // Act
    render(<BlogPost postInfo={postInfo} />);

    // Assert
    expect(screen.queryByText(mockMarkdownResult)).toBeInTheDocument();
  });

  it('Should not render html', async () => {
    // Arrange
    const postInfo = {
      markdown: mockMarkdown2,
    };

    // Act
    render(<BlogPost postInfo={postInfo} />);

    // Assert
    expect(screen.queryByText(mockMarkdownResult)).toBeInTheDocument();
    expect(screen.queryByText('omit in toc')).not.toBeInTheDocument();
  });
});
