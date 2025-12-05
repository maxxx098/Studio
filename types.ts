export interface Project {
  id: number;
  title: string;
  description?: string;
  category: string;
  imageUrl: string;
  slug?: string;
}

export interface DetailedProject extends Project {
  name: string;
  description: string;
  duration: string;
  scope: string[];
  results: string[];
  gallery: string[];
  client?: string;
  year?: string;
  challenge?: string;
  solution?: string;
  
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string;
}

export enum ChatSender {
  USER = 'user',
  AI = 'ai'
}

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
  isLoading?: boolean;
}