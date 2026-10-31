import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Schedule from './components/Schedule';
import BmiCalculator from './components/BmiCalculator';
import RegistrationForm from './components/RegistrationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('3-month');
  const [initialGoals, setInitialGoals] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    scrollToSection('register');
  };

  const handleSelectService = (serviceTitle: string) => {
    setInitialGoals(`Interested in: ${serviceTitle}`);
    scrollToSection('register');
  };

  const handleApplyBmiGoal = (goalText: string) => {
    setInitialGoals(goalText);
    scrollToSection('register');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Navigation */}
      <Navbar onJoinClick={() => scrollToSection('register')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onJoinClick={() => scrollToSection('register')}
          onViewPlansClick={() => scrollToSection('plans')}
        />

        {/* 2. About Our Gym */}
        <About />

        {/* 3. Our Services (Aerobics, Weight Training, Ladies Sessions, etc.) */}
        <Services onSelectServiceForRegistration={handleSelectService} />

        {/* 4. Membership Plans */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 5. Timings & Operating Schedule */}
        <Schedule />

        {/* 6. Interactive BMI Assessment Tool */}
        <BmiCalculator onApplyGoal={handleApplyBmiGoal} />

        {/* 7. Membership Registration Form */}
        <RegistrationForm selectedPlanId={selectedPlanId} initialGoals={initialGoals} />

        {/* 8. Contact Us & Google Maps Embed */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Persistent WhatsApp Floating CTA */}
      <WhatsAppFloatingButton />
    </div>
  );
}
