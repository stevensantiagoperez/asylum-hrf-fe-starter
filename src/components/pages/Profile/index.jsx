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
    return (
      <div className="text-center p-4 text-gray-700">You must be logged in to view this page.</div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 min-h-screen bg-white">
      <div className="bg-white shadow-md rounded-lg p-10 text-center w-[320px]">
        <img
          src={user.picture}
          alt={user.name}
          className="rounded-full w-28 h-28 mx-auto mb-5 border border-gray-300 shadow-sm"
        />
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-600 mb-5">{user.email}</p>

        <button
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: window.location.origin,
              },
            })
          }
          className="bg-blue-600 text-white font-semibold px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
