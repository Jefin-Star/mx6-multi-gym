import { CheckCircle2, Dumbbell, Award, HeartHandshake, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function About() {
  const highlights = [
    {
      icon: Dumbbell,
      title: 'Modern Equipment & Iron',
      desc: 'Top-tier barbells, dumbbells, multi-station cables, and plate-loaded machines engineered for progressive overload and safety.',
    },
    {
      icon: Award,
      title: 'Certified Fitness Mentorship',
      desc: 'Knowledgeable trainers providing precise lifting form corrections, injury mitigation, and customized nutritional plans.',
    },
    {
      icon: HeartHandshake,
      title: 'Supportive & Inclusive Culture',
      desc: 'A positive community where beginners and seasoned lifters push each other without intimidation or ego.',
    },
    {
      icon: Sparkles,
      title: 'Hygienic, Clean Atmosphere',
      desc: 'Clean workout floors, organized dumbbell racks, well-ventilated training halls, and dedicated private ladies hours.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-900/40 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              <img
                src={GYM_INFO.weightTrainingImg}
                alt="Strength Training Floor at MX6 MULTI GYM"
                className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

              {/* Inset Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400 text-neutral-950 flex items-center justify-center font-bold font-display text-xl shrink-0">
                    M6
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                      Mayyil's Fitness Powerhouse
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Unisex and women-only sessions tailored for your lifestyle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Gold Accent border flourish */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-amber-400/40 rounded-tr-2xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
              <span>About MX6 MULTI GYM</span>
              <span className="text-neutral-600">/</span>
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              Where Determination Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                Real Results
              </span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">
              Located in the heart of Mayyil, <strong className="text-white">MX6 MULTI GYM</strong>{' '}
              was established to provide athletes, fitness enthusiasts, and beginners with a world-class
              workout environment without compromising on safety, technique, or community spirit.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether your goal is building dense muscular strength, dropping stubborn body fat,
              recovering from an athletic injury, or enjoying a high-energy morning aerobics class,
              our facility offers the specialized coaching and equipment you need. We take pride
              in providing private morning hours exclusively for women to work out in total comfort.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-amber-400/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <IconComponent className="w-5 h-5 text-amber-400 shrink-0" />
                      <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
