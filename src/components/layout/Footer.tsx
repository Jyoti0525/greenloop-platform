
import React from "react";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Mail, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-semibold">
              <Leaf className="h-6 w-6 text-jaivak-500" />
              <span className="text-gradient-primary">JaiVaK</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
              Transforming urban green waste into valuable products through innovative circular economy solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:bg-slate-800 dark:text-slate-400"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:bg-slate-800 dark:text-slate-400"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:bg-slate-800 dark:text-slate-400"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:bg-slate-800 dark:text-slate-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:text-slate-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:text-slate-400">
                  Waste Collection
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:text-slate-400">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:text-slate-400">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:text-slate-400">
                  Franchise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:text-slate-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:text-slate-400">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:text-slate-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:text-slate-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-600 hover:text-jaivak-500 transition-colors dark:text-slate-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-jaivak-500 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  123 Green Street, Eco City, Earth 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-jaivak-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-jaivak-500" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  info@jaivak.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} JaiVaK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
