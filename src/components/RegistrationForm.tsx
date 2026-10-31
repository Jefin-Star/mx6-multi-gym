import { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageCircle, Mail, AlertTriangle, Sparkles, User, Phone, Calendar } from 'lucide-react';
import { GYM_INFO, MEMBERSHIP_PLANS } from '../data/gymData';
import { RegistrationFormData } from '../types';

interface RegistrationFormProps {
  selectedPlanId: string;
  initialGoals: string;
}

export default function RegistrationForm({ selectedPlanId, initialGoals }: RegistrationFormProps) {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    phone: '',
    email: '',
    planId: '3-month',
    startDate: '',
    goals: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationFormData | null>(null);

  // Sync selectedPlanId from parent (pricing card clicks)
  useEffect(() => {
    if (selectedPlanId) {
      setFormData((prev) => ({ ...prev, planId: selectedPlanId }));
    }
  }, [selectedPlanId]);

  // Sync initialGoals from BMI calculator or service clicks
  useEffect(() => {
    if (initialGoals) {
      setFormData((prev) => ({
        ...prev,
        goals: prev.goals ? `${prev.goals} | ${initialGoals}` : initialGoals,
      }));
    }
  }, [initialGoals]);

  // Set default start date to today/tomorrow
  useEffect(() => {
    const today = new Date();
    const formatted = today.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, startDate: prev.startDate || formatted }));
  }, []);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid full name.';
    }

    const cleanedPhone = formData.phone.replace(/[\s\-\+]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for gym membership confirmation.';
    } else if (cleanedPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!formData.planId) {
      errs.planId = 'Please select a membership plan.';
    }

    if (!formData.startDate) {
      errs.startDate = 'Please specify your preferred start date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean submission handling & persist to local storage
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('mx6_gym_leads') || '[]');
        stored.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('mx6_gym_leads', JSON.stringify(stored));
      } catch {
        // Safe ignore
      }

      setSubmittedData({ ...formData });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const getPlanDetails = (planId: string) => {
    return MEMBERSHIP_PLANS.find((p) => p.id === planId) || MEMBERSHIP_PLANS[0];
  };

  const currentPlan = getPlanDetails(submittedData?.planId || formData.planId);

  // Generate WhatsApp formatted message
  const whatsappMessage = submittedData
    ? `🏋️ *MX6 MULTI GYM - Registration Application*%0A%0A` +
      `👤 *Name*: ${submittedData.fullName}%0A` +
      `📞 *Phone*: ${submittedData.phone}%0A` +
      `✉️ *Email*: ${submittedData.email}%0A` +
      `🎯 *Plan*: ${currentPlan.name} (₹${currentPlan.price})%0A` +
      `🗓️ *Start Date*: ${submittedData.startDate}%0A` +
      `💪 *Fitness Goals*: ${submittedData.goals || 'General Fitness & Muscle Building'}%0A%0A` +
      `Please confirm my admission slot.`
    : '';

  const emailSubject = `Gym Registration - ${submittedData?.fullName || formData.fullName}`;
  const emailBody = submittedData
    ? `Name: ${submittedData.fullName}\nPhone: ${submittedData.phone}\nEmail: ${submittedData.email}\nPlan: ${currentPlan.name} (₹${currentPlan.price})\nStart Date: ${submittedData.startDate}\nGoals: ${submittedData.goals}`
    : '';

  return (
    <section id="register" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">
              <span>Join The Tribe</span>
              <span className="text-neutral-600">/</span>
              <span>Fast Track Admission</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Membership Registration
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Secure your spot at MX6 MULTI GYM Mayyil. Fill out the details below to complete your
              induction.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Top Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500" />

            {isSubmitted && submittedData ? (
              /* Success State */
              <div className="text-center py-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide mb-2">
                  Registration Received!
                </h3>
                <p className="text-neutral-300 text-sm mb-6 max-w-md mx-auto">
                  Thank you, <strong className="text-amber-400">{submittedData.fullName}</strong>.
                  Your registration for <strong>{currentPlan.name}</strong> has been logged.
                </p>

                {/* Recap Box */}
                <div className="bg-neutral-950/80 border border-neutral-800 rounded-2xl p-5 mb-8 text-left text-xs space-y-2.5 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                    <span className="text-neutral-400">Selected Plan:</span>
                    <span className="font-bold text-white">
                      {currentPlan.name} (₹{currentPlan.price})
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                    <span className="text-neutral-400">Admission Fee:</span>
                    <span className="font-bold text-emerald-400">{currentPlan.admissionFee}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                    <span className="text-neutral-400">Preferred Start:</span>
                    <span className="font-bold text-white">{submittedData.startDate}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/80 pb-2">
                    <span className="text-neutral-400">Contact Phone:</span>
                    <span className="font-bold text-white">{submittedData.phone}</span>
                  </div>
                  {submittedData.goals && (
                    <div className="pt-1">
                      <span className="text-neutral-400 block mb-1">Your Goals:</span>
                      <span className="text-neutral-200 italic">{submittedData.goals}</span>
                    </div>
                  )}
                </div>

                {/* WhatsApp Direct Action Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <a
                    href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/20 active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${GYM_INFO.email}?subject=${encodeURIComponent(
                      emailSubject
                    )}&body=${encodeURIComponent(emailBody)}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs tracking-wide transition-all border border-neutral-700 active:scale-95 cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>Email Gym</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setSubmittedData(null);
                  }}
                  className="mt-6 text-xs text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  Submit another registration
                </button>
              </div>
            ) : (
              /* The Input Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full bg-neutral-950 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-neutral-800 focus:border-amber-400'
                        }`}
                      />
                      <User className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5" />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        placeholder="e.g. 98765 43210"
                        className={`w-full bg-neutral-950 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-neutral-800 focus:border-amber-400'
                        }`}
                      />
                      <Phone className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5" />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. yourname@gmail.com"
                        className={`w-full bg-neutral-950 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-400'
                            : 'border-neutral-800 focus:border-amber-400'
                        }`}
                      />
                      <Mail className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5" />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Membership Plan Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Membership Plan <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.planId}
                      onChange={(e) => {
                        setFormData({ ...formData, planId: e.target.value });
                        if (errors.planId) setErrors({ ...errors, planId: '' });
                      }}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                    >
                      {MEMBERSHIP_PLANS.map((plan) => (
                        <option key={plan.id} value={plan.id} className="bg-neutral-950 text-white">
                          {plan.name} — ₹{plan.price} ({plan.admissionFee})
                        </option>
                      ))}
                    </select>
                    {errors.planId && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.planId}
                      </p>
                    )}
                  </div>
                </div>

                {/* Preferred Start Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Preferred Start Date <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.startDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => {
                        setFormData({ ...formData, startDate: e.target.value });
                        if (errors.startDate) setErrors({ ...errors, startDate: '' });
                      }}
                      className={`w-full bg-neutral-950 border rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors ${
                        errors.startDate
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-neutral-800 focus:border-amber-400'
                      }`}
                    />
                    <Calendar className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.startDate && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {errors.startDate}
                    </p>
                  )}
                </div>

                {/* Message / Fitness Goals */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Message / Fitness Goals <span className="text-neutral-500">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    placeholder="e.g. Weight loss, muscle building, morning aerobics, injury rehab, or personal training focus..."
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-amber-400 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors resize-none"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Weight Loss', 'Muscle Hypertrophy', 'Aerobics Class', 'Ladies Morning Slot'].map(
                      (tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              goals: prev.goals ? `${prev.goals}, ${tag}` : tag,
                            }));
                          }}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-amber-400 border border-neutral-700 cursor-pointer transition-colors"
                        >
                          + {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-neutral-950 font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 active:scale-98 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                      <span>Processing Registration...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Registration</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-neutral-500">
                  By submitting, you agree to gym conduct policies. You can complete your verification
                  directly at our Mayyil reception desk or via WhatsApp.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
