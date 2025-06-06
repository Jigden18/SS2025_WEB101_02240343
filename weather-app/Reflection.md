# Introduction


This project demonstrates the use of core REST concepts—**GET**, **POST**, **PUT**, and **DELETE**—through a simple weather and location-saving web application.

- **GET** was implemented to fetch real-time weather data from the OpenWeatherMap API based on user-input city names.
- **POST** was used to simulate adding new saved locations using the JSONPlaceholder API.
- **PUT** allowed the editing of saved locations through a modal form, sending updated data via the same placeholder API.
- **DELETE** simulated the removal of a saved location from the list and sent a DELETE request to the fake API.

The app uses a **tab-based interface** for user navigation between different request types and features an **inline modal editor** for PUT operations. All asynchronous operations were handled using `fetch()` and `async/await`, and the UI was dynamically updated based on API responses.





### What I Learned

- Practical implementation of **CRUD operations** with real and simulated REST APIs.
- How to integrate and fetch data from external APIs using **vanilla JavaScript**.
- Structuring a dynamic **single-page interface** using DOM manipulation, tab switching, and modal dialogs.
- Managing **asynchronous programming** in JavaScript with `async/await`.
- Debugging and interpreting JSON responses from different API sources.

### Challenges Faced

1. **CORS Issues**  
   Initially, I encountered Cross-Origin Resource Sharing (CORS) errors while trying to fetch weather data.  
   **Solution**: Ensured that HTTPS was used in all API endpoint URLs and used correct headers.

2. **Empty API Responses or 404 Errors**  
   When inputting incorrect city names or missing parameters, I received undefined or empty responses.  
   **Solution**: Added error handling using `try/catch` blocks and `response.ok` checks to display error messages to the user.

3. **Simulated PUT/DELETE Not Reflecting on Server**  
   Since JSONPlaceholder does not persist changes, the UI and server could go out of sync.  
   **Solution**: Managed all updates locally in JavaScript and re-rendered the saved location list to simulate persistence.

4. **Handling User Input Validation**  
   It was possible to send empty or invalid values.  
   **Solution**: Implemented input validation checks before sending data to the API.

Through these challenges, I gained confidence working with REST APIs, improving error handling, and building an interactive frontend interface using pure HTML, CSS, and JavaScript. This project reinforced my understanding of frontend-backend communication and dynamic UI state management.
