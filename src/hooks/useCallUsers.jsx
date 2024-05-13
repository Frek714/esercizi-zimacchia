import { fetchUsers } from "../api/fetchJsonPlaceholder";

import React, { useEffect, useState } from "react";

export const useCallUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  return { getUsers, users };

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await fetchUsers()
  //     setUsers(data)
  //   }
  //   getUsers()

  // }, [])

  // return users
};
