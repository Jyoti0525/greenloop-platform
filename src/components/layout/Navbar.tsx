
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../ui/CustomButton";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Waste Collection", path: "/collection" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Community", path: "/community" },
    { name: "Franchise", path: "/franchise" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-900/80"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-xl font-semibold"
        >
          <Leaf className="h-6 w-6 text-jaivak-500" />
          <span className="text-gradient-primary">JaiVaK</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-slate-700 hover:text-jaivak-500 transition-colors dark:text-slate-200 dark:hover:text-jaivak-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <CustomButton variant="outline" size="sm">
            Log In
          </CustomButton>
          <CustomButton variant="gradient" size="sm">
            Sign Up
          </CustomButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-700 hover:text-jaivak-500 dark:text-slate-200 dark:hover:text-jaivak-400"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-md py-4 px-6 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-slate-700 hover:text-jaivak-500 transition-colors dark:text-slate-200 dark:hover:text-jaivak-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <CustomButton variant="outline" size="sm">
                  Log In
                </CustomButton>
                <CustomButton variant="gradient" size="sm">
                  Sign Up
                </CustomButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
