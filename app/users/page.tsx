import React from "react";
import UserTable from "./UserTable";

const UsersPage = () => {
  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable />
    </div>
  );
};

export default UsersPage;
