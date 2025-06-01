import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <h1 className="text-3xl font-bold text-primary mb-6">About MyBudget</h1>

      <div className="bg-white rounded-xl shadow-lg-soft max-w-3xl w-full p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          Project Overview
        </h2>
        <p className="text-gray-600 leading-relaxed">
          MyBudget is a simple, single‐page application built with React,
          TailwindCSS, and Recharts to help you easily track your income and
          expenses. With this app, you can add new transactions, remove or
          update existing ones, and immediately see your current balance and
          graphical breakdowns of your finances over time.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <span className="font-medium">React:</span> A JavaScript library for
            building user interfaces.
          </li>
          <li>
            <span className="font-medium">React Router:</span> Handles
            client‐side routing between “Dashboard,” “About,” “Transactions,”
            and “Reports” pages.
          </li>
          <li>
            <span className="font-medium">TailwindCSS:</span> A utility‐first
            CSS framework used for rapid styling and consistent theming.
          </li>
          <li>
            <span className="font-medium">Recharts:</span> A charting library
            for rendering interactive, responsive graphs and data
            visualizations.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-700">
          About the Developer
        </h2>
        <p className="text-gray-600 leading-relaxed">
          This project was created as a demo budget management tool to help
          users visually understand their spending and earnings. It is
          open‐source and available on GitHub—feel free to open an issue or
          submit a pull request if you have feedback, suggestions, or
          contributions.
        </p>

        <div className="pt-6 border-t border-gray-200">
          <a
            href="https://github.com/enesakliman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark font-medium transition"
          >
            View My GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
