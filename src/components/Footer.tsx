import { MessageCircle, Mail, Instagram, MapPin, ArrowUp, Phone } from 'lucide-react';
import logoImage from '../assets/images/mx6_logo.jpg';
import { GYM_INFO } from '../data/gymData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-850 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-400/40 bg-neutral-900 p-0.5 shadow-md">
                <img
                  src={logoImage}
                  alt="MX6 MULTI GYM Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                  MX6 <span className="text-amber-400">MULTI GYM</span>
                </span>
                <span className="text-xs text-neutral-400 block tracking-wider uppercase font-medium">
                  Mayyil · Kannur, Kerala
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Build Your Strength. Transform Your Life. Mayyil's premier strength training facility,
              daily morning aerobics classes, and private ladies sessions.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${GYM_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 hover:border-emerald-500/50 hover:bg-neutral-850 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-pink-400 hover:border-pink-500/50 hover:bg-neutral-850 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${GYM_INFO.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 hover:border-amber-500/50 hover:bg-neutral-850 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${GYM_INFO.phone.replace(/\s+/g, '')}`}
                aria-label="Phone"
                className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:bg-neutral-850 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Our Gym
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services & Aerobics
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">
                  Timings & Schedule
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  BMI Calculator
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Fitness Programs
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>Weight Training & Powerlifting</li>
              <li>Aerobics (Daily 6:30 AM - 7:15 AM)</li>
              <li>Ladies Exclusive Session (9 AM - 12 PM)</li>
              <li>Injury Rehabilitation & Mobility</li>
              <li>Customized Kerala Diet Plans</li>
              <li>1-on-1 Personal Training</li>
            </ul>
          </div>

          {/* Operating Hours & Direct Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Visiting Hours
            </h4>
            <div className="text-xs space-y-2 text-neutral-400">
              <div>
                <strong className="text-white block">Monday – Saturday:</strong>
                <p>Morning: 5:30 AM – 9:00 AM (Unisex)</p>
                <p className="text-amber-300">Ladies Only: 9:00 AM – 12:00 PM</p>
                <p>Evening: 4:00 PM – 10:00 PM (Unisex)</p>
              </div>
              <div className="pt-1">
                <strong className="text-rose-400 block">Sunday: Closed</strong>
                <p className="text-neutral-500">Rest & Recovery</p>
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>MX6 GYM, Mayyil, Kannur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} MX6 MULTI GYM Mayyil. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Powered by MX6 Fitness Team</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold cursor-pointer transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
