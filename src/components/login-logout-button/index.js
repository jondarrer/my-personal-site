import React from 'react';
import { IconButton, Spinner } from 'theme-ui';
import { useAuth0 } from '@auth0/auth0-react';

import UnlockIcon from '../../images/unlock.svg';
import UserIcon from '../../images/user.svg';

const LoginButton = ({ onClickHandler }) => (
  <IconButton onClick={() => onClickHandler()} aria-label="Login">
    <UnlockIcon width="20px" height="20px" fill="currentcolor" />
  </IconButton>
);
const LogoutButton = ({ onClickHandler, returnTo }) => (
  <IconButton onClick={() => onClickHandler({ returnTo })} aria-label="Logout">
    <UserIcon width="20px" height="20px" fill="currentcolor" />
  </IconButton>
);

const LoginLogoutButton = ({ logoutReturnTo }) => {
  const {
    user,
    isAuthenticated,
    isLoading,
    error,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <Spinner size={20} strokeWidth={2} aria-label="Loading" />;
  }

  if (!isAuthenticated) {
    return <LoginButton onClickHandler={loginWithRedirect} />;
  }

  if (error) {
    console.warn(error);
  }

  return (
    <LogoutButton
      user={user}
      onClickHandler={logout}
      returnTo={logoutReturnTo}
    />
  );
};

export default LoginLogoutButton;
