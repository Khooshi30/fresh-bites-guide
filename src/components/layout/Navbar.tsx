
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src="/logo.png" alt="NutriNest Logo" className="h-12" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" isActive={isActive("/")}>
            Home
          </NavLink>
          <NavLink to="/recipes" isActive={isActive("/recipes")}>
            Recipes
          </NavLink>
          <NavLink to="/nutrition-tips" isActive={isActive("/nutrition-tips")}>
            Nutrition Tips
          </NavLink>
          <NavLink to="/about" isActive={isActive("/about")}>
            About Us
          </NavLink>
          <NavLink to="/contact" isActive={isActive("/contact")}>
            Contact
          </NavLink>
          <Button className="bg-nutri-green hover:bg-nutri-green-dark text-white">
            <Link to="/recipes">Explore Recipes</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <MobileNavLink to="/" isActive={isActive("/")} onClick={closeMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/recipes" isActive={isActive("/recipes")} onClick={closeMenu}>
              Recipes
            </MobileNavLink>
            <MobileNavLink
              to="/nutrition-tips"
              isActive={isActive("/nutrition-tips")}
              onClick={closeMenu}
            >
              Nutrition Tips
            </MobileNavLink>
            <MobileNavLink to="/about" isActive={isActive("/about")} onClick={closeMenu}>
              About Us
            </MobileNavLink>
            <MobileNavLink to="/contact" isActive={isActive("/contact")} onClick={closeMenu}>
              Contact
            </MobileNavLink>
            <Button className="bg-nutri-green hover:bg-nutri-green-dark text-white w-full">
              <Link to="/recipes" onClick={closeMenu}>
                Explore Recipes
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
  isActive: boolean;
}

const NavLink = ({ children, to, isActive }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`font-medium transition-colors hover:text-nutri-green ${
        isActive ? "text-nutri-green font-semibold" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ children, to, isActive, onClick }: MobileNavLinkProps) => {
  return (
    <Link
      to={to}
      className={`py-2 font-medium transition-colors hover:text-nutri-green ${
        isActive ? "text-nutri-green font-semibold" : "text-gray-700"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
