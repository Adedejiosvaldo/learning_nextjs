# Getting started with NextJs

### Topics covered:

- Setting up the environment
- Routing and Navigation
- Client side and server side rendering
  Notes under client and server

1. NextJs components are server side rendered by default

2. To make a component client rendered, we add 'use client' to the top of the file

```
"use client";
```

3. We can remove the component that requires the interactivity and then make it a client coponent rendered in a server component
