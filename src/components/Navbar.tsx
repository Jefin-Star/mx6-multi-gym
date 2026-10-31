import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Plans', href: '#plans' },
    { label: 'Timings', href: '#schedule' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Official Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-amber-400/40 bg-neutral-900 flex items-center justify-center p-0.5 shadow-sm group-hover:border-amber-400 transition-colors">
              <img
                src={GYM_INFO.logoUrl}
                alt="MX6 MULTI GYM Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-amber-400 transition-colors whitespace-nowrap">
                MX6 <span className="text-amber-400">MULTI GYM</span>
              </span>
              <span className="text-[10px] tracking-widest text-neutral-400 uppercase -mt-1 font-medium">
                Mayyil · Kannur
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-Line Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-amber-400 transition-colors tracking-wide cursor-pointer whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-amber-400/60"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick WhatsApp Contact */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Hello MX6 MULTI GYM, I would like to inquire about membership admission.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2.5 rounded-lg border border-neutral-800 bg-neutral-900/80 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-neutral-800 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={onJoinClick}
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 rounded-lg hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onJoinClick}
              className="px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold text-neutral-950 bg-amber-400 rounded-md active:scale-95 transition-all whitespace-nowrap"
            >
              Join Now
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 px-5 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 text-base font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900/60 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
            <a
              href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Hello MX6 MULTI GYM, I would like to inquire about joining.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-neutral-800 bg-neutral-900 text-emerald-400 text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp: {GYM_INFO.phone}
            </a>
            <a
              href={`tel:${GYM_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-200 text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call Gym: {GYM_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
