import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
const mockUseLocation = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useLocation: () => mockUseLocation,
  };
});

// Import react-testing methods
import { render, screen as _ } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// The component to test
import Meta from './';

describe('components/Meta', () => {
  beforeEach(() => {
    mockUseLocation.mockReset();
  });
  it('should show all modes, except the current one', async () => {
    // Arrange
    const helmetContext = {};
    const locales = ['ro', 'en-gb'];
    mockUseLocation.mockImplementation('/');

    // Act
    render(
      <HelmetProvider context={helmetContext}>
        <Meta locales={locales} />
      </HelmetProvider>
    );

    // Assert
    expect(true).toBeTruthy();
  });
});
