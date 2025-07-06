// src/components/UserList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../Pages/BaseUrl";


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}userlist`)
      .then((res) => {
        setUsers(res.data.data || []);
        console.log("Fetched users:", res.data);
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
