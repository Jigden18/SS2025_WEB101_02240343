


# File Upload App with Drag & Drop, Preview, and Progress Tracking

## Objective

The goal of this practical is to develop a responsive file upload interface using modern web development tools and libraries. Key features include drag-and-drop support, file preview, upload progress tracking, and custom styling.

Technologies used:

- Next.js
- React Hook Form
- Axios
- React Dropzone
- Tailwind CSS
- Formidable (for server-side handling)



## Instructions

### Step 1: Initialize the Project

```bash
npx create-next-app file-upload
cd file-upload
````

### Step 2: Install Required Dependencies

```bash
npm install react-hook-form formidable axios react-dropzone
```



### Step 3: Configure Tailwind CSS

Follow the Tailwind CSS official guide for Next.js setup:
[https://tailwindcss.com/docs/guides/nextjs](https://tailwindcss.com/docs/guides/nextjs)

Update `tailwind.config.js`:

```js
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
```



### Step 4: Apply Global Styling

In `src/app/global.css`, define the color variables and component styles:

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

.dropzone {
  transition: all 0.3s ease;
}

.dropzone.active {
  border-color: #3b82f6;
  background-color: #eff6ff;
}

.progress-container {
  height: 20px;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #3b82f6;
  transition: width 0.3s ease;
}
```


### Step 5: Create Upload API Route

In `src/app/api/upload/route.js`, use `formidable` to handle form data and save uploaded files to a local directory. Make sure to disable the default body parser in Next.js.



### Step 6: Implement the Frontend

In `src/app/page.js`:

* Use `react-hook-form` to handle the form.
* Use `react-dropzone` to support drag-and-drop upload.
* Display a list of uploaded files with preview and remove options.
* Track upload progress using `axios` and show a dynamic progress bar.



## Features Implemented

* Drag-and-drop support
* Live upload progress bar
* File preview and removal
* Light and dark mode styling
* File type and size validation



## Folder Structure

```
Practical1_File_Upload/
├── src/
│   └── app/
│       ├── global.css
│       └── page.js
│
├── api/
│   └── app/
│       └── route.js
│
├── public/
│   └── screenshots/
│       ├── dropzone-active.png
│       ├── upload-progress.png
│       └── image-preview.png
├── README.md
├── Reflection.md
├── package.json
└── tailwind.config.js
```



## Test Scenarios

* Upload a single image file
* Upload a large file and observe upload progress
* Drag multiple files and check file previews
* Test file validation with unsupported formats




