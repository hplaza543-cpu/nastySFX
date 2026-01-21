import { Project, Testimonial, ValueProp } from './types';
import { Layers, Zap, Box } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Velocity One: Flow System',
    description: 'A complete project file demonstrating advanced time-remapping curves and seamless scene transitions specifically for Valorant highlights.',
    price: 1350,
    tags: ['Transition', 'Time Remap', 'SFX'],
    imageUrl: 'https://picsum.photos/id/12/800/600',
    features: ['.AEP File', 'SFX Included', 'Curve Presets']
  },
  {
    id: '2',
    title: 'Kinetic Type: Operator',
    description: 'Minimalist, impact-driven typography templates. Learn how to sync text to beats without cluttering the screen.',
    price: 1000,
    tags: ['Typography', 'Motion', 'Clean'],
    imageUrl: 'https://picsum.photos/id/20/800/600',
    features: ['10 Text Presets', 'Font Guide', 'Expressions']
  },
  {
    id: '3',
    title: 'Glitch & Distortion Pack',
    description: 'Subtle digital artifacts and chromatic aberration effects built entirely with native AE plugins. No third-party tools required.',
    price: 1800,
    tags: ['VFX', 'Distortion', 'No Plugins'],
    imageUrl: 'https://picsum.photos/id/28/800/600',
    features: ['Project File', 'Overlay Assets', 'Tutorial PDF']
  },
  {
    id: '4',
    title: 'Atmosphere: Deep Blue',
    description: 'Color grading presets and light leak overlays designed to give your clips a premium, cinematic navy tone.',
    price: 850,
    tags: ['Color', 'Overlays', 'Cinematic'],
    imageUrl: 'https://picsum.photos/id/42/800/600',
    features: ['.FFX Presets', 'LUTs', 'Guide']
  },
  // New SFX Products
  {
    id: '5',
    title: 'Resonance: SFX Bundle',
    description: 'A massive library of 500+ impact sounds, whooshes, and risers engineered specifically for montage editing.',
    price: 2500,
    tags: ['SFX', 'Audio', 'Bass'],
    imageUrl: 'https://picsum.photos/id/39/800/600',
    features: ['WAV Files', 'Mixed & Mastered', 'Drag & Drop']
  },
  {
    id: '6',
    title: 'UI Audio: Interface Kit',
    description: 'Clean clicks, pops, and digital interface sounds to accompany your motion graphics and HUD overlays.',
    price: 650,
    tags: ['SFX', 'UI', 'Digital'],
    imageUrl: 'https://picsum.photos/id/60/800/600',
    features: ['100+ Sounds', 'Glitch UI', 'Menu Nav']
  },
  {
    id: '7',
    title: 'Void: Ambience Textures',
    description: 'Dark, atmospheric drones and pads to fill the silence and build tension in your intros and cinematic sequences.',
    price: 1100,
    tags: ['Ambience', 'Music', 'Texture'],
    imageUrl: 'https://picsum.photos/id/16/800/600',
    features: ['Loopable', 'High Quality', 'Atmospheric']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alex "VFX" Chen',
    role: 'Freelance Editor',
    quote: "The project files aren't just templates; they are logic puzzles that taught me more about graph editors in 20 minutes than hours of YouTube tutorials."
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Content Creator',
    quote: "Cleanest file organization I've ever seen. It's refreshing to buy a project and actually understand how the layers interact."
  },
  {
    id: 't3',
    name: 'Marcus Thorne',
    role: 'Motion Designer',
    quote: "Minimalist, impactful, and technically sound. This is the standard for what educational project files should be."
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'vp1',
    title: 'Reverse Engineer',
    description: 'Don’t just copy. Dive into the layer stack to understand the math and physics behind smooth motion.',
    icon: Layers
  },
  {
    id: 'vp2',
    title: 'Workflow Velocity',
    description: 'Skip the setup. Use our pre-composed structures to get straight to the creative editing process.',
    icon: Zap
  },
  {
    id: 'vp3',
    title: 'Clean Architecture',
    description: 'Every file is color-coded, named, and organized. Develop professional habits by working with professional files.',
    icon: Box
  }
];