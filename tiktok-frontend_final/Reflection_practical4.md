

# Practical 4: Connecting TikTok Frontend to Backend


## Introduction

In this practical, we connected the frontend built with **Next.js** to an **Express.js backend** to create a fully functional TikTok clone. The goal was to implement real-world features such as user authentication, video display, and social interactions (likes, comments, following, personalized feeds). This allowed us to transition from using mock data to dynamic API-driven content.



## Key Concepts Learned

* **Axios API Configuration**: Setting up a reusable Axios instance to handle authenticated API requests.
* **JWT Authentication**: Managing user sessions using JWT tokens and React Context for global state management.
* **Authentication UI**: Building modal-based login and registration forms with error handling.
* **Dynamic Video Feed**: Fetching and displaying real videos from the backend, replacing static data.
* **Social Interactions**: Implementing like/unlike, comment, follow/unfollow, and personalized video feeds.
* **Modular Services**: Creating `videoService` and `userService` to organize API logic cleanly.
* **Dynamic Routing**: Using Next.js dynamic routes to show user profiles and personalized pages.



## Challenges Faced & Solutions

### 1. Managing Authentication Flow

* **Challenge**: Syncing frontend state with backend tokens, especially after login/logout.
* **Solution**: Used React Context to manage auth state and Axios interceptors to automatically attach JWT tokens to requests.

### 2. Updating UI with Real-Time Data

* **Challenge**: Difficulty in reflecting video interactions like likes and follows instantly in the UI.
* **Solution**: Separated API logic into services and used `useEffect` with state updates for real-time rendering.

### 3. Handling Follow/Unfollow Edge Cases

* **Challenge**: Race conditions and incorrect UI updates when rapidly toggling follow status.
* **Solution**: Ensured API calls return success before updating UI, and handled errors gracefully.

### 4. Dynamic Routing with Parameters

* **Challenge**: Errors in loading user profiles due to delayed or missing route parameters.
* **Solution**: Added conditional rendering and loading states to handle data fetching delays.



## Conclusion

This practical taught us how to bridge the gap between a frontend UI and backend APIs effectively. By implementing real-time interactions, authentication, and dynamic routing, we moved closer to building a production-ready social platform. It strengthened our skills in full-stack development, state management, and user-centric design.


