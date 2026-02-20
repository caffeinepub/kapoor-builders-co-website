import { Phone, Mail } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: SiFacebook, href: '#', label: 'Facebook' },
    { icon: SiInstagram, href: '#', label: 'Instagram' },
    { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: SiX, href: '#', label: 'X (Twitter)' },
  ];

  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'kapoor-builders';

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <img
                src="/assets/kbc 123.jpeg"
                alt="Kapoor Builders & Co."
                className="h-16 w-auto object-contain"
              />
              <p className="text-white/70 leading-relaxed">
                Building trust and creating landmarks across Delhi NCR for over 24 years.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/70 hover:text-gold transition-colors duration-300 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
              <ul className="space-y-3 text-white/70">
                <li>Residential Construction</li>
                <li>Commercial Projects</li>
                <li>Builder Floors</li>
                <li>Interior Design</li>
                <li>Turnkey Solutions</li>
                <li>Real Estate</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <a
                      href="tel:9891117126"
                      className="text-white/70 hover:text-gold transition-colors duration-300 block"
                    >
                      9891117126
                    </a>
                    <a
                      href="tel:9311737126"
                      className="text-white/70 hover:text-gold transition-colors duration-300 block"
                    >
                      9311737126
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                  <p className="text-white/70">Delhi NCR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
              <p>© {new Date().getFullYear()} Kapoor Builders & Co. All rights reserved.</p>
              <p>
                Built with ❤️ using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold/80 transition-colors duration-300"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
