# ASL - Sitio Web Corporativo

![Astro Badge](https://img.shields.io/badge/Astro-4.0-orange?logo=astro)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?logo=tailwindcss&logoColor=white)

Sitio web corporativo para ASL (Almacenamiento y Servicios Logísticos), construido con Astro, TypeScript y Tailwind CSS. Este proyecto implementa un diseño moderno y responsivo que destaca los servicios logísticos integrales de la empresa.

## Características del Proyecto

- 🚀 **Construido con Astro 4.0** - Generador de sitios estáticos moderno y rápido
- 💪 **Soporte TypeScript** - Seguridad de tipos para una mejor experiencia de desarrollo
- 🎨 **Tailwind CSS** - Framework CSS con enfoque utility-first para desarrollo UI rápido
- 📱 **Totalmente Responsivo** - Diseño optimizado para todos los dispositivos
- 🧩 **Componentes Modulares** - Arquitectura basada en componentes reutilizables
- 🔍 **Optimizado para SEO** - Incluye generación dinámica de sitemap
- ⚡ **Enfocado en Rendimiento** - Carga rápida y assets optimizados
- 🎭 **Animaciones Fluidas** - Transiciones y efectos visuales para mejorar la experiencia de usuario
- 🎨 **Paleta de Colores Corporativa** - Implementación de la identidad visual de ASL
- 📊 **Visualización de Datos** - Métricas y estadísticas presentadas de forma atractiva

## Páginas Incluidas

- **Inicio** - Landing page moderna con sección hero, características, proceso y métricas
- **Nosotros** - Información de la empresa, historia, equipo y valores corporativos
- **Servicios** - Presentación detallada de los servicios logísticos de ASL
- **Blog** - Listado de artículos con categorías y publicaciones recientes
- **Artículo de Blog** - Plantilla individual para artículos con publicaciones relacionadas
- **Contacto** - Formulario de contacto con integración de Google Maps

## Comenzando

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Instalación

1. Clonar este repositorio
   ```sh
   git clone https://github.com/sedial/asl-website.git
   cd asl-website
   ```

2. Instalar dependencias
   ```sh
   npm install
   ```

3. Iniciar el servidor de desarrollo
   ```sh
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:4321`

4. Compilar para producción
   ```sh
   npm run build
   ```
   Los archivos compilados se generarán en el directorio `dist/`

## Estructura del Proyecto

```
/
├── public/          # Activos estáticos
│   └── images/      # Archivos de imágenes
├── src/
│   ├── assets/      # Activos procesados por Astro
│   │   └── images/  # Imágenes optimizadas
│   ├── components/  # Componentes UI
│   │   ├── common/    # Componentes comunes (Analytics, SEO, etc.)
│   │   ├── navigation/# Componentes de navegación (Navbar, Breadcrumb)
│   │   ├── sections/  # Secciones de página (Hero, Features, Process, etc.)
│   │   └── ui/        # Elementos UI reutilizables (Button, Card, etc.)
│   ├── content/     # Contenido estructurado (blog)
│   │   └── blog/    # Artículos del blog en formato Markdown
│   ├── data/        # Archivos JSON de datos
│   ├── layouts/     # Layouts de página
│   ├── pages/       # Componentes de página
│   │   ├── api/     # Endpoints de API
│   │   └── blog/    # Páginas del blog
│   ├── scripts/     # Scripts JavaScript
│   ├── styles/      # Estilos globales
│   └── utils/       # Utilidades y tipos
└── astro.config.mjs # Configuración de Astro
```

## Personalización

### Estilos

El proyecto utiliza Tailwind CSS para los estilos. La paleta de colores corporativos de ASL está configurada en el archivo `tailwind.config.mjs`, donde se han definido los colores primarios (rojos corporativos), secundarios (azul profesional), neutros (escala de grises) y acentos.

### Contenido

El contenido dinámico se almacena en archivos JSON en el directorio `src/data`. Estos archivos contienen la información de navegación, características, proceso y otros datos que se muestran en el sitio.

### Componentes

El proyecto está construido con una arquitectura modular de componentes. Los componentes principales se encuentran organizados en las siguientes carpetas:
- `common`: Componentes comunes como Analytics, SEO, ScrollToTop
- `navigation`: Componentes de navegación como Navbar y Breadcrumb
- `sections`: Secciones principales como Hero, Features, Process
- `ui`: Elementos de interfaz reutilizables como Button, Card, Input

### Imágenes

Las imágenes del proyecto se almacenan en el directorio `public/images` y `src/assets/images`. Las imágenes en `public` se sirven directamente, mientras que las de `assets` son procesadas y optimizadas por Astro.

## API Endpoints

El proyecto incluye los siguientes endpoints de API:

- `/api/contact` - Maneja los envíos del formulario de contacto
- `/sitemap.xml` - Genera un sitemap dinámico para SEO

## SEO

El proyecto implementa las mejores prácticas para SEO:

- Meta tags con títulos y descripciones apropiadas
- Estructura HTML semántica
- Sitemap generado automáticamente
- Diseño responsivo (optimizado para móviles)
- Componente SEO dedicado para gestión centralizada

## Despliegue

Este proyecto puede ser desplegado en cualquier proveedor de hosting estático que soporte Astro, como Netlify, Vercel o GitHub Pages.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## Agradecimientos

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

Desarrollado para ASL - Almacenamiento y Servicios Logísticos

## Progreso del Proyecto

### Componentes y Secciones Trabajadas:

- **Navegación (`Navbar.astro`)**: Se ha configurado la navegación principal con efectos visuales y animaciones para el menú móvil. Incluye logo responsivo con efectos de hover y transiciones suaves.

- **Configuración de Paleta de Colores (`tailwind.config.mjs`)**: Se han definido colores personalizados para ASL:
  - **Primarios**: Rojos corporativos (CA241C, 9E2420)
  - **Secundarios**: Azul profesional (3D5A80)
  - **Neutros**: Escala de grises (F4F4F6, 4B4B4B, 1C1C1E)
  - **Acentos**: Colores complementarios para destacar elementos

- **Sección Hero (`Hero.astro`)**: Implementación de una sección hero con:
  - Elementos decorativos y formas geométricas animadas
  - Gradientes de fondo modernos
  - Llamadas a la acción principales
  - Diseño responsivo optimizado para móviles y escritorio

- **Sección Características (`Features.astro`)**: Muestra los servicios principales de ASL:
  - Logística Integral
  - Almacenamiento
  - Distribución
  - Tecnología
  - Cada servicio incluye título, descripción, características destacadas e iconos

- **Sección Proceso (`Process.astro`)**: Visualización interactiva del proceso logístico:
  - Pasos secuenciales con animación automática
  - Línea de progreso visual
  - Métricas de rendimiento con barras de progreso
  - Interactividad mediante JavaScript para la navegación entre pasos

- **Git**: Se ha configurado el archivo `.gitignore` para excluir archivos y directorios no deseados del control de versiones, como:
  - Directorios de compilación (dist/, .output/)
  - Dependencias (node_modules/)
  - Archivos de entorno (.env)
  - Archivos específicos del sistema operativo y del IDE
  - Archivos temporales y de caché
