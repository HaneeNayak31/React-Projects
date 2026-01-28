# The React Quiz ❓

Welcome to **The React Quiz**, an interactive application designed to test your knowledge of React.js. This project showcases the use of `useReducer` for managing complex state transitions and `json-server` to simulate a backend API.

## 🚀 About the Project

The React Quiz is a single-page application where users can take a timed quiz on React topics. It tracks the current score, high score, and remaining time. It demonstrates how to handle different application states (loading, error, ready, active, finished) efficiently within a functional component architecture.

## ✨ Key Features

-   **Interactive Quiz Interface**: Clean and intuitive interface for answering multiple-choice questions.
-   **Timer Functionality**: A countdown timer adds pressure and gamifies the experience; the quiz auto-submits when time runs out.
-   **Progress Tracking**: Visual progress bar showing the user's journey through the quiz and current points.
-   **High Score System**: Persists the highest score achieved in the current session.
-   **State Management**: robust state handling using React's `useReducer` hook to manage the quiz lifecycle (loading -> ready -> active -> finished).

## 🛠️ Tech Stack & Tools

-   **React 19**: Built with the latest React features.
-   **useReducer Hook**: Used for centralized state logic, making the complex state transitions predictable and easy to debug.
-   **JSON Server**: A mock REST API is used to serve the quiz questions, simulating a real backend environment.
-   **CSS**: Styled with custom CSS for a modern and responsive look.

## 🏗️ How It Works

1.  **Data Fetching**: On load, the app fetches questions from a local JSON server.
2.  **State Machine**: The `status` property in the reducer allows the app to switch between views (Loader, Error, StartScreen, Question, FinishedScreen).
3.  **Quiz Logic**:
    -   Selecting an answer triggers a state update to reveal the correct option and update the score.
    -   The timer decreases every second via an effect, dispatching a 'tick' action.
4.  **Completion**: Upon finishing or running out of time, a summary screen displays the final score and high score.

---
*Test your React skills!*
