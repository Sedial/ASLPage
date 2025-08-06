# Modular Astro Landing Page Template

![Astro Badge](https://img.shields.io/badge/Astro-4.0-orange?logo=astro)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?logo=tailwindcss&logoColor=white)

A modular, responsive landing page template built with Astro, TypeScript, and Tailwind CSS. This template provides a solid foundation for building modern websites with a blog, contact form, and multiple pre-built page layouts.

## Features

- 🚀 **Built with Astro 4.0** - Fast, modern static site generator
- 💪 **TypeScript Support** - Type safety for a better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📱 **Fully Responsive** - Looks great on all devices
- 📝 **Blog Integration** - Ready-to-use blog pages with dynamic routing
- 📞 **Contact Form** - With server-side validation and API endpoints
- 🧩 **Modular Components** - Easily customizable and reusable
- 🔍 **SEO Optimized** - Including dynamic sitemap generation
- ⚡ **Performance Focused** - Fast loading and optimized assets
- 🔄 **Automated Sitemap** - Dynamic XML sitemap for better SEO

## Pages Included

- **Home** - Modern landing page with hero, features, testimonials, and more
- **About** - Company information, team members, and values
- **Services** - Showcase your service offerings with details
- **Blog** - Blog listing page with categories and recent posts
- **Blog Post** - Individual blog post template with related posts
- **Contact** - Contact form with Google Maps integration placeholder

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone this repository
   ```sh
   git clone https://github.com/yourusername/astro-landing-template.git
   cd astro-landing-template
   ```

2. Install dependencies
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Build for production
   ```sh
   npm run build
   # or
   yarn build
   ```

## Project Structure

```
/
├── public/          # Static assets
│   └── images/      # Image files
├── src/
│   ├── components/  # UI Components
│   │   ├── sections/  # Page sections
│   │   └── ui/        # Reusable UI elements
│   ├── data/        # JSON data files
│   ├── layouts/     # Page layouts
│   └── pages/       # Page components
│       ├── api/     # API endpoints
│       └── blog/    # Blog pages
└── astro.config.mjs # Astro configuration
```

## Customization

### Styling

This template uses Tailwind CSS for styling. You can customize the design by modifying the `tailwind.config.js` file to adjust colors, fonts, and other design tokens.

### Content

Most of the content is stored in JSON files in the `src/data` directory. Update these files to change the content displayed on your site.

### Components

The template is built with a modular component architecture. You can customize existing components or create new ones in the `src/components` directory.

### Images

Replace the placeholder images in the `public/images` directory with your own images. See the README in that directory for more information about image guidelines.

## API Endpoints

The template includes the following API endpoints:

- `/api/contact` - Handles contact form submissions
- `/sitemap.xml` - Generates a dynamic sitemap

## SEO

The template includes best practices for SEO:

- Meta tags with proper title and description
- Semantic HTML structure
- Automatically generated sitemap
- Responsive design (mobile-friendly)

## Deployment

This template can be deployed to any static hosting provider that supports Astro, such as Netlify, Vercel, or GitHub Pages.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

Built with ❤️ by [Your Name/Company](https://yourwebsite.com)
