### Introduction

The goal of this project was to develop a simplified version of the TikTok web interface using the latest features of Next.js and React. The emphasis was on creating a multi-page, responsive frontend experience with dynamic form handling, modular layouts, and clean UI using Tailwind CSS. While the app does not include backend functionality, it simulates key interactions such as navigation, login/signup, profile viewing, content upload, and video feed rendering. The project adheres closely to modern best practices in frontend development and was structured to match the requirements of Practical 1.

### Main Concepts Applied

1. **App Router and File-Based Routing**  
   - Each page was built using the app directory routing convention (e.g., `app/login/page.jsx`).  
   - Shared layout was implemented through `app/layout.js`, enabling consistent UI structure.

2. **Tailwind CSS for UI Styling**  
   - Tailwind utility classes were used throughout to ensure responsive design and rapid styling.  
   - Layouts such as grid systems, flex containers, and spacing were consistently applied across pages.

3. **Component Structure and Layouts**  
   - Layout components such as `MainLayout` were created for code reuse and structural consistency.  
   - Pages like `profile`, `upload`, and `explore` were modular and semantically organized.

4. **Form Handling with React Hook Form**  
   - Used `react-hook-form` to manage form state with minimal re-renders.  
   - Integrated validations using required fields, regex patterns, `minLength`, and confirm-password logic.

5. **User Feedback and State Management**  
   - Implemented local loading states (e.g., during login/signup submission).  
   - Used conditional rendering to display validation errors and disable buttons during processing.

6. **UI Components with Icons**  
   - `react-icons` was used for consistent and recognizable action buttons (edit, like, comment, etc.).  
   - Components such as `VideoCard`, `VideoFeed`, and the upload interface followed a consistent design system.

---

### What I Learned

Through this project, I developed a deeper understanding of:

- The App Router system in Next.js 13 and its advantages over the traditional Pages Router.  
- Structuring React components using layouts and nested routes effectively.  
- Validating forms with `react-hook-form` and handling complex cases like confirm password and checkbox validation.  
- Creating flexible, reusable UI using Tailwind's utility-first approach.  
- Managing interaction states (such as `isLoading`) for better user experience.

---

### Challenges Faced and How I Overcame Them

1. **Form Validation Complexity**  
   - Issue: Implementing regex-based password and email validation in `react-hook-form` required careful syntax and error handling.  
   - Solution: Verified patterns against known standards and used real-time validation messages with conditional rendering.

2. **Layout Breakpoints in Tailwind**  
   - Issue: Some sections such as the upload form and video feed did not align properly on smaller screens.  
   - Solution: Introduced responsive breakpoints (e.g., `md`, `sm`) and adjusted flex directions to ensure correct stacking.

3. **Managing Component Nesting**  
   - Issue: Passing layout components correctly through `layout.js` while preserving children’s content.  
   - Solution: Ensured proper use of the `MainLayout` wrapper inside `app/layout.js` and placed `children` in the expected position.

4. **Maintaining Clean UI Without External State**  
   - Issue: Without a global state or backend, simulating realistic behavior like login or posting was a challenge.  
   - Solution: Used temporary client-side states and `setTimeout` to mimic submission behavior and feedback.

---

### Conclusion

This project helped reinforce practical skills in full-stack ready frontend development. The combination of Next.js, Tailwind CSS, and `react-hook-form` provided a robust foundation for scalable, interactive applications. The clear separation of components, thoughtful validations, and responsive layouts mirror patterns used in production-grade apps.

Moving forward, this foundation could be expanded with backend integration, persistent authentication, and actual video uploads with preview and playback features.
