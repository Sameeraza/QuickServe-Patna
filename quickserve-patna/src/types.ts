export interface ServiceItem {
  id: string;
  name: string;
  category: 'ac' | 'electrical' | 'plumbing' | 'appliances' | 'cleaning' | 'cctv' | 'auto';
  categoryLabel: string;
  startingPrice: string;
  popular?: boolean;
  highlight: string;
  features: string[];
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  locality: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  avatarBg: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  service: string;
  locality: string;
  timeSlot: string;
  notes?: string;
}

export interface RateItem {
  service: string;
  rate: string;
  scope: string;
  warranty: string;
}
