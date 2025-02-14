export const FetchUsersList = ({ users, error, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Default Fetch Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} is living in {user?.address?.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
