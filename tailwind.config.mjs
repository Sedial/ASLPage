/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ASL Primary Colors (Rojos Corporativos)
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#CA241C', // Rojo Corporativo 2 - Principal
          600: '#9E2420', // Rojo Corporativo 1 - Más oscuro
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#450a0a',
        },
        
        // ASL Secondary Colors
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#3D5A80', // Azul Profesional
          600: '#2d4a6b',
          700: '#1e3a5a',
          800: '#1e293b',
          900: '#0f172a',
        },
        
        // ASL Neutral Colors
        gray: {
          50: '#F4F4F6', // Gris Neutro Claro
          100: '#e5e5e7',
          200: '#d1d1d6',
          300: '#c7c7cc',
          400: '#aeaeb2',
          500: '#4B4B4B', // Gris Grafito Medio
          600: '#48484a',
          700: '#3a3a3c',
          800: '#2c2c2e',
          900: '#1C1C1E', // Gris Carbón Moderno
        },
        
        // ASL Accent Colors
        accent: {
          yellow: '#F5C06B', // Amarillo Arena - CTA
          green: '#A2C8A2', // Verde Urban Soft - Éxito
          blue: '#3D5A80', // Azul Profesional - Acentos
        },
        
        // Legacy color mappings for compatibility
        'azul-corporativo': '#3D5A80',
        'gris-carbon': '#1C1C1E',
        'naranja-logistico': '#F5C06B',
        'azul-claro': '#3D5A80',
        'gris-medio': '#4B4B4B',
        'verde-exito': '#A2C8A2',
        'blanco-puro': '#ffffff',
        'gris-claro': '#F4F4F6',
        'gris-muy-claro': '#e5e5e7',
        'rojo-alerta': '#CA241C',
        'amarillo-advertencia': '#F5C06B'
      },
      fontFamily: {
        sans: ['Dubai', 'sans-serif'],
        heading: ['Dubai', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
