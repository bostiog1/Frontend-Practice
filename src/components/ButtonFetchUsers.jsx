import { useState, useEffect } from "react";
import axios from "axios";

function ButtonFetchUsers() {
  const [counter, setCounter] = useState(1);
  const [users, setUsers] = useState([]);

  const fetchUser = async (id) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUsers((prevUsers) => [...prevUsers, response.data]);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser(counter);
  }, [counter]);

  return (
    <div>
      <h1>User Fetch App</h1>

      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          Increment
        </button>
      </div>

      <div>
        <h2>Users</h2>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ButtonFetchUsers;
