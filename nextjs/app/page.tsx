"use client";

import { useQuery } from "@apollo/client";
import { GET_USERS } from "../lib/queries";

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.users.map((user: { id: string; name: string; email: string }) => (
          <li key={user.id}>
            <p>
              Name: {user.name}, Email:{user.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
