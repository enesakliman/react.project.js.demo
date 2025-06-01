// src/components/Header.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/budget.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // 1) Nav’ı relative yapıyoruz ki içindeki absolute menü, bu kapsayıcıya göre konumlansın
    <nav className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={Logo}
            alt="MyBudget Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </NavLink>

        {/* Hamburger butonu: yalnızca mobilde göster */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              // Çarpı (kapatma) ikonu
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger ikonu
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Masaüstü Menü Öğeleri */}
        <div className="hidden md:flex space-x-6 items-center text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-accent-dark"
                : "text-accent-light hover:text-accent transition"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-accent-dark"
                : "text-accent-light hover:text-accent transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive
                ? "text-accent-dark"
                : "text-accent-light hover:text-accent transition"
            }
          >
            Transactions
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive
                ? "text-accent-dark"
                : "text-accent-light hover:text-accent transition"
            }
          >
            Reports
          </NavLink>
        </div>
      </div>

      {/* 
        2) Mobil menü: 
           - container’a göre absolute, top-full yapıyoruz ki header’ın hemen altında, overlay gibi açılsın
           - w-full: tam genişlik 
           - bg-white: arka plan rengi
           - shadow-lg-soft: gölge (daha belirgin istersen shadow-lg)
           - rounded-b-xl: sadece alt köşeleri yuvarlak
      */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg-soft rounded-b-xl">
          <div className="flex flex-col space-y-2 px-4 py-4">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-accent-dark"
                  : "text-accent-light hover:text-accent transition"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-accent-dark"
                  : "text-accent-light hover:text-accent transition"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/transactions"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-accent-dark"
                  : "text-accent-light hover:text-accent transition"
              }
            >
              Transactions
            </NavLink>
            <NavLink
              to="/reports"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-accent-dark"
                  : "text-accent-light hover:text-accent transition"
              }
            >
              Reports
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
