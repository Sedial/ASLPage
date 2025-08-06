// Definiciu00f3n de tipos para posts del blog
export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  tags?: string[];
  excerpt: string;
  coverImage: string;
  content: string;
}

// Definiciu00f3n de la estructura de datos del blog
export interface BlogData {
  posts: BlogPost[];
}

// Tipo para los links de CTAs
export interface CTALink {
  text: string;
  href: string;
  icon?: string;
}

// Tipo para testimonios
export interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

// Tipo para miembros del equipo
export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks?: {
    platform: string;
    url: string;
  }[];
}
