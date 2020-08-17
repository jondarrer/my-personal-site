import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

// import react-testing methods
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MenuLink from './';

describe('components/MenuLink', () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
    history.push('/the-page');
  });
  it("should produce a link when the page doesn't match", () => {
    // Arrange
    const linkContent = 'A link';

    // Act
    render(
      <Router history={history}>
        <MenuLink to="/another-page">{linkContent}</MenuLink>
      </Router>
    );

    // Assert
    expect(screen.getByText(linkContent)).toHaveAttribute('href');
  });
  it('should produce a when the page matches', () => {
    // Arrange
    const textContent = 'Plain text';

    // Act
    render(
      <Router history={history}>
        <MenuLink to="/the-page">{textContent}</MenuLink>
      </Router>
    );

    // Assert
    expect(screen.getByText(textContent)).not.toHaveAttribute('to');
  });
});
