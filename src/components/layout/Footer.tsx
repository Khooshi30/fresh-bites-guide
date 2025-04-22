
import { Link } from "react-router-dom";
import { Mail, Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nutri-green-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img src="/logo.png" alt="NutriNest Logo" className="h-16 bg-white rounded-full p-1" />
            </Link>
            <p className="text-sm opacity-80 mb-4">
              Empowering you to make healthier food choices with delicious, nutritious recipes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-nutri-yellow transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-nutri-yellow transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-nutri-yellow transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-nutri-yellow transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-sm opacity-80 hover:opacity-100 hover:text-nutri-yellow transition">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/nutrition-tips" className="text-sm opacity-80 hover:opacity-100 hover:text-nutri-yellow transition">
                  Nutrition Tips
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-nutri-yellow transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-nutri-yellow transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/recipes?category=breakfast" className="text-sm opacity-80 hover:opacity-100 hover:text-nutri-yellow transition">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=lunch" className="text-sm opacity-80 hover:opacity-100 hover:text-nutri-yellow transition">
                  Lunch
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=dinner" className="text-sm opacity-80 hover:opacity-100 hover:text-nutri-yellow transition">
                  Dinner
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=vegan" className="text-sm opacity-80 hover:opacity-100 hover:text-nutri-yellow transition">
                  Vegan
                </Link>
              </li>
              <li>
                <Link to="/recipes?category=vegetarian" className="text-sm opacity-80 hover:opacity-100 hover:text-nutri-yellow transition">
                  Vegetarian
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm opacity-80 mb-4">
              Subscribe to our newsletter for weekly recipe updates!
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded text-gray-800 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-nutri-yellow hover:bg-nutri-orange text-nutri-green-dark font-medium px-4 py-2 rounded text-sm transition flex items-center justify-center"
              >
                Subscribe <Mail size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm opacity-70">
          <p>
            © {currentYear} NutriNest. All rights reserved. Made with <Heart size={14} className="inline text-nutri-yellow" /> for healthy eating.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
