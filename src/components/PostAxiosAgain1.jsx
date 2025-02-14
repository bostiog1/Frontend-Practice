import axios from "axios";
import { useEffect, useState } from "react";

export const PostAxiosAgain1 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    // setLoading(true);
    // setError(null);

    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>User List: </h1>
      <ul>
        {users.map((user) => (
          <div>
            <li key={user.id}>
              {user.name} -- {user.username}
            </li>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
