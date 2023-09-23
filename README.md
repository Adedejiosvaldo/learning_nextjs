# Getting started with NextJs

### Topics covered:

1. Setting up the environment
2. Routing and Navigation
3. Client side and server side rendering
   Notes under client and server

   - NextJs components are server side rendered by default

   - To make a component client rendered, we add 'use client' to the top of the file

   ```
   "use client";
   ```

   - We can remove the component that requires the interactivity and then make it a client coponent rendered in a server component

4. Data Fetching

| Render environment    | Fetchin method used  |
| --------------------- | -------------------- |
| Client side rendering | useState + useEffect |
| '                     | React                |
| Server side rendering | Text                 |

Fetch data using server components

```
import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
```
