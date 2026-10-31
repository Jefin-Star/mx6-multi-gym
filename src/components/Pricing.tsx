import { useState } from 'react';
import { Check, Zap, Sparkles, Trophy, ArrowRight, Gift } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { MembershipPlan } from '../types';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'regular' | 'pass' | 'personal'>('all');

  const filteredPlans =
    activeCategory === 'all'
      ? MEMBERSHIP_PLANS
      : MEMBERSHIP_PLANS.filter((p) => p.category === activeCategory);

  return (
    <section id="plans" className="py-20 bg-neutral-900/30 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
            <span>Transparent Pricing</span>
            <span className="text-neutral-600">/</span>
            <span>No Hidden Charges</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Membership Plans
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Choose the plan that fits your ambition. Enjoy free admission fee on 3-month, 4-month, and
            annual packages!
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-8 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl inline-flex max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Plans
            </button>
            <button
              onClick={() => setActiveCategory('regular')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'regular'
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Standard (1-12 Mo)
            </button>
            <button
              onClick={() => setActiveCategory('pass')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'pass'
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Day & Week Passes
            </button>
            <button
              onClick={() => setActiveCategory('personal')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === 'personal'
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Personal Coaching
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {filteredPlans.map((plan: MembershipPlan) => {
            const isHighlighted = plan.popular || plan.bestValue;
            const isFreeAdmission = plan.admissionFee.toLowerCase().includes('free');

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-6 ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 border-2 border-amber-400/90 shadow-2xl shadow-amber-500/10 scale-[1.02]'
                    : 'bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                {/* Top Badge for Popular or Best Value */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-neutral-950 text-[11px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-neutral-950" />
                    Most Popular
                  </div>
                )}
                {plan.bestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-950 text-[11px] font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    Best Annual Value
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      {plan.duration}
                    </span>
                  </div>

                  {/* Pricing Display */}
                  <div className="my-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-amber-400">₹</span>
                      <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white tabular-nums">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium ml-1">
                        / {plan.period}
                      </span>
                    </div>

                    {/* Admission Fee Indicator */}
                    <div className="mt-2">
                      {isFreeAdmission ? (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                          <Gift className="w-3.5 h-3.5" />
                          <span>Admission Fee FREE</span>
                        </div>
                      ) : (
                        <div className="text-xs text-neutral-400 font-medium">
                          {plan.admissionFee}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Join Now Action Button */}
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isHighlighted
                      ? 'bg-amber-400 text-neutral-950 hover:bg-amber-300 shadow-lg shadow-amber-500/20 active:scale-95'
                      : 'bg-neutral-800 text-white hover:bg-neutral-700 hover:text-amber-400 border border-neutral-700 active:scale-95'
                  }`}
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Special Notice regarding Admission fee and timings */}
        <div className="mt-12 p-4 sm:p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                Need a Custom Corporate or College Student Pass?
              </h4>
              <p className="text-xs text-neutral-400">
                Contact our head coach Unais on WhatsApp for group discounts or flexible timings.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('3-month')}
            className="px-5 py-2.5 rounded-lg border border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-neutral-950 transition-colors text-xs font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer"
          >
            Claim 3-Month Offer
          </button>
        </div>
      </div>
    </section>
  );
}
