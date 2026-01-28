# Hanee Portfolio 🎨

A modern, responsive personal portfolio website built to showcase skills, projects, and contact information. This project features a clean design with a dark/light theme toggle and smooth navigation.

## 🚀 About the Project

This portfolio serves as a central hub for professional identity, allowing for the display of work experience, technical skills, and completed projects. It is designed with a focus on user experience, offering a seamless and interactive browsing flow across different devices.

## ✨ Key Features

-   **Dynamic Theme Switcher**: Toggle between Dark and Light modes with a global theme context, persisting user preference.
-   **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop views using Tailwind CSS.
-   **Interactive Sections**:
    -   **Hero**: Introduction and resume download.
    -   **Skills**: Visual representation of technical expertise.
    -   **Projects**: Showcase of recent work with descriptions and links.
    -   **Contact**: Simple contact area.
-   **Component-Based Architecture**: Modular design with reusable components for Navbar, Footer, and content sections.

## 🛠️ Tech Stack

This project is built with the latest modern web technologies:

-   **React 19**: Utilizing the newest features of React for robust component management.
-   **Vite**: Extremely fast build tool and development server.
-   **Tailwind CSS v4**: Utility-first CSS framework for rapid and highly customizable styling.
-   **Context API**: Manage global state for theming across the application.

## 🏗️ How It Works

The application is structured as a Single Page Application (SPA):
1.  **Theme Management**: A `ThemeContextProvider` wraps the application, supplying the current theme (light/dark) to all components. The theme state is applied directly to the HTML root element.
2.  **Section Navigation**: Navigation allows users to jump to different parts of the page (Hero, Skills, Projects, etc.).
3.  **Data Handling**: Component data (like project lists or skills) is closely co-located or managed via props/utility files for easy updates.

---
*Built with passion and code.*
