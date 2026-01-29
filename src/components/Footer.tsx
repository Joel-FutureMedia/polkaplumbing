import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import polkaLogo from '@/assets/polka-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-polka-dark text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <img
              src={polkaLogo}
              alt="Polka Plumbing Logo"
              className="h-20 w-auto mb-6"
            />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              "Maintenance Magic" - Serving Namibia with professional plumbing services
              for over 30 years. Your trusted partner for all plumbing needs.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61572446761477"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm">Follow us on Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-background">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Book Now', href: '#booking' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-background">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Emergency Repairs',
                'General Maintenance',
                'Preventative Maintenance',
                'Leak Solutions',
                'Installation & Repair',
                'Blocked Drains',
              ].map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-background">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-background/70">Phone</p>
                  <a
                    href="tel:0812624341"
                    className="text-background hover:text-secondary transition-colors font-semibold"
                  >
                    081 262 4341
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-background/70">Email</p>
                  <a
                    href="mailto:info@polkaplumbing.com"
                    className="text-background hover:text-secondary transition-colors font-semibold"
                  >
                    info@polkaplumbing.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-background/70">Address</p>
                  <p className="text-background font-semibold">
                    148 Jan Jonker St,
                    <br />
                    Windhoek, Namibia
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-background/70">Hours</p>
                  <p className="text-background font-semibold">
                    24/7, 365 days a year
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {currentYear} Polka Plumbing. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-background/50 text-sm">
                Serving Windhoek, Swakopmund & Walvis Bay
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
