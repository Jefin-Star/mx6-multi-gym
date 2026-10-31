import { MessageCircle, Mail, Instagram, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-900/30 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
            <span>Get In Touch</span>
            <span className="text-neutral-600">/</span>
            <span>Visit Us In Mayyil</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Contact MX6 MULTI GYM
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Have questions about admission fees, training slots, or personal coaching? Reach out
            directly via WhatsApp, phone, email, or visit our facility.
          </p>
        </div>

        {/* 4 Direct Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
              'Hello MX6 MULTI GYM, I would like to inquire about gym membership and facilities.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-neutral-950/70 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-900/80 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                WhatsApp Chat
              </div>
              <div className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                {GYM_INFO.phoneFormatted}
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Fastest response for fee inquiries, admission confirmation, and session bookings.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-emerald-400 font-bold uppercase tracking-wider">
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${GYM_INFO.email}`}
            className="p-6 rounded-2xl bg-neutral-950/70 border border-neutral-800 hover:border-amber-400/50 hover:bg-neutral-900/80 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                Official Email
              </div>
              <div className="text-sm font-bold text-white break-all group-hover:text-amber-400 transition-colors">
                {GYM_INFO.email}
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Send formal proposals, personal training queries, or sponsorship inquiries.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-amber-400 font-bold uppercase tracking-wider">
              <span>Send Email</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href={GYM_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-neutral-950/70 border border-neutral-800 hover:border-pink-500/50 hover:bg-neutral-900/80 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                Instagram Page
              </div>
              <div className="text-base font-bold text-white group-hover:text-pink-400 transition-colors">
                {GYM_INFO.instagramHandle}
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Follow member workouts, transformation photos, and gym announcement reels.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-pink-400 font-bold uppercase tracking-wider">
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Phone Call Card */}
          <a
            href={`tel:${GYM_INFO.phone.replace(/\s+/g, '')}`}
            className="p-6 rounded-2xl bg-neutral-950/70 border border-neutral-800 hover:border-amber-400/50 hover:bg-neutral-900/80 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                Direct Call
              </div>
              <div className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                {GYM_INFO.phoneFormatted}
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                Speak directly with head instructor Unais during workout hours.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-amber-400 font-bold uppercase tracking-wider">
              <span>Call Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Location & Embedded Google Map Card */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Location Info */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Gym Location</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-4">
                  Find MX6 GYM In Mayyil
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  Conveniently situated in Mayyil, Kannur with accessible parking for two-wheelers and
                  cars, close to town transit.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-neutral-400 uppercase font-semibold">Address</div>
                      <div className="text-sm font-medium text-white">{GYM_INFO.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-neutral-400 uppercase font-semibold">Operating Shifts</div>
                      <div className="text-xs text-neutral-300 space-y-0.5 mt-0.5">
                        <div>Morning: 5:30 AM – 9:00 AM (Unisex)</div>
                        <div className="text-amber-300 font-medium">Mid-day: 9:00 AM – 12:00 PM (Ladies Only)</div>
                        <div>Evening: 4:00 PM – 10:00 PM (Unisex)</div>
                        <div className="text-rose-400">Sunday: Closed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/d21527cd2e99dd52"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-400 hover:text-amber-300 font-bold text-xs uppercase tracking-wider border border-neutral-700 transition-colors"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Embedded Google Map */}
            <div className="lg:col-span-7 h-[380px] sm:h-[450px] relative bg-neutral-900">
              <iframe
                src={GYM_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="MX6 GYM Mayyil Google Maps Location"
                className="w-full h-full filter invert-[0.9] hue-rotate-180 contrast-125"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
