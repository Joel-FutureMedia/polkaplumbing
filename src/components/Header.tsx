import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import polkaLogo from '@/assets/polka-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Book Now', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center animate-fade-in">
            <div className="bg-white rounded-lg p-1.5 shadow-lg">
              <img
                src={polkaLogo}
                alt="Polka Plumbing Logo"
                className="h-12 md:h-16 lg:h-20 w-auto hover-scale"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-heading font-medium text-sm uppercase tracking-wide transition-colors duration-300 animate-fade-in stagger-${index + 1} ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-background hover:text-secondary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4 animate-fade-in stagger-6">
            <a href="tel:0812624341">
              <Button
                variant="default"
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-heading font-semibold px-6 py-2 rounded-full animate-pulse-glow"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-foreground' : 'text-background'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 flex flex-col gap-4 bg-background/95 backdrop-blur-md rounded-lg mt-4 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:0812624341" className="mt-2">
              <Button className="w-full bg-gradient-primary text-primary-foreground font-heading">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
