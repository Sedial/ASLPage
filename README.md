# ASL - Sitio Web Corporativo

![Astro Badge](https://img.shields.io/badge/Astro-5.9-orange?logo=astro)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?logo=tailwindcss&logoColor=white)

Sitio web corporativo para ASL (Almacenamiento y Servicios Logísticos), construido con Astro, TypeScript y Tailwind CSS. Este proyecto implementa un diseño moderno y responsivo que destaca los servicios logísticos integrales de la empresa con navegación optimizada, footer modernizado y experiencia de usuario mejorada.

## Características del Proyecto

- 🚀 **Construido con Astro 5.x** - Generador de sitios estáticos moderno y rápido
- 💪 **Soporte TypeScript** - Seguridad de tipos para una mejor experiencia de desarrollo
- 🎨 **Tailwind CSS** - Framework CSS con enfoque utility-first para desarrollo UI rápido
- 📱 **Totalmente Responsivo** - Diseño optimizado para todos los dispositivos
- 🧩 **Componentes Modulares** - Arquitectura basada en componentes reutilizables
- 🔍 **Optimizado para SEO** - Incluye generación dinámica de sitemap
- ⚡ **Enfocado en Rendimiento** - Carga rápida y assets optimizados
- 🎭 **Animaciones Fluidas** - Transiciones y efectos visuales para mejorar la experiencia de usuario
- 🧭 **Navegación mejorada** - Enlaces de “Contacto” y “Solicitar Demo” dirigen al ancla del home `#contacto`
- 🦶 **Footer modernizado** - Diseño oscuro, modular y alineado a la identidad de ASL
- 🎨 **Paleta de Colores Corporativa** - Implementación de la identidad visual de ASL
- 📊 **Visualización de Datos** - Métricas y estadísticas presentadas de forma atractiva

## Páginas Incluidas

- **Inicio** - Landing page moderna con sección hero, características, proceso, métricas y contacto
- **Nosotros** - Información de la empresa, historia, equipo y valores corporativos
- **Servicios** - Presentación detallada de los servicios logísticos de ASL
- **Blog** - Listado de artículos con categorías y publicaciones recientes
- **Artículo de Blog** - Plantilla individual para artículos con publicaciones relacionadas
- **Contacto** - Página dedicada con formulario, información de contacto, horarios y placeholder para mapa

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
   El sitio estará disponible en `http://localhost:3000` (acceso en red habilitado por `host: true` en astro.config.mjs)

4. Compilar para producción
   ```sh
   npm run build
   ```
   Los archivos compilados se generarán en el directorio `dist/`

### Scripts disponibles

- `npm run dev` / `npm start`: Inicia el servidor de desarrollo (puerto 3000)
- `npm run build`: Compila el sitio para producción en `dist/`
- `npm run preview`: Sirve la build de producción localmente
- `npm run astro`: Acceso directo a la CLI de Astro

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

### Cambios recientes y mejoras clave

- Navegación unificada y sin duplicados:
  - Se eliminó el enlace duplicado de “Contacto” del menú.
  - El ítem “Contacto” del menú y el botón “Solicitar Demo” ahora apuntan al ancla del home `/#contacto` para scroll suave a la sección correspondiente.
- Footer modernizado (`src/components/sections/Footer.astro`):
  - Nuevo diseño oscuro, columnas reorganizadas (Empresa, Servicios, Recursos, Legal) y acentos corporativos.
  - Enlaces dinámicos tomados de `src/data/navigation.json` con localización en español.
  - Se eliminó “Casos de Éxito” en la columna Recursos a solicitud del cliente.
- Contenido y data:
  - `src/data/navigation.json` actualizado: textos en español, rutas corregidas y anchors consistentes.
- Páginas y secciones:
  - `Hero`, `Features`, `Process`, `Blog` y `ContactAnimation` integrados en landing.
  - Página `contact.astro` con formulario, información de contacto y horarios (mapa placeholder listo para integrar).
- Configuración y entorno:
  - Astro 5.x, Tailwind 3.3, TypeScript 5.2.
  - Tailwind con paleta de colores corporativa en `tailwind.config.mjs` (primarios, secundarios, neutros y acentos).
- SEO y mejores prácticas:
  - Sitemap dinámico, estructura semántica y componente SEO dedicado.

Si necesitas más cambios (p. ej., newsletter en el footer, mapa real en contacto, o mover CTAs internos al ancla del home), házmelo saber y los implemento.
