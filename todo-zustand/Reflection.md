# State Management in React using Zustand

### State Management

In this project, I explored the concept of **state management** in React by building a Todo List application using **Zustand**. State management is crucial in React applications to track and control the data that drives the UI.

Instead of using prop drilling or the Context API, I used Zustand, a small and scalable state management library. Zustand allows for the creation of a central store that holds both the application's state and the actions that update it. It provides a simpler and more efficient way of managing state compared to other methods.

Zustand also supports persistence, which was used in this project to store todos in localStorage so that they are not lost on page reloads.

---

## Reflection

Through this project, I learned:

- The importance of **centralized state management** when dealing with multiple components.
- How Zustand simplifies state handling by avoiding the need to pass props down multiple levels.
- That Zustand is minimal but powerful, with features like middleware and persistence that are easy to integrate.
- The difference between local component state and global shared state.

---

## Challenges Faced

- Initially, I found it confusing how Zustand replaces the need for useState and useContext, but after implementing the store, it became much clearer.
- Setting up persistence required an understanding of how middleware works in Zustand, which I overcame by referring to the official documentation and examples.


Overall, this project deepened my understanding of modern state management in React. Zustand proved to be a lightweight yet robust tool that made the process of managing and sharing state across components much cleaner and more efficient.
