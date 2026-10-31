import {
  Dumbbell,
  Zap,
  Users,
  Flame,
  Activity,
  Utensils,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import aerobicsImage from '../assets/images/gym_aerobics_wellness.jpg';
import { GYM_SERVICES, GYM_INFO } from '../data/gymData';

interface ServicesProps {
  onSelectServiceForRegistration: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForRegistration }: ServicesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-amber-400" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-amber-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
            <span>Specialized Programs</span>
            <span className="text-neutral-600">/</span>
            <span>All Fitness Levels</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Our Elite Services
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            From high-intensity fat burning and heavy strength training to gentle rehabilitation and
            dedicated private ladies sessions, we have tailored training for everyone.
          </p>
        </div>

        {/* Featured Spotlight: Aerobics & Ladies Sessions Special Banner */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/80 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-6 sm:p-10 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Clock className="w-3.5 h-3.5" />
                Special Schedule Feature
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-3">
                Daily Aerobics & Women-Only Training
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                Start your morning with our energetic <strong>45-minute Aerobics workout</strong> from{' '}
                <span className="text-amber-400 font-semibold">6:30 AM to 7:15 AM</span>. We also reserve{' '}
                <span className="text-amber-400 font-semibold">9:00 AM to 12:00 PM</span> exclusively for ladies
                to train in absolute privacy and comfort.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                  <div className="text-xs text-neutral-400 uppercase font-semibold">Aerobics Duration</div>
                  <div className="text-sm font-bold text-white">45 Mins / Morning</div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                  <div className="text-xs text-neutral-400 uppercase font-semibold">Aerobics Timing</div>
                  <div className="text-sm font-bold text-amber-400">6:30 AM – 7:15 AM</div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800">
                  <div className="text-xs text-neutral-400 uppercase font-semibold">Ladies Only Timing</div>
                  <div className="text-sm font-bold text-amber-400">9:00 AM – 12:00 PM</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
              <img
                src={aerobicsImage}
                alt="Aerobics and Group Fitness Studio at MX6 MULTI GYM"
                className="w-full h-full object-cover object-center filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GYM_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:border-amber-400/40 hover:bg-neutral-900 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide mb-2 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {service.timing && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-400/10 text-amber-400 text-xs font-semibold mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.timing}</span>
                  </div>
                )}

                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between mt-auto">
                <span className="text-xs font-medium text-neutral-400">
                  {service.highlight}
                </span>
                <button
                  onClick={() => onSelectServiceForRegistration(service.title)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
