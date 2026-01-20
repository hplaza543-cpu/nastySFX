// Fix: Import React to use React.ElementType
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  price: number;
  tags: string[];
  imageUrl: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}