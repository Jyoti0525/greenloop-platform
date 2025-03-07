
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CustomButton } from "../ui/CustomButton";
import { Menu, X, Leaf, User, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const checkAuthStatus = () => {
      const userString = localStorage.getItem("jaivak_user");
      setIsLoggedIn(!!userString);
    };

    window.addEventListener("scroll", handleScroll);
    checkAuthStatus();

    // Setup a listener for auth changes
    window.addEventListener("storage", checkAuthStatus);

    // Close mobile menu when changing routes
    setIsMenuOpen(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", checkAuthStatus);
    };
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthAction = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/auth");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Waste Collection", path: "/collection" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Community", path: "/community" },
    { name: "Franchise", path: "/franchise" },
  ];

  // Determine if link is active
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-slate-900/90"
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
              className={`text-sm font-medium transition-colors relative ${
                isActive(link.path) 
                  ? "text-jaivak-500 dark:text-jaivak-400"
                  : "text-slate-700 hover:text-jaivak-500 dark:text-slate-200 dark:hover:text-jaivak-400"
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.span 
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-jaivak-500 dark:bg-jaivak-400"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <CustomButton 
                  variant="gradient" 
                  size="sm"
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <User className="h-4 w-4" />
                  My Profile
                  <ChevronDown className="h-4 w-4" />
                </CustomButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/profile/orders")}>
                  Orders History
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/profile/collections")}>
                  Waste Collections
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  localStorage.removeItem("jaivak_user");
                  window.dispatchEvent(new Event("storage"));
                  navigate("/");
                }}>
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <CustomButton 
                variant="outline" 
                size="sm"
                onClick={() => navigate("/auth")}
                className="hover:border-jaivak-500 hover:text-jaivak-500"
              >
                Log In
              </CustomButton>
              <CustomButton 
                variant="gradient" 
                size="sm"
                onClick={() => navigate("/auth")}
                className="hover:shadow-md hover:shadow-jaivak-500/20"
              >
                Sign Up
              </CustomButton>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-700 hover:text-jaivak-500 dark:text-slate-200 dark:hover:text-jaivak-400 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-md py-4 px-6 md:hidden"
            >
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium ${
                      isActive(link.path)
                        ? "text-jaivak-500 dark:text-jaivak-400"
                        : "text-slate-700 hover:text-jaivak-500 dark:text-slate-200 dark:hover:text-jaivak-400"
                    } transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {isLoggedIn ? (
                    <CustomButton 
                      variant="gradient" 
                      size="sm"
                      onClick={() => {
                        navigate("/profile");
                        setIsMenuOpen(false);
                      }}
                    >
                      <User className="mr-2 h-4 w-4" />
                      My Profile
                    </CustomButton>
                  ) : (
                    <>
                      <CustomButton 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          navigate("/auth");
                          setIsMenuOpen(false);
                        }}
                      >
                        Log In
                      </CustomButton>
                      <CustomButton 
                        variant="gradient" 
                        size="sm"
                        onClick={() => {
                          navigate("/auth");
                          setIsMenuOpen(false);
                        }}
                      >
                        Sign Up
                      </CustomButton>
                    </>
                  )}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
