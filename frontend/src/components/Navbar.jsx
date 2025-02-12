import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing Icons for Mobile Menu

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-12 lg:px-14 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            onClick={() => navigate("/")}
            src={assets.logo}
            alt="Main Logo"
            className="w-32 md:w-40"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-medium gap-8 items-center">
          {["Home", "About", "Doctors", "Contact"].map((item, index) => (
            <NavLink
              key={index}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className="relative group"
            >
              <li className="py-1 cursor-pointer transition hover:text-violet-600">
                {item}
              </li>
              <hr className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-3/5 bg-violet-600 scale-0 group-hover:scale-100 transition-all duration-300" />
            </NavLink>
          ))}
        </ul>

        {/* Right Section - Profile / Button */}
        <div className="flex items-center gap-4">
          {token ? (
            <div
              className="relative flex items-center gap-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src={assets.profile_pic}
                className="w-8 rounded-full"
                alt="Profile"
              />
              <img src={assets.dropdown_icon} className="w-3" alt="Dropdown" />

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md overflow-hidden w-40 z-20">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:bg-violet-500 hover:text-white px-4 py-2 cursor-pointer"
                  >
                    Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="hover:bg-violet-500 hover:text-white px-4 py-2 cursor-pointer"
                  >
                    Appointments
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:bg-red-500 hover:text-white px-4 py-2 cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-violet-600 rounded-3xl hidden md:block hover:bg-violet-700 text-white px-4 py-2"
            >
              Create Account
            </button>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } md:hidden bg-white shadow-md transition-all`}
      >
        <ul className="flex flex-col items-center py-4 gap-4">
          {["Home", "About", "All Doctors", "Contact"].map((item, index) => (
            <NavLink
              key={index}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className="relative group"
            >
              <li className="py-1 cursor-pointer transition hover:text-violet-600">
                {item}
              </li>
            </NavLink>
          ))}
          {!token && (
            <button
              onClick={() => navigate("/login")}
              className="bg-violet-600 text-white px-4 py-2 rounded-md"
            >
              Create Account
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
