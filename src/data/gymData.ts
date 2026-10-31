import { MembershipPlan, GymService, ScheduleSession } from '../types';
import heroBgImg from '../assets/images/hero_gym_workout.jpg';
import weightTrainingImg from '../assets/images/gym_weight_training.jpg';
import aerobicsImg from '../assets/images/gym_aerobics_wellness.jpg';
import mx6Logo from '../assets/images/mx6_logo.jpg';

export const GYM_INFO = {
  name: 'MX6 MULTI GYM',
  tagline: 'Build Your Strength. Transform Your Life.',
  sublocation: 'Mayyil, Kannur, Kerala',
  phone: '96059 55649',
  phoneFormatted: '+91 96059 55649',
  whatsappRaw: '919605955649',
  email: 'UNAISKANNUR1989@gmail.com',
  instagramUrl: 'https://www.instagram.com/mx6_multy_gym_mayyil?obrf=MWZud3FpNzUyc2plbg==',
  instagramHandle: '@mx6_multy_gym_mayyil',
  address: 'MX6 GYM, Mayyil, Kannur, Kerala 670602',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.750813054625!2d75.4467959!3d11.9959822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba439e9607a591b%3A0xd21527cd2e99dd52!2sMX6%20GYM!5e1!3m2!1sen!2sin!4v1793434543048!5m2!1sen!2sin',
  logoUrl: mx6Logo,
  heroBgUrl: heroBgImg,
  weightTrainingImg: weightTrainingImg,
  aerobicsImg: aerobicsImg,
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'day-pass',
    name: '1 Day Pass',
    duration: 'Single Day',
    price: 75,
    period: 'per day',
    admissionFee: 'No Admission Fee',
    category: 'pass',
    description: 'Perfect for travelers, guests, or a trial strength workout session.',
    features: [
      'Full floor gym equipment access',
      'Cardio & weight machines',
      'Locker & shower facilities',
      'Floor trainer guidance',
    ],
  },
  {
    id: '1-week',
    name: '1 Week Pass',
    duration: '7 Days',
    price: 299,
    period: 'per week',
    admissionFee: 'No Admission Fee',
    category: 'pass',
    description: 'Ideal for short-term visitors or trying out gym consistency.',
    features: [
      'Unlimited gym floor access for 7 days',
      'Access to morning & evening unisex slots',
      'Free equipment posture demo',
      'Basic fitness assessment',
    ],
  },
  {
    id: '1-month',
    name: '1 Month Plan',
    duration: '1 Month',
    price: 599,
    period: 'per month',
    admissionFee: '₹300 Admission Fee',
    category: 'regular',
    description: 'Great starter membership to kickstart your physical transformation.',
    features: [
      'Complete access to strength & weight floor',
      'Access to Aerobics session (6:30 AM - 7:15 AM)',
      'Admission fee ₹300 (one-time)',
      'Fitness induction & equipment walkthrough',
      'Locker room facility',
    ],
  },
  {
    id: '3-month',
    name: '3 Months Plan',
    duration: '3 Months',
    price: 1499,
    period: 'for 3 months',
    admissionFee: 'Admission Fee FREE',
    popular: true,
    category: 'regular',
    description: 'Most popular option for steady fat loss and noticeable muscle gains.',
    features: [
      'Zero admission fee (Save ₹300)',
      'Unlimited gym & weight training',
      'Daily 45-min Aerobics sessions included',
      'Bi-weekly body composition check',
      'Customized diet consultation guidelines',
      'Access to dedicated ladies / unisex hours',
    ],
  },
  {
    id: '4-month',
    name: '4 Months Plan',
    duration: '4 Months',
    price: 1999,
    period: 'for 4 months',
    admissionFee: 'Admission Fee FREE',
    category: 'regular',
    description: 'Designed for committed athletes aiming for serious body recomposition.',
    features: [
      'Zero admission fee (Free Admission)',
      'Complete strength & conditioning access',
      'Structured progressive overload tracking',
      'Aerobics & endurance conditioning',
      'Diet plan & macronutrient guidance',
      'Priority guidance from senior trainers',
    ],
  },
  {
    id: '1-year',
    name: '1 Year Plan',
    duration: '12 Months',
    price: 4999,
    period: 'for full year',
    admissionFee: 'Admission Fee FREE',
    bestValue: true,
    category: 'regular',
    description: 'Ultimate value plan for long-term health, strength, and lifestyle transformation.',
    features: [
      'Zero admission fee (Free Admission)',
      'Only ~₹416/month (Maximum annual savings)',
      'Unrestricted year-round gym access',
      'Regular diet updates & meal reviews',
      'Rehabilitation & injury prevention checks',
      'Guest passes for friends/family (2 passes)',
    ],
  },
  {
    id: 'personal-training',
    name: 'Personal Training',
    duration: '1 Month 1-on-1',
    price: 3999,
    period: 'per month',
    admissionFee: 'Gym Floor Access Included',
    category: 'personal',
    description: 'Direct 1-on-1 personalized mentorship with our head certified fitness coach.',
    features: [
      'Dedicated personal trainer every session',
      '100% custom-tailored diet & meal chart',
      'Postural analysis & injury prevention',
      'Accelerated fat loss or hyper-growth program',
      'Daily workout log & technique scrutiny',
      'Guaranteed accountability & milestones',
    ],
  },
];

