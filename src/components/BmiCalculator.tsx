import { useState } from 'react';
import { Calculator, ArrowRight, Activity, Sparkles } from 'lucide-react';

interface BmiCalculatorProps {
  onApplyGoal: (goalText: string) => void;
}

export default function BmiCalculator({ onApplyGoal }: BmiCalculatorProps) {
  const [height, setHeight] = useState<string>('172');
  const [weight, setWeight] = useState<string>('70');
  const [bmiResult, setBmiResult] = useState<{
    bmi: number;
    category: string;
    advice: string;
    suggestedPlan: string;
    color: string;
  } | null>(null);

  const calculateBmi = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) return;

    const heightInMeters = h / 100;
    const bmi = parseFloat((w / (heightInMeters * heightInMeters)).toFixed(1));

    let category = '';
    let advice = '';
    let suggestedPlan = '';
    let color = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      advice =
        'Focus on hypertrophy weight training with progressive overload and a calorie-surplus customized diet plan.';
      suggestedPlan = 'Weight Training & Mass Gain Diet';
      color = 'text-amber-400';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Optimal Fitness';
      advice =
        'Great baseline! Target body recomposition with heavy resistance training, endurance, and functional mobility.';
      suggestedPlan = 'Strength & Conditioning';
      color = 'text-emerald-400';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
      advice =
        'Recommended focus: Daily morning 45-min aerobics classes, high-intensity cardio, and a controlled calorie deficit diet.';
      suggestedPlan = 'Aerobics & Weight Loss Program';
      color = 'text-yellow-400';
    } else {
      category = 'Obese';
      advice =
        'Recommended focus: Supervised low-impact resistance training, joint-friendly rehabilitation, and structured fat-loss diet protocol.';
      suggestedPlan = 'Personal Training & Targeted Fat Loss';
      color = 'text-rose-400';
    }

    setBmiResult({ bmi, category, advice, suggestedPlan, color });
  };

  const handleApplyToRegistration = () => {
    if (!bmiResult) return;
    const goalSummary = `BMI: ${bmiResult.bmi} (${bmiResult.category}). Goal: ${bmiResult.suggestedPlan}`;
    onApplyGoal(goalSummary);
  };

  return (
    <section id="calculator" className="py-20 bg-neutral-900/30 relative border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Calculator className="w-3.5 h-3.5" />
                Fitness Assessment Tool
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                Calculate Your Starting Point
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Enter your height and weight to discover your ideal training pathway at MX6 MULTI GYM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Form Input */}
              <div className="md:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Height (in cm)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="e.g. 175"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                    <span className="absolute right-4 top-3 text-xs text-neutral-500 font-semibold">
                      cm
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Weight (in kg)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g. 72"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                    <span className="absolute right-4 top-3 text-xs text-neutral-500 font-semibold">
                      kg
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => calculateBmi()}
                  className="w-full py-3.5 rounded-xl bg-amber-400 text-neutral-950 font-bold uppercase text-xs tracking-wider hover:bg-amber-300 transition-all cursor-pointer shadow-md shadow-amber-500/20 active:scale-98"
                >
                  Calculate BMI
                </button>
              </div>

              {/* Result Card */}
              <div className="md:col-span-6 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between min-h-[220px]">
                {bmiResult ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                        Your BMI Score
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-wider ${bmiResult.color}`}>
                        {bmiResult.category}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl font-bold text-white tabular-nums">
                        {bmiResult.bmi}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">kg/m²</span>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed bg-neutral-950/70 p-3 rounded-lg border border-neutral-800/80">
                      {bmiResult.advice}
                    </p>

                    <button
                      onClick={handleApplyToRegistration}
                      className="w-full py-2.5 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-amber-400 hover:text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-neutral-700 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Use in Registration Form</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-6 h-full text-neutral-500">
                    <Activity className="w-10 h-10 mb-2 stroke-1 text-neutral-600" />
                    <p className="text-xs text-neutral-400">
                      Enter your height and weight, then click "Calculate BMI" to see instant tailored
                      recommendations.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
