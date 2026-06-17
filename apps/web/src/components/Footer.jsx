import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl text-primary mb-6">Ô Détente</h3>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6 max-w-xs">
              Un sanctuaire de paix et de bien-être au cœur de la ville. Laissez-nous prendre soin de vous avec élégance et expertise.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-xl mb-6">Navigation</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm text-foreground/70 hover:text-primary transition-colors w-fit link-underline">Accueil</Link>
              <Link to="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors w-fit link-underline">Services</Link>
              <Link to="/shop" className="text-sm text-foreground/70 hover:text-primary transition-colors w-fit link-underline">Boutique</Link>
              <Link to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors w-fit link-underline">À Propos</Link>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-xl mb-6">Support</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors w-fit link-underline">Contact</Link>
              <Link to="/faq" className="text-sm text-foreground/70 hover:text-primary transition-colors w-fit link-underline">FAQ</Link>
              <Link to="#" className="text-sm text-foreground/70 hover:text-primary transition-colors w-fit link-underline">Politique de confidentialité</Link>
              <Link to="#" className="text-sm text-foreground/70 hover:text-primary transition-colors w-fit link-underline">Conditions générales</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6">Contact</h4>
            <div className="flex flex-col space-y-4 text-sm text-foreground/70">
              <p>123 Rue de la Détente<br/>Montréal, QC H2X 1Y5</p>
              <p className="pt-2">
                <a href="tel:5145550123" className="hover:text-primary transition-colors">(514) 555-0123</a>
              </p>
              <p>
                <a href="mailto:contact@odetente.ca" className="hover:text-primary transition-colors">contact@odetente.ca</a>
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-border/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/50 tracking-wide">
            © {new Date().getFullYear()} Ô Détente. Tous droits réservés.
          </p>
          <p className="text-xs text-foreground/50 tracking-wide">
            Design par Hostinger Horizons
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;