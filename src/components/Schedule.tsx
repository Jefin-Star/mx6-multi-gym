import { useState, useEffect } from 'react';
import { Clock, Calendar, Users, Heart, AlertCircle, CheckCircle } from 'lucide-react';
import { SCHEDULE_SLOTS } from '../data/gymData';

export default function Schedule() {
  const [currentStatus, setCurrentStatus] = useState<{
    isOpen: boolean;
    sessionName: string;
    badgeColor: string;
    subtitle: string;
  }>({
    isOpen: false,
    sessionName: 'Checking gym status...',
    badgeColor: 'text-neutral-400',
    subtitle: '',
  });

  useEffect(() => {
    const evaluateStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday
      const hour = now.getHours();
      const minute = now.getMinutes();
      const timeInMinutes = hour * 60 + minute;

      if (day === 0) {
        // Sunday
        setCurrentStatus({
          isOpen: false,
          sessionName: 'Closed Today (Sunday)',
          badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
          subtitle: 'Rest & Recovery Day. Reopens Monday at 5:30 AM.',
        });
        return;
      }

      // Monday to Saturday
      // 5:30 AM to 9:00 AM (330 to 540)
      if (timeInMinutes >= 330 && timeInMinutes < 540) {
        setCurrentStatus({
          isOpen: true,
          sessionName: 'Open Now · Early Bird Unisex Session',
          badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
          subtitle: 'Current session active until 9:00 AM. (Aerobics: 6:30 AM - 7:15 AM)',
        });
      }
      // 9:00 AM to 12:00 PM (540 to 720)
      else if (timeInMinutes >= 540 && timeInMinutes < 720) {
        setCurrentStatus({
          isOpen: true,
          sessionName: 'Open Now · Ladies Only Session',
          badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
          subtitle: 'Exclusive private women workout hours until 12:00 PM.',
        });
      }
      // 12:00 PM to 4:00 PM (720 to 960)
      else if (timeInMinutes >= 720 && timeInMinutes < 960) {
        setCurrentStatus({
          isOpen: false,
          sessionName: 'Afternoon Break',
          badgeColor: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
          subtitle: 'Gym floor closed for maintenance. Reopens at 4:00 PM for Evening Unisex Session.',
        });
      }
      // 4:00 PM to 10:00 PM (960 to 1320)
      else if (timeInMinutes >= 960 && timeInMinutes < 1320) {
        setCurrentStatus({
          isOpen: true,
          sessionName: 'Open Now · Evening Prime Unisex Session',
          badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
          subtitle: 'High energy workout slot open until 10:00 PM tonight.',
        });
      }
      // Night (before 5:30 AM or after 10:00 PM)
      else {
        setCurrentStatus({
          isOpen: false,
          sessionName: 'Closed for the Night',
          badgeColor: 'text-neutral-400 bg-neutral-800 border-neutral-700',
          subtitle: 'Reopens tomorrow morning at 5:30 AM.',
        });
      }
    };

    evaluateStatus();
    const interval = setInterval(evaluateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="schedule" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
            <span>Operating Hours</span>
            <span className="text-neutral-600">/</span>
            <span>Weekly Schedule</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Gym Timings & Sessions
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Structured workout shifts ensuring comfortable access for everyone, including exclusive
            ladies-only privacy.
          </p>

          {/* Real-Time Live Status Pill */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-2 px-4 py-2.5 rounded-xl border backdrop-blur-md shadow-sm transition-all duration-300">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                {currentStatus.isOpen ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </>
                ) : (
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-500" />
                )}
              </span>
              <span className={`text-xs font-bold uppercase tracking-wider ${currentStatus.badgeColor}`}>
                {currentStatus.sessionName}
              </span>
            </div>
            {currentStatus.subtitle && (
              <>
                <span className="text-neutral-600 hidden sm:inline">·</span>
                <span className="text-xs text-neutral-400">{currentStatus.subtitle}</span>
              </>
            )}
          </div>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {SCHEDULE_SLOTS.map((slot, index) => {
            const isLadies = slot.type === 'ladies';
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl relative overflow-hidden transition-all duration-300 border ${
                  isLadies
                    ? 'bg-gradient-to-b from-amber-950/20 via-neutral-900 to-neutral-900 border-amber-500/40 shadow-xl shadow-amber-500/5'
                    : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                      isLadies
                        ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                        : 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                    }`}
                  >
                    {isLadies ? <Heart className="w-3.5 h-3.5 fill-amber-300" /> : <Users className="w-3.5 h-3.5" />}
                    {isLadies ? 'Ladies Only' : 'Unisex Session'}
                  </span>
                  <span className="text-xs text-neutral-400 font-semibold uppercase">
                    Mon – Sat
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    {slot.timeRange}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                  {slot.name}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {slot.description}
                </p>

                {/* Sub-feature notes */}
                {index === 0 && (
                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-xs text-amber-300 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Includes Aerobics: 6:30 AM – 7:15 AM (45 Mins)</span>
                  </div>
                )}
                {isLadies && (
                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-xs text-amber-300 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Female certified trainers available</span>
                  </div>
                )}
                {index === 2 && (
                  <div className="p-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-300 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    <span>Prime hours with personal coaching slots</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sunday Closed Highlight Box */}
        <div className="rounded-2xl p-6 bg-neutral-900/40 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Sunday: Strictly Closed
              </div>
              <div className="text-xs text-neutral-400">
                Weekly rest, muscular recovery, and comprehensive gym deep cleaning.
              </div>
            </div>
          </div>

          <div className="text-xs text-neutral-300 bg-neutral-950 px-4 py-2 rounded-lg border border-neutral-800">
            Emergency Inquiries: <span className="text-amber-400 font-semibold">+91 96059 55649</span>
          </div>
        </div>
      </div>
    </section>
  );
}