export const GYM_SERVICES: GymService[] = [
  {
    id: 'weight-training',
    title: 'Weight Training',
    category: 'Strength & Hypertrophy',
    description:
      'Heavy-duty Olympic barbells, calibrated cast iron plates, dumbbells, and modern resistance machines engineered for progressive overload and muscle development.',
    highlight: 'Full free-weights & cable fleet',
    iconName: 'Dumbbell',
  },
  {
    id: 'aerobics',
    title: 'Aerobics Session',
    category: 'Cardio & Fat Burn',
    description:
      'High-energy daily 45-minute rhythmic cardiovascular workouts designed to burn calories, elevate stamina, and boost heart health in an energizing group setting.',
    timing: 'Morning 6:30 AM to 7:15 AM (45 Mins/Day)',
    highlight: 'Daily high-energy group class',
    iconName: 'Zap',
  },
  {
    id: 'ladies-sessions',
    title: 'Dedicated Ladies Sessions',
    category: 'Privacy & Empowerment',
    description:
      'Exclusive private floor hours reserved strictly for women, offering a comfortable, supportive, and empowering training environment.',
    timing: 'Mon – Sat: 9:00 AM to 12:00 PM',
    highlight: '100% women-only privacy',
    iconName: 'Users',
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss Programs',
    category: 'Metabolic Conditioning',
    description:
      'Science-backed metabolic circuits, HIIT, and structured caloric coaching designed to shed body fat while preserving lean muscle tone.',
    highlight: 'Targeted fat reduction protocols',
    iconName: 'Flame',
  },
  {
    id: 'endurance',
    title: 'Endurance & Stamina',
    category: 'Cardiovascular Conditioning',
    description:
      'Build sustained physical resilience, anaerobic threshold, and lung capacity with dedicated functional endurance conditioning.',
    highlight: 'High-stamina athletic circuits',
    iconName: 'Activity',
  },
  {
    id: 'custom-diet-plan',
    title: 'Customized Diet Plan',
    category: 'Nutrition & Fuel',
    description:
      'Individualized macronutrient meal plans tailored to your regional Kerala diet, metabolism, work schedule, and muscle gain or weight loss goals.',
    highlight: 'Practical local meal regimens',
    iconName: 'Utensils',
  },
  {
    id: 'rehabilitation',
    title: 'Rehabilitation Training',
    category: 'Mobility & Recovery',
    description:
      'Guided post-injury recovery programs designed to safely rebuild joint mobility, muscular balance, and functional stability under vigilant supervision.',
    highlight: 'Safe orthopedic recovery',
    iconName: 'HeartPulse',
  },
  {
    id: 'injury-prevention',
    title: 'Injury Prevention & Form',
    category: 'Biomechanics & Safety',
    description:
      'Rigorous biomechanical technique correction, corrective warm-ups, and mobility protocols to ensure you lift heavy safely for years to come.',
    highlight: 'Zero-compromise lifting safety',
    iconName: 'ShieldCheck',
  },
  {
    id: 'good-atmosphere',
    title: 'Good Atmosphere & Community',
    category: 'Gym Culture',
    description:
      'A welcoming, zero-ego fitness brotherhood and sisterhood in Mayyil with motivating music, clean hygienic facilities, and friendly guidance.',
    highlight: 'Positive & disciplined vibe',
    iconName: 'Sparkles',
  },
];

export const SCHEDULE_SLOTS: ScheduleSession[] = [
  {
    name: 'Early Bird Unisex Session',
    timeRange: '5:30 AM – 9:00 AM',
    type: 'unisex',
    startHour: 5,
    startMinute: 30,
    endHour: 9,
    endMinute: 0,
    description: 'Open for all members. Peak morning power lifting and workout slot.',
  },
  {
    name: 'Ladies Only Session',
    timeRange: '9:00 AM – 12:00 PM',
    type: 'ladies',
    startHour: 9,
    startMinute: 0,
    endHour: 12,
    endMinute: 0,
    description: 'Exclusive women-only private gym hours. Total privacy and comfort.',
  },
  {
    name: 'Evening Unisex Session',
    timeRange: '4:00 PM – 10:00 PM',
    type: 'unisex',
    startHour: 16,
    startMinute: 0,
    endHour: 22,
    endMinute: 0,
    description: 'Open for all members. High-energy evening training & personal coaching.',
  },
];
