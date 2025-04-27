import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/out-logo.png";
import { Link, useLocation } from "react-router-dom";

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Products", link: "/products", hasDropdown: true },
    { name: "Verticals", link: "/verticals", hasDropdown: true },
    { name: "Supporting Pages", link: "/supporting-pages", hasDropdown: true },
  ];

  // Detect Scroll Direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const location = useLocation(); // 👈 Get the current URL path

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between lg:justify-evenly">
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop nav items */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.link; // 👈 Check if this item is active

            return (
              <div key={item.name} className="relative group">
                <Link
                  to={item.link}
                  className={`text-sm flex items-center space-x-1 transition-all ${
                    isActive
                      ? "text-white bg-blue-500 px-3 py-2 rounded-md"
                      : "text-gray-800 hover:text-blue-600"
                  }`}>
                  <span>{item.name}</span>
                  {item.hasDropdown && <span className="text-xs">▼</span>}
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-9 left-0 bg-white shadow-md rounded-md hidden group-hover:block min-w-[150px] z-50">
                    <div className="py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer">
                      Dropdown Item 1
                    </div>
                    <div className="py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer">
                      Dropdown Item 2
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Contact button */}
        <div className="hidden lg:block">
          <button
            onClick={() => setActive("Contact Us")}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            <Link to="/Contectus">Contact Us</Link>
          </button>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 order-last lg:order-first">
          <img src={logo} alt="Logo" className="h-7 ml-4 lg:ml-5" />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => {
                setActive(item.name);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-md ${
                active === item.name
                  ? "bg-blue-500 text-white"
                  : "text-gray-800 hover:bg-blue-100"
              }`}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Head;
