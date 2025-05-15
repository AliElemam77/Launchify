import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/slice/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const handleLogout = () => {
    localStorage.removeItem("userId");
    dispatch(logout());
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] shadow-lg border-b border-cyan-500/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-cyan-400 text-xl font-bold tracking-wide"
        >
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-cyan-400 shadow-md"></div>
          Launchify
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm font-medium tracking-wide">
          {["", "about", "services", "products"].map((path, i) => (
            <NavLink
              key={i}
              to={`/${path}`}
              className={({ isActive }) =>
                isActive
                  ? "relative text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-cyan-400"
                  : "hover:text-cyan-300 transition"
              }
            >
              {path === "" ? "Home" : path[0].toUpperCase() + path.slice(1)}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-cyan-600/20 backdrop-blur-md hover:bg-cyan-600/30 transition border border-cyan-500"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/signup"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition backdrop-blur-md"
            >
              Login
            </NavLink>
          )}

          {/* Hamburger for mobile */}
          <button className="md:hidden text-white p-2 rounded hover:bg-white/10 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
