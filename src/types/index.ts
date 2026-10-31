export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  period: string;
  admissionFee: string;
  popular?: boolean;
  bestValue?: boolean;
  category: 'regular' | 'pass' | 'personal';
  features: string[];
  description: string;
}

export interface GymService {
  id: string;
  title: string;
  category: string;
  description: string;
  timing?: string;
  highlight?: string;
  iconName: string;
}

export interface ScheduleSession {
  name: string;
  timeRange: string;
  type: 'unisex' | 'ladies' | 'closed';
  startHour: number; // 24h format
  startMinute: number;
  endHour: number;
  endMinute: number;
  description: string;
}

export interface RegistrationFormData {
  fullName: string;
  phone: string;
  email: string;
  planId: string;
  startDate: string;
  goals: string;
}
