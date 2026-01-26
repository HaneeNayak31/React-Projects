# FinDash - Personal Finance Dashboard

FinDash is a premium personal finance dashboard application designed to showcase modern web development skills. It focuses on high-quality user experiences, smooth animations, and a sophisticated aesthetic.

## Features

- **Premium UI**: Dark mode first design with glassmorphism and neon accents.
- **Interactive Dashboard**: Privacy toggle for balance, quick actions, and scrollable lists.
- **Send Money Flow**: A multi-step, gesture-based payment experience (Recipient -> Amount -> Hold to Pay).
- **Gamified Savings**: Visual progress tracking for savings pots with confetti celebrations.
- **Robustness**: Error boundaries, loading skeletons, and fully responsive layout (Mobile/Tablet/Desktop).

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Architectural Decisions

- **Client Components**: utilized extensively for `framer-motion` animations and interactive state (Send Money flow).
- **Mock Data**: Used local mock data (`src/lib/mock-data.ts`) to simulate API responses and ensure consistent testing data.
- **Tailwind Config**: Extended with custom colors and "glass" utilities in `globals.css` for a consistent design system.
