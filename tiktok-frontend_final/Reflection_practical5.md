
# Practical 5: Implementing Infinite Scroll with TanStack Query

## Introduction

This practical focused on enhancing the user experience of our TikTok application by implementing **infinite scrolling** using **TanStack Query (React Query)** and **cursor-based pagination**. By combining it with the **Intersection Observer API**, we achieved a smooth, efficient, and scalable feed-loading experience without manual pagination controls.



## Key Concepts Learned

* **Cursor-Based vs. Offset-Based Pagination**: Gained insight into why cursor-based pagination is more efficient for large, dynamic datasets.
* **Infinite Queries with TanStack Query**: Used `useInfiniteQuery` to manage paginated data loading, caching, and error handling.
* **Intersection Observer API**: Learned how to trigger data fetching when an element (like the last video card) enters the viewport.
* **Backend Pagination Logic**: Updated Express controllers to return `nextCursor` and use the "n+1 item" pattern for checking `hasNextPage`.
* **VideoFeed Scroll Integration**: Integrated frontend scrolling behavior with backend pagination seamlessly for both global and following feeds.



## Challenges Faced & Solutions

### 1. Understanding Cursor-Based Pagination Logic

* **Challenge**: Transitioning from offset-based to cursor-based pagination required a different mindset for both backend queries and frontend handling.
* **Solution**: Followed Prisma’s cursor pagination with `take`, `skip`, and `cursor` parameters, and used the extra-item technique to detect the presence of more data.



### 2. Configuring `useInfiniteQuery`

* **Challenge**: Properly configuring TanStack Query's `useInfiniteQuery` to fetch the next page using the returned cursor and maintain cache.
* **Solution**: Carefully structured the `getNextPageParam` logic and destructured response values (`nextCursor`, `hasNextPage`) from the backend correctly.



### 3. Scroll Detection Trigger

* **Challenge**: Accurately detecting when the user reached the bottom of the feed to fetch more data.
* **Solution**: Built a custom `useIntersectionObserver` hook to monitor a sentinel element at the bottom of the feed instead of relying on scroll event listeners.



### 4. Combining Query State and UI

* **Challenge**: Managing loading spinners, disabling repeated fetch calls, and showing empty state messages while fetching in pages.
* **Solution**: Used TanStack Query’s `isFetchingNextPage`, `hasNextPage`, and `fetchNextPage` effectively to update the UI responsively.



## Conclusion

Through this practical, we implemented a robust and responsive infinite scroll system using **modern React tools** and **efficient pagination techniques**. It not only improved the scalability and performance of our app but also deepened our understanding of how real-world applications handle large datasets in user-friendly ways. The seamless scroll experience now mirrors that of professional social media platforms.


