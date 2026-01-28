# Fast React Pizza Co. 🍕

Welcome to **Fast React Pizza Co.**, a modern, responsive web application for ordering delicious pizzas online. This project demonstrates a real-world application of React, focusing on state management, routing, and interacting with remote APIs.

## 🚀 About the Project

Fast React Pizza Co. allows users to browse a pizza menu, add items to their cart, and place an order seamlessly. The application is built to be fast, user-friendly, and interactive, providing features like geolocation for easy address entry and real-time order status checks.

It simulates a real-world scenario where the frontend interacts with a REST API to fetch menu data and submit orders, handling everything from loading states to error management.

## ✨ Key Features

-   **Browse Menu**: View a list of available pizzas with details and pricing, fetched dynamically from an API.
-   **Shopping Cart**: Add, update, and remove pizzas from a global shopping cart.
-   **User Ordering**: Place orders with a name, phone number, and delivery address.
-   **Geolocation Integration**: Automatically fetch and fill your current location address using the browser's Geolocation API.
-   **Order Tracking**: Search for an order by ID to see its current status, estimated delivery time, and items.
-   **Priority Ordering**: Option to prioritize an order for faster delivery (simulated).

## 🛠️ Tech Stack & Tools

This project utilizes a modern frontend stack to ensure performance and maintainability:

-   **React 18**: Built with Functional Components and Hooks.
-   **React Router v6.4+**: Utilizes the latest data loading APIs (`loader`, `action`) for efficient data fetching and form submissions directly within routes.
-   **Redux Toolkit**: Manages global application state (Cart and User data) efficiently.
-   **Tailwind CSS**: Provides a utility-first approach for responsive and aesthetic styling directly in the markup.
-   **Vite**: Next-generation frontend tooling for blazing fast development and build speeds.
-   **Geolocation API**: Browser-native API to fetch user coordinates.

## 🏗️ How It Works

The application is architected around **React Router's Data API**:

1.  **Data Loading**: Instead of using `useEffect` for data fetching, routes specify `loaders`. For example, the Menu page pre-loads pizza data before the component renders.
2.  **Form Actions**: Form submissions (like creating an order) are handled by `actions`. This allows for a unified way to handle data mutations and automatic revalidation of page data.
3.  **State Management**:
    -   **UI State**: Handled locally with `useState`.
    -   **Global State**: The Shopping Cart and User information are managed via **Redux**, making the data accessible across all components.
4.  **Styling**: All styles are applied using **Tailwind CSS** classes, ensuring a consistent design system and mobile responsiveness.

---

*This project is a showcase of modern React development patterns.*
