import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export default function WhatsAppFloatingButton() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group animate-in fade-in slide-in-from-bottom-3 duration-500">
      {/* Quick message tooltip */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 shadow-xl text-neutral-200 text-xs font-medium">
        <span>Questions? Chat on WhatsApp</span>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-neutral-500 hover:text-white p-0.5"
          aria-label="Dismiss WhatsApp helper"
        >
          <X className="w-3 h-3" />
        </button>
      </div>

      {/* Floating CTA Button */}
      <a
        href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(
          'Hello MX6 MULTI GYM, I would like to inquire about membership.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MX6 MULTI GYM on WhatsApp"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/50 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-emerald-300/40"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>
    </div>
  );
}
