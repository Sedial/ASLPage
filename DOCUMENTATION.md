# ASLPage - Documentación del Proyecto

## Descripción General del Proyecto
Este es un proyecto de sitio web basado en Astro.js que utiliza TypeScript y Tailwind CSS. El proyecto sigue una arquitectura moderna de desarrollo web con estructura basada en componentes y varias características para SEO, análisis y interacción del usuario.

## Stack Tecnológico
- **Framework**: Astro.js
- **Estilos**: Tailwind CSS
- **Lenguaje**: TypeScript
- **Despliegue**: Vercel (configurado mediante vercel.json)

## Estructura del Proyecto

### Archivos de Configuración Raíz
- `astro.config.mjs` - Configuración de Astro
- `tailwind.config.mjs` - Configuración de Tailwind CSS
- `tsconfig.json` - Configuración de TypeScript
- `vercel.json` - Configuración de despliegue en Vercel

### Estructura del Código Fuente (`src/`)

#### Componentes
Los componentes están organizados en cuatro categorías principales:

1. **Componentes Comunes** (`components/common/`)
   - `Analytics.astro` - Integración de análisis
   - `HRButton.astro` - Componente de botón de Recursos Humanos
   - `ScrollToTop.astro` - Funcionalidad de desplazamiento hacia arriba
   - `SEO.astro` - Componente de optimización SEO
   - `TruckLoader.astro` - Componente de animación de carga
   - `WhatsAppButton.astro` & `WhatsAppForm.astro` - Integración de WhatsApp

2. **Componentes de Navegación** (`components/navigation/`)
   - `Breadcrumb.astro` - Migas de pan de navegación
   - `Navbar.astro` - Barra de navegación principal

3. **Componentes de Sección** (`components/sections/`)
   - `Blog.astro` - Sección de blog
   - `ContactAnimation.astro` & `ContactForm.astro` - Funcionalidad de contacto
   - `CTA.astro` - Secciones de llamada a la acción
   - `Features.astro` - Muestra de características
   - `Footer.astro` - Pie de página del sitio
   - `Header.astro` - Encabezado del sitio
   - `Hero.astro` - Sección principal
   - `Process.astro` - Sección de explicación del proceso
   - `ScrollytellingServices.astro` - Característica de narrativa con desplazamiento

4. **Componentes UI** (`components/ui/`)
   - Elementos básicos de UI como Badge, Button, Card, Input, Modal y SpaceButton

#### Gestión de Contenido
- `content/` - Contiene contenido del blog y configuración
- `data/` - Archivos JSON para varios contenidos del sitio
  - Datos del blog
  - Datos de características
  - Configuración de navegación
  - Información del proceso
  - Metadatos del sitio

#### Layouts
- `BaseLayout.astro` - Plantilla base para todas las páginas
- `BlogLayout.astro` - Layout específico para entradas del blog
- `LandingLayout.astro` - Layout para páginas de aterrizaje

#### Páginas
- Páginas principales:
  - `index.astro` - Página de inicio
  - `about.astro` - Página Acerca de
  - `contact.astro` - Página de contacto
  - `services.astro` - Página de servicios
  - `privacy.astro` & `terms.astro` - Páginas legales
- Sistema de blog:
  - `blog/[slug].astro` - Páginas dinámicas de entradas de blog
  - `blog/index.astro` - Página de listado del blog
- Endpoints de API:
  - `api/contact.ts` - Manejador del formulario de contacto

#### Assets y Estilos
- `assets/` - Recursos de imágenes
- `styles/global.css` - Estilos CSS globales
- `scripts/animations.js` - Animaciones JavaScript

#### Utilidades y Tipos
- `types.ts` - Definiciones de tipos TypeScript
- `utils/types.ts` - Definiciones de tipos de utilidades

### Assets Públicos (`public/`)
- Archivos SEO (`robots.txt`, `_headers`, `_redirects`)
- Archivo de verificación del sitio
- `manifest.json` para soporte PWA
- Varios recursos de imágenes organizados por categoría

## Características Principales
1. **Optimización SEO**
   - Implementada a través del componente SEO.astro
   - Meta etiquetas apropiadas y verificación del sitio
   - Generación de sitemap (`sitemap.xml.js`)

2. **Características de Contacto**
   - Integración con WhatsApp
   - Formulario de contacto con endpoint de API
   - Secciones de contacto animadas

3. **Sistema de Blog**
   - Entradas de blog basadas en Markdown
   - Enrutamiento dinámico
   - Página de listado de blog

4. **Características UI/UX**
   - Diseño responsivo
   - Capacidades de narrativa con desplazamiento
   - Animaciones personalizadas
   - Estados de carga
   - Componentes interactivos

## Guías de Desarrollo

### Agregar Nuevas Páginas
1. Crear nuevos archivos .astro en el directorio `pages/`
2. Usar el layout apropiado (BaseLayout, BlogLayout o LandingLayout)
3. Actualizar navigation.json si es necesario

### Agregar Entradas de Blog
1. Agregar archivos markdown a `content/blog/`
2. Seguir la estructura frontmatter existente
3. Actualizar blog.json si es necesario

### Estilos
- Usar clases de Tailwind CSS
- Los estilos globales están en global.css
- Los estilos específicos de componentes deben mantenerse dentro de los componentes

### TypeScript
- Mantener definiciones de tipos en types.ts
- Usar comprobación estricta de TypeScript
- Mantener interfaces y tipos bien documentados

## Despliegue
El proyecto está configurado para despliegue en Vercel:
- Los despliegues de producción se activan con actualizaciones en la rama principal
- La configuración está en vercel.json
- Las variables de entorno deben configurarse en el panel de Vercel

## Consideraciones de Rendimiento
- Las imágenes están optimizadas y se sirven desde /public
- Los análisis se cargan de forma asíncrona
- El CSS se minimiza en producción
- JavaScript se empaqueta y divide apropiadamente

## Notas de Mantenimiento
- Se recomienda actualizar regularmente las dependencias
- Mantener actualizadas las definiciones de TypeScript
- Monitorear análisis para el comportamiento del usuario
- Se recomienda hacer respaldos regulares del contenido

## Recomendaciones para Desarrollo Futuro
1. Considerar implementar:
   - Más características interactivas
   - Funcionalidad mejorada del blog
   - Opciones adicionales de animación
   - Monitoreo de rendimiento
   - Características SEO mejoradas

2. Áreas de mejora potencial:
   - Optimización de caché
   - Carga perezosa de imágenes
   - Características de Aplicación Web Progresiva
   - Mejoras de accesibilidad

## Soporte y Contacto
Para cualquier pregunta o problema, consultar:
- Documentación del repositorio del proyecto
- Comentarios específicos de componentes
- Definiciones de tipos TypeScript
- Documentación de archivos de configuración