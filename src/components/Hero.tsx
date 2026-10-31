import { ArrowRight, ChevronRight, ShieldCheck, Flame, Users, Calendar } from 'lucide-react';
import heroBgImage from '../assets/images/hero_gym_workout.jpg';
import { GYM_INFO } from '../data/gymData';

interface HeroProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
}

export default function Hero({ onJoinClick, onViewPlansClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="MX6 MULTI GYM Interior"
          className="w-full h-full object-cover object-center filter brightness-60 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient Overlays for High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 bg-radial-at-c from-amber-500/10 via-transparent to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl">
          {/* Subtle Location & Brand Kicker */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-amber-400 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Mayyil's Premier Fitness Destination</span>
            <span className="text-neutral-500">/</span>
            <span className="text-neutral-300">Kannur</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white leading-none mb-4 text-balance">
            Build Your Strength.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              Transform Your Life.
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl text-pretty">
            Welcome to <strong className="text-white font-semibold">MX6 MULTI GYM</strong>.
            Experience heavy-duty strength training, morning aerobics classes, and private
            women-only sessions guided by dedicated trainers in Mayyil, Kannur.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onJoinClick}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 rounded-lg hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-500/20 active:scale-98 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onViewPlansClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold tracking-wide text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg hover:text-white transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm"
            >
              <span>View Membership Plans</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>

        {/* 4-Item Feature Proof Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-neutral-800/80">
          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/60 backdrop-blur-md">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 text-amber-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wide">Ladies Sessions</div>
              <div className="text-xs text-neutral-400">9:00 AM – 12:00 PM Daily</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/60 backdrop-blur-md">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 text-amber-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wide">Daily Aerobics</div>
              <div className="text-xs text-neutral-400">45 Min morning fat burn</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/60 backdrop-blur-md">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wide">Heavy Iron & Racks</div>
              <div className="text-xs text-neutral-400">Weight & rehab training</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/60 backdrop-blur-md">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 text-amber-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wide">Flexible Plans</div>
              <div className="text-xs text-neutral-400">Day pass ₹75 · Month ₹599</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
