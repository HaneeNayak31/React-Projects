// All projects live here. The homepage shows the ones with a `featured`
// number (1, 2, 3 — in that order); the /projects page shows everything.
//
// Fields:
//   name, kind, description      — short text shown on cards
//   highlights                   — a few verified points (featured cards only)
//   technologies                 — tech labels
//   image                        — screenshot in /public (optional)
//   video                        — demo video in /public (optional; loads only on "Play demo")
//   repositoryUrl, liveUrl       — leave empty ("") if not available; empty links are hidden
//   status                       — optional short label, e.g. "In development"
//   architecture                 — shown in place of a screenshot when `image` is empty
//
// To add a screenshot later: put it in public/images/ and set `image: "/images/name.webp"`.

const REACT_REPO = "https://github.com/HaneeNayak31/React-Projects/tree/main";
const JS_REPO = "https://github.com/HaneeNayak31/JavaScript-Projects/tree/main";

export const projects = [
  {
    id: "finpulse",
    featured: 1,
    name: "FinPulse",
    kind: "Full-stack · Paper trading",
    status: "Paper trading — simulated prices, no real funds",
    description:
      "A paper-trading app for practising investment decisions: create portfolios, place simulated buy and sell orders, and watch holdings, P&L and allocation update as quotes change.",
    highlights: [
      "Orders run inside PostgreSQL transactions with row locks, so concurrent sells can't oversell a holding.",
      "Live quotes over WebSockets plus portfolio-scoped Server-Sent Events.",
      "Weighted average cost, unrealised P&L and an allocation chart.",
      "Redis caching with a PostgreSQL fallback; JWT auth, CORS rules, rate limiting and integration tests.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Recharts",
    ],
    // Captured from a local run of the FinPulse code with demo paper-trading data.
    image: "/images/finpulse.webp",
    video: "",
    repositoryUrl: "https://github.com/HaneeNayak31/FinPulse",
    liveUrl: "",
    architecture: {
      title: "FinPulse — request flow",
      rows: [
        ["Client", "React · React Query · Recharts"],
        ["API", "Express · JWT · rate limiter"],
        ["Orders", "PostgreSQL transaction · FOR UPDATE"],
        ["Quotes", "Redis cache → Postgres fallback"],
        ["Realtime", "WebSocket · SSE per portfolio"],
      ],
    },
  },
  {
    id: "perfin",
    featured: 2,
    name: "PerFin",
    subtitle: "Personal Finance Platform",
    kind: "Full-stack · Personal finance",
    status: "In development",
    description:
      "A personal finance platform: a NestJS REST API over PostgreSQL with a Next.js dashboard for accounts, transactions, budgets and spending analytics.",
    highlights: [
      "NestJS API with JWT auth and CRUD modules for accounts, categories, transactions and budgets.",
      "Dashboard, transactions, budgets and analytics pages read from the API, with Recharts charts.",
      "Optional Gemini-based categorisation and chat, with fallbacks.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "Prisma",
      "PostgreSQL",
    ],
    image: "/images/perfin.png",
    video: "",
    repositoryUrl: "https://github.com/HaneeNayak31/perfin",
    liveUrl: "",
    architecture: {
      title: "PerFin — API modules",
      rows: [
        ["/auth", "register · login · me"],
        ["/accounts", "CRUD"],
        ["/categories", "CRUD"],
        ["/transactions", "CRUD · search · CSV"],
        ["/budgets", "CRUD · current month"],
        ["/analytics", "overview · monthly · cashflow"],
      ],
    },
  },
  {
    id: "transaction-dashboard",
    name: "Transaction Dashboard",
    kind: "Vanilla JavaScript",
    description:
      "A transaction table with status filters, sorting, search, pagination and an add-transaction form, persisted in localStorage and split into ES modules.",
    technologies: ["JavaScript", "ES Modules", "REST API", "localStorage"],
    image: "/images/transaction-dashboard.webp",
    video: "/Transaction_Dash.mp4",
    repositoryUrl: `${JS_REPO}/Transaction_Dashboard`,
    liveUrl: "",
  },
  {
    id: "findash",
    featured: 3,
    name: "FinDash",
    subtitle: "Finance Dashboard",
    kind: "Next.js · Finance UI",
    status: "Frontend demo — mock data, payments are simulated",
    description:
      "A banking-style dashboard built with the Next.js App Router to practise fintech interfaces: balance overview, quick actions, a send-money flow and savings goals.",
    highlights: [
      "Balance card with a show / hide toggle and quick actions.",
      "Send money in steps: recipient → amount → confirm → success.",
      "Transaction history and savings “pots” with progress toward each goal.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/images/findash.webp",
    video: "/findash.mp4",
    repositoryUrl: `${REACT_REPO}/payit-finance-dashboard`,
    liveUrl: "",
  },
  {
    id: "worldwise",
    name: "WorldWise",
    kind: "React · Travel tracker",
    description:
      "Click a Leaflet map to log a city with a date and notes, then browse trips by city or country. Nested routes, Context + useReducer and reverse geocoding.",
    technologies: ["React", "React Router", "Context API", "Leaflet"],
    image: "/images/worldwise.webp",
    video: "/worldwise.mp4",
    repositoryUrl: `${REACT_REPO}/worldwise_final`,
    liveUrl: "",
  },
  {
    id: "fast-react-pizza",
    name: "Fast React Pizza",
    kind: "React · Ordering app",
    description:
      "Menu, cart, checkout with optional priority and order tracking. Cart state in Redux Toolkit; data through React Router loaders.",
    technologies: ["React", "Redux Toolkit", "React Router", "Tailwind CSS"],
    image: "/images/fast-react-pizza.webp",
    video: "/fast-react-pizza.mp4",
    repositoryUrl: `${REACT_REPO}/fast-react-pizza`,
    liveUrl: "",
  },
  {
    id: "react-quiz",
    name: "React Quiz",
    kind: "React · useReducer",
    description:
      "A timed quiz whose whole flow is driven by one useReducer, with progress, scoring and a high score.",
    technologies: ["React", "useReducer", "CSS"],
    image: "/images/react-quiz.webp",
    video: "",
    repositoryUrl: `${REACT_REPO}/REACT-QUIZ`,
    liveUrl: "",
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    kind: "JavaScript",
    description:
      "Add expenses with an amount and see the running total update.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "/images/expense-tracker.webp",
    video: "/Expense_Tracker.mp4",
    repositoryUrl: `${JS_REPO}/EXPENSE_TRACKER`,
    liveUrl: "",
  },
  {
    id: "shopping-cart",
    name: "Shopping Cart",
    kind: "JavaScript",
    description:
      "Add products to a cart and keep the total, with the cart saved in localStorage.",
    technologies: ["JavaScript", "localStorage"],
    image: "/images/shopping-cart.webp",
    video: "/ShoppingCart.mp4",
    repositoryUrl: `${JS_REPO}/SHOPPING_CART`,
    liveUrl: "",
  },
  {
    id: "weather-app",
    name: "Weather App",
    kind: "JavaScript · API",
    description:
      "Search a city and show its current temperature and conditions from the OpenWeather API.",
    technologies: ["JavaScript", "OpenWeather API"],
    image: "/images/weather-app.webp",
    video: "/WeatherApp.mp4",
    repositoryUrl: `${JS_REPO}/WEATHER_API`,
    liveUrl: "",
  },
  {
    id: "quiz-app",
    name: "Quiz App",
    kind: "JavaScript",
    description: "A multiple-choice quiz with a timer and score tracking.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "/images/quiz-app.webp",
    video: "/Quiz_usingJS.mp4",
    repositoryUrl: `${JS_REPO}/QUIZ_APP`,
    liveUrl: "",
  },
  {
    id: "todo-app",
    name: "Todo App",
    kind: "JavaScript",
    description: "Add, complete and filter tasks, saved in localStorage.",
    technologies: ["JavaScript", "localStorage"],
    image: "/images/todo-app.webp",
    video: "/TODO.mp4",
    repositoryUrl: `${JS_REPO}/TODO`,
    liveUrl: "",
  },
  {
    id: "portfolio",
    name: "This portfolio",
    kind: "React · Vite",
    description:
      "The site you're on: React, Vite and Tailwind CSS, with data-driven pages and a light/dark theme.",
    technologies: ["React", "Vite", "Tailwind CSS", "Context API"],
    image: "/images/portfolio.webp",
    video: "",
    repositoryUrl: `${REACT_REPO}/Hanee%20Portfolio/portfolio`,
    liveUrl: "https://haneenayakportfolio.netlify.app/",
  },
];

// Featured projects first (in order), then everything else — used by /projects.
export const allProjects = [
  ...projects.filter((p) => p.featured).sort((a, b) => a.featured - b.featured),
  ...projects.filter((p) => !p.featured),
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.featured - b.featured);
