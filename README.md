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
    |                      | React Query               |
    | Server side rendering | Fetch()                 |



    Fetching data using server components

    ```
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();

```


5. Data Caching
   Caching is storing the data somewhere that is faster to access!

   Caching is done by default in next js when you use the fetch method

   When you want to disable caching

   ```
   const response = await fetch("https://jsonplaceholder.typicode.com/users",{cache:"no-store"});

   //This is useful when you have data that updates frequently
   ```

   To keep data fresh for a particu;ar amount of time

   ```
   const response = await fetch("https://jsonplaceholder.typicode.com/users",{next:{revalidate:10}});

   //The system gets fresh data from the backend every 10 seconds
   ```
