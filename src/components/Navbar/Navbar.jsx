import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/slice/authSlice";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { getCartItems } from "../../redux/slice/cartSilce";

function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    dispatch(logout());
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/products", label: "Products" },
  ];

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm font-medium tracking-wide">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "relative text-cyan-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-cyan-400"
                  : "hover:text-cyan-300 transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Cart Icon (Desktop) */}
          <NavLink
            to="/cart"
            className="relative text-white hover:text-cyan-300 transition hidden md:inline"
          >
            <FiShoppingCart className="text-2xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </NavLink>

          {/* Auth Button */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-cyan-600/20 backdrop-blur-md hover:bg-cyan-600/30 transition border border-cyan-500 hidden md:inline"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/signup"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition backdrop-blur-md hidden md:inline"
            >
              Login
            </NavLink>
          )}

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-white p-2 rounded hover:bg-white/10 transition"
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-cyan-500/10 px-6 py-4">
          <nav className="flex flex-col gap-4 text-white text-sm font-medium tracking-wide">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-cyan-400" : "hover:text-cyan-300 transition"
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Cart Icon (Mobile) */}
            <NavLink
              to="/cart"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-white hover:text-cyan-300 transition"
            >
              <FiShoppingCart className="text-xl" />
              Cart
              {cartItems.length > 0 && (
                <span className="ml-auto bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </NavLink>

            {/* Auth Button (Mobile) */}
            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm font-semibold text-white rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500 transition"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition"
              >
                Login
              </NavLink>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
