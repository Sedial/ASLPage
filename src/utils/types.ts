export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  links: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
    whatsapp?: string; // puede ser número o URL completa
  };
}

export interface NavigationItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface TestimonialItem {
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  popular?: boolean;
}
