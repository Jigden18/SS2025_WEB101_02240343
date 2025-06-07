# Final TikTok Frontend

## Practical 4 & 5 – TikTok Fullstack Integration (PostgreSQL + Infinite Scroll)

## Overview

This practical covers **Practical 4 and 5** of the TikTok clone project:

- **Practical 4**: Connecting TikTok Frontend to PostgreSQL using Prisma ORM  
- **Practical 5**: Implementing Infinite Scroll using TanStack Query and Cursor-Based Pagination

You will learn how to set up a production-ready backend with PostgreSQL and Prisma, and then implement infinite scroll functionality in your frontend using React Query's `useInfiniteQuery`.

---

## Practical 4 – Connecting TikTok to PostgreSQL with Prisma ORM

### 🔹 Objectives
- Set up a PostgreSQL database
- Use Prisma ORM to interact with it
- Replace in-memory data with persistent database storage
- Implement user authentication with password encryption
- Update API endpoints for real database operations

---

### Step-by-Step Guide

### **Part 1: PostgreSQL & Prisma Setup**

1. **Initialize Prisma in your backend**

   ```bash
   npm install prisma --save-dev
   npx prisma init


This creates a `.env` file and a `prisma/schema.prisma` file.

2. **Set DATABASE\_URL in `.env`**

   Example:

   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/tiktokdb"
   ```

3. **Define Prisma Schema**

   In `prisma/schema.prisma`:

   ```prisma
   model User {
     id       String   @id @default(cuid())
     email    String   @unique
     password String
     videos   Video[]
   }

   model Video {
     id       String   @id @default(cuid())
     title    String
     url      String
     userId   String
     user     User     @relation(fields: [userId], references: [id])
   }
   ```

4. **Run Migration**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Generate Prisma Client**

   ```bash
   npx prisma generate
   ```

---

### **Part 2: Backend Changes**

1. **Install Required Packages**

   ```bash
   npm install @prisma/client bcrypt jsonwebtoken
   ```

2. **Update Controllers**

   In `src/controllers/userController.js`:

   * Use `bcrypt.hash()` for password encryption
   * Query users using `prisma.user.findUnique()`

   In `src/controllers/videoController.js`:

   * Replace array logic with `prisma.video.findMany()`, `create()`, `update()`, etc.

3. **Handle Auth with JWT**

   * Issue tokens on successful login
   * Use middleware to protect routes

---

### **Part 3: Frontend Integration**

1. **Update Axios Client**

   ```js
   const API = axios.create({ baseURL: "http://localhost:5000/api" });
   ```

2. **Connect Signup/Login Forms**

   * On submit, send POST request to `/api/users/signup` or `/api/users/login`
   * Save JWT in localStorage

3. **Update Video Service**

   * Change all endpoints to fetch from database via backend

---

##  Practical 5 – Infinite Scroll with TanStack Query

### 🔹 Objectives

* Use `useInfiniteQuery` for loading videos
* Implement Intersection Observer to detect scroll
* Use cursor-based pagination for performance and stability

---

### Step-by-Step Guide

### **Part 1: Backend Cursor-Based Pagination**

1. **Update Controller (`videoController.js`)**

   ```js
   const limit = parseInt(req.query.limit) || 5;
   const cursor = req.query.cursor;

   const videos = await prisma.video.findMany({
     take: limit + 1,
     ...(cursor && { skip: 1, cursor: { id: cursor } }),
     orderBy: { createdAt: 'desc' },
   });

   const hasNextPage = videos.length > limit;
   const result = hasNextPage ? videos.slice(0, -1) : videos;

   res.json({
     videos: result,
     nextCursor: hasNextPage ? result[result.length - 1].id : null,
   });
   ```

2. **Update Following Feed (Optional)**

   Implement similar cursor logic in `getFollowingVideos()`.

---

### **Part 2: Frontend Infinite Scroll Setup**

#### Step 1: Install Packages

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
```

---

#### Step 2: Set Up QueryClientProvider

In `src/app/layout.js`:

```js
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  {children}
</QueryClientProvider>
```

---

#### Step 3: Update Video Service

In `src/services/videoService.js`:

```js
export const fetchVideos = async ({ pageParam = null }) => {
  const res = await axios.get("/api/videos", {
    params: { cursor: pageParam, limit: 5 },
  });
  return res.data;
};
```

---

#### Step 4: Create Intersection Observer Hook

`src/hooks/useIntersectionObserver.js`:

```js
import { useEffect, useRef } from "react";

const useIntersectionObserver = (onIntersect) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) onIntersect();
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useIntersectionObserver;
```

---

#### Step 5: Update VideoFeed Component

In `src/components/ui/VideoFeed.jsx`:

```js
const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useInfiniteQuery({
  queryKey: ['videos'],
  queryFn: fetchVideos,
  getNextPageParam: (lastPage) => lastPage.nextCursor,
});

const loaderRef = useIntersectionObserver(() => {
  if (hasNextPage && !isFetchingNextPage) fetchNextPage();
});

return (
  <>
    {data?.pages.map(page =>
      page.videos.map(video => <VideoCard key={video.id} {...video} />)
    )}
    <div ref={loaderRef} />
  </>
);
```

---

## Offset vs Cursor Pagination – Summary

| Feature         | Offset-Based       | Cursor-Based (Used)      |
| --------------- | ------------------ | ------------------------ |
| Uses page/limit |  Yes              |  No                     |
| Uses unique ID  |  No               |  Yes                    |
| Performance     | Slower on big data | Fast, consistent results |
| Infinite scroll |  Limited          |  Best suited            |

---

##  Final Checklist

* [✔️] PostgreSQL integrated and working with Prisma
* [✔️] Video CRUD operations working via database
* [✔️] Auth system with JWT and bcrypt
* [✔️] Infinite scroll using `useInfiniteQuery`
* [✔️] Cursor-based pagination implemented
* [✔️] IntersectionObserver used for auto-loading

---

## Resources

* Prisma ORM: [https://www.prisma.io/docs](https://www.prisma.io/docs)
* TanStack Query: [https://tanstack.com/query](https://tanstack.com/query)
* React Hook Form: [https://react-hook-form.com](https://react-hook-form.com)
* Intersection Observer: [https://developer.mozilla.org/en-US/docs/Web/API/Intersection\_Observer\_API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
* PostgreSQL Docs: [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)
* Next.js App Router Docs: [https://nextjs.org/docs/app](https://nextjs.org/docs/app)

---

