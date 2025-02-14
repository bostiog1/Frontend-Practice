import axios from "axios";
import { useEffect, useState } from "react";

export const AxiosUserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/users"
      );

      setUsers(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Axios Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} is working at {user.company?.name || "Unknown Company"}
          </li>
        ))}
      </ul>
    </div>
  );
};
