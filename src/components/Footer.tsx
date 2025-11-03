import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">RT</span>
              </div>
              <span className="font-bold text-xl">Radhey Traders</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Delivering quality construction materials you can trust. Your partner in building excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Mica Sheets</li>
              <li className="text-primary-foreground/80">Masking Tape</li>
              <li className="text-primary-foreground/80">Edge Band Tape</li>
              <li className="text-primary-foreground/80">Plyboard</li>
              <li className="text-primary-foreground/80">Panels</li>
              <li className="text-primary-foreground/80">Louvers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  123 Trading Street, Business District, City 12345
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="mailto:info@radheytraders.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@radheytraders.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Radhey Traders. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
