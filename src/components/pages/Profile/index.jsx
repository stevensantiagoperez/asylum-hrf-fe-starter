import { useAuth0 } from '@auth0/auth0-react';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div className="text-center p-4 text-gray-700">You must be logged in to view this page.</div>;
  }
  

  return <div>Profile Page</div>;
};

export default Profile;
