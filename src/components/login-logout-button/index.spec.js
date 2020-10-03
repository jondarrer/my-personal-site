/* global beforeAll */
import React from 'react';

jest.mock('@auth0/auth0-react');

import { useAuth0 } from '@auth0/auth0-react';

// import react-testing methods
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LoginLogoutButton from './';
import userEvent from '@testing-library/user-event';

const mockLoginWithRedirect = jest.fn();
const mockLogout = jest.fn();

describe('components/LoginLogoutButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when loading', () => {
    beforeAll(() => {
      // Arrange
      useAuth0.mockReturnValue({
        user: null,
        isAuthenticated: false,
        isLoading: true,
        loginWithRedirect: mockLoginWithRedirect,
        logout: mockLogout,
      });
    });

    it('should show "Loading" text', () => {
      // Act
      render(<LoginLogoutButton />);

      // Assert
      expect(screen.queryByLabelText('Loading')).toBeInTheDocument();
    });

    it('should not show the login button', () => {
      // Act
      render(<LoginLogoutButton />);

      // Assert
      expect(screen.queryByLabelText('Login')).not.toBeInTheDocument();
    });

    it('should not show the logout button', () => {
      // Act
      render(<LoginLogoutButton />);

      // Assert
      expect(screen.queryByLabelText('Logout')).not.toBeInTheDocument();
    });
  });

  describe('when the user is not authenticated', () => {
    beforeAll(() => {
      // Arrange
      useAuth0.mockReturnValue({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        loginWithRedirect: mockLoginWithRedirect,
        logout: mockLogout,
      });
    });

    it('should show the login button', () => {
      // Act
      render(<LoginLogoutButton />);

      // Assert
      expect(screen.getByLabelText('Login')).toBeInTheDocument();
    });

    it('should not show the logout button', () => {
      // Act
      render(<LoginLogoutButton />);

      // Assert
      expect(screen.queryByLabelText('Logout')).not.toBeInTheDocument();
    });

    it('should not show the "Loading" text', () => {
      // Act
      render(<LoginLogoutButton />);

      // Assert
      expect(screen.queryByLabelText('Loading')).not.toBeInTheDocument();
    });

    it('should perform "loginWithRedirect" when login button is clicked', () => {
      // Act
      render(<LoginLogoutButton />);

      userEvent.click(screen.getByLabelText('Login'));

      // Assert
      expect(mockLoginWithRedirect).toHaveBeenCalled();
    });
  });

  describe('when the user is authenticated', () => {
    beforeAll(() => {
      // Arrange
      useAuth0.mockReturnValue({
        user: { name: 'Test', email: 'tester@test.com' },
        isAuthenticated: true,
        isLoading: false,
        loginWithRedirect: mockLoginWithRedirect,
        logout: mockLogout,
      });
    });

    it('should show the logout button', () => {
      // Act
      render(<LoginLogoutButton />);

      // Assert
      expect(screen.getByLabelText('Logout')).toBeInTheDocument();
    });

    it('should not show the login button when the user is authenticated', () => {
      // Act
      render(<LoginLogoutButton />);

      // Assert
      expect(screen.queryByLabelText('Login')).not.toBeInTheDocument();
    });

    it('should not show the "Loading" text when the user is authenticated', () => {
      // Act
      render(<LoginLogoutButton />);

      // Assert
      expect(screen.queryByLabelText('Loading')).not.toBeInTheDocument();
    });

    it('should perform "logout" when logout button is clicked', () => {
      // Act
      render(<LoginLogoutButton />);

      userEvent.click(screen.getByLabelText('Logout'));

      // Assert
      expect(mockLogout).toHaveBeenCalled();
    });

    it('should perform "logout" with the correct returnTo when logout button is clicked', () => {
      // Act
      render(<LoginLogoutButton logoutReturnTo="/" />);

      userEvent.click(screen.getByLabelText('Logout'));

      // Assert
      expect(mockLogout).toHaveBeenCalledWith({
        returnTo: '/',
      });
    });
  });
});
