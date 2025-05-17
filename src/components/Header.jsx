import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <nav className="fixed grid grid-cols-6 justify-items-center items-center p-4">
      <NavLink to="/" className="col-span-2 flex justify-center">
        <img
          src={Logo}
          alt="MyBudget Logo"
          className="w-2/5 h-24 cursor-pointer"
        />
      </NavLink>

      <div className="col-span-4 flex justify-around items-center text-2xl gap-4 font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "my-text-color" : "my-text-color-2 hover:my-text-color"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "my-text-color" : "my-text-color-2 hover:my-text-color"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
