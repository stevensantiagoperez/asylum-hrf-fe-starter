import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * TODO: Ticket 3:
 * Implement authentication and logging functionality using Auth0
 */
export const LoggingButtons = () => {
  // TODO: Replace these with Auth0 functionality
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  console.log("Auth0 Status →", { isAuthenticated });

  // While Auth0 is initializing, prevent showing wrong button
  if (isLoading) return <button className="nav-btn px-4 py-1">Loading...</button>;

  const handleLogging = () => {
    if (isAuthenticated) {
      // TODO: Add Logout functionality here:
      logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      // TODO: Add Redirect functionality here:
      loginWithRedirect();
    }
  };

  const buttonText = isAuthenticated ? 'Log Out' : 'Log In';

  return (
    <button className="nav-btn  px-4 py-1" onClick={handleLogging}>
      {buttonText}
    </button>
  );
};
