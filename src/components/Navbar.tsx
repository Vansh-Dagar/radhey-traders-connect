import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">RT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-primary tracking-tight">Radhey Traders</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Quality You Can Trust</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={isActive(link.path) ? "default" : "ghost"}
                  className={`relative transition-all ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-gradient-gold hover:shadow-gold transition-all">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant={isActive(link.path) ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      isActive(link.path)
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-gold hover:shadow-gold">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
