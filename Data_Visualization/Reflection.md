#  Data Visualization Dashboard


### Key Concepts Learned

1. **Charting Libraries in React**  
   We explored and implemented two major charting libraries:
   - **Recharts**: Ideal for declarative chart components.
   - **react-chartjs-2**: A wrapper for Chart.js offering deep customization and interactivity.

2. **Component-Based Visualization**  
   Each chart was modularized into its own component, following the React principle of reusable and manageable code.

3. **Chart Types Implemented**
   - Line Chart (Monthly Sales)
   - Pie Chart (Product Categories)
   - Bar Chart (Customer Acquisition)
   - Area Chart (Weekly Visitors)

4. **Responsiveness & Interactivity**
   Charts were made responsive and interactive using configuration options such as `responsive: true`, custom tooltips, and legends.

5. **Data Handling**  
   We practiced using mock and static data to simulate real-world data visualization use cases.

6. **Integration into a Dashboard**  
   All individual chart components were integrated into `App.jsx`, forming a unified dashboard layout.

---

##  Reflection

### What We Learned

- How to integrate multiple chart types in a single React application.
- The syntax differences and strengths of Recharts vs. Chart.js (via react-chartjs-2).
- The importance of keeping charts responsive and readable on all screen sizes.
- How to structure a component-based dashboard application.

### Challenges Faced

1. **Vite Command Not Recognized**
   - **Problem**: Running `npm run dev` gave the error `'vite' is not recognized as an internal or external command`.
   - **Solution**: We installed Vite locally using `npm install --save-dev vite`.

2. **Confusion Between Charting Libraries**
   - **Problem**: Mixing up the syntax between Recharts and Chart.js when writing chart configs.
   - **Solution**: Carefully referenced official documentation and kept code modular per library.

3. **Chart Responsiveness Issues**
   - **Problem**: Some charts were not resizing properly on different devices.
   - **Solution**: Used `responsive: true`, `maintainAspectRatio: false`, and styled container divs with relative height.

4. **Missing Data or Incorrect Parsing**
   - **Problem**: Some charts would not render due to data format mismatches.
   - **Solution**: Double-checked dataset structure and ensured `labels` and `datasets` matched required formats.

---

## Additional Insights

- Visualizing data in a React application enhances the user experience and improves data comprehension.
- Choosing the right chart type is key to effective storytelling with data.
- Proper component abstraction makes the project scalable and easier to maintain.

---

## Conclusion

This practical was highly effective in building our confidence with React and modern charting libraries. By overcoming setup and configuration issues, we gained a solid understanding of how to build a real-world dashboard application. The hands-on approach solidified our grasp of responsive design, component structuring, and data-driven visual presentation.
