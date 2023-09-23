# Getting started with NextJs

### Topics covered:

## Part 1 - Introduction

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
   |                       | React Query          |
   | Server side rendering | Fetch()              |

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

   This is useful when you have data that updates frequently
   ```

   To keep data fresh for a particular amount of time

   ```
   const response = await fetch("https://jsonplaceholder.typicode.com/users",{next:{revalidate:10}});

   The system gets fresh data from the backend every 10 seconds
   ```

## Part II - Styling

1. Global style - styles that are global

   - PS: DO not define specific component syles in the global style

2.CSS Modules -A css file that is scoped to a component or page

    You save the css module as

    ```
    ProductCard.module.css
    ```

    to import the css
    ```
    import styles from "./ProductCard.module.css";

    To use it in a div
      <div className={styles.card}>
    ```
