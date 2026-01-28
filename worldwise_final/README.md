# WorldWise 🌍

**WorldWise** is a travel tracking application that helps you keep a record of your adventures across the globe. It allows users to pinpoint cities they have visited on an interactive map and store details about their trips.

## 🚀 About the Project

WorldWise is designed for travelers who want to visualize their journey. By clicking on a map, users can add new cities to their list, automatically fetching location data. The app provides a dashboard to view the list of visited cities and countries, simulating a personalized travel log.

## ✨ Key Features

-   **Interactive Map**: Navigate the world using a Leaflet-powered map. Click anywhere to add a new travel memory.
-   **City & Country Tracking**: Maintain a list of all the places you've visited. The app automatically extracts the country from the city data.
-   **Trip Notes**: Add custom notes and dates for each visit.
-   **Authentication**: Simulated login flow to protect user data (demonstrating protected routes).
-   **Geolocation**: Use your current position to quickly add the city you are currently in.
-   **Lazy Loading**: Optimized performance using React's `lazy` and `Suspense` for code splitting.

## 🛠️ Tech Stack & Tools

-   **React 18**: Built with functional components and hooks.
-   **React Router v6**: Implements nested routing for the application layout and creating a SPA feel.
-   **Leaflet & React-Leaflet**: Open-source JavaScript library for mobile-friendly interactive maps.
-   **Context API**: Manages global state for Cities and Authentication.
-   **CSS Modules**: Scoped styling to avoid class name conflicts.
-   **Vite**: Frontend build tool for fast development.
-   **JSON Server**: Mocks a REST API to store and retrieve travel data.

## 🏗️ How It Works

1.  **Routing**: The app uses `react-router-dom` to handle navigation. The `/app` route is protected, requiring the user to "login" first.
2.  **Context**:
    -   `CitiesContext`: Fetches and manages the list of visited cities from the fake API.
    -   `AuthContext`: Handles fake user authentication state.
3.  **Map Interaction**: Clicking on the map captures the coordinates (lat, lng), which are then used in the form to fetch city details via reverse geocoding (external API interaction).
4.  **Optimizations**: Routes are lazy-loaded to ensure the initial bundle size is kept small.

---
*Keep track of your adventures.*
