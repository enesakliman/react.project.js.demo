# MyBudget App

A simple budget management web application built with React, React Router, TailwindCSS, and Recharts. MyBudget lets you track income and expenses, view your current balance, and see graphical reports of your financial data over time.

---

## Features

- **Dashboard**: View current balance and access charts at a glance
- **Transactions**: Add, list, and delete individual income/expense entries
- **Reports**:
  - **Pie Chart** showing total income vs. total expenses
  - **Line Chart** illustrating income and expense trends over time
- **Global State Management** via React Context and `useReducer`
- **LocalStorage Persistence** to keep data after page reloads
- **Responsive Design** using TailwindCSS
- **Modal Form** for adding new transactions

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/enesakliman/react.project.js.demo.git
   cd react.project.js.demo
   ```
2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```
3. **Start the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
4. **Open http://localhost:5173 in your browser to view the app.**

## Technologies

- React (v18+)
- React Router (v6)
- TailwindCSS (with @tailwindcss/vite plugin)
- Recharts (for interactive charts)
- Vite (fast build tool)
- LocalStorage (for data persistence)
