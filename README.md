# ASL - Agencia de Servicios Logísticos

![Astro Badide](https://img.shields.io/badge/Astro-5.9-orange?logo=astro)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white)

Sitio web corporativo para **ASL - Agencia de Servicios Logísticos**, líder en soluciones logísticas 3PL en Colombia. Desarrollado con tecnologías modernas para ofrecer un rendimiento excepcional y una experiencia de usuario superior en el sector logístico.

## 🚚 Visión General

ASL es una agencia especializada en servicios logísticos integrales, ofreciendo soluciones personalizadas para la gestión de cadena de suministro, almacenamiento, distribución y comercio electrónico. Nuestra plataforma web refleja nuestro compromiso con la eficiencia, tecnología y servicio al cliente que nos caracteriza.

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

## 🌐 Estructura del Sitio

### Páginas Principales
1. **Inicio**
   - Hero con video/animación 3D
   - Servicios destacados
   - Ventajas competitivas
   - Proceso logístico
   - Llamado a la acción
   - Testimonios

2. **Servicios**
   - Almacenamiento 3PL
   - Distribución Nacional
   - Logística de Última Milla
   - Soluciones E-commerce
   - Cadena de Frío
   - Servicios Personalizados

3. **Sobre Nosotros**
   - Nuestra Historia
   - Equipo Directivo
   - Certificaciones
   - Responsabilidad Social
   - Trabaja con Nosotros

4. **Blog**
   - Artículos sobre logística
   - Noticias del sector
   - Guías y recursos
   - Casos de éxito

5. **Contacto**
   - Formulario de contacto
   - Ubicaciones y sucursales
   - Canales de atención
   - Preguntas frecuentes

### Secciones Especiales
- **Seguimiento de Envíos** - Integración con sistemas de rastreo
- **Cotizador en Línea** - Cálculo de costos logísticos
- **Portal de Clientes** - Acceso seguro a información de envíos
- **Centro de Soporte** - Documentación y ayuda en línea

## 🚀 Empezando

### Requisitos Previos

- Node.js 18 o superior
- npm 8+ o yarn
- Git para control de versiones

### Instalación Local

1. Clonar el repositorio
   ```bash
   git clone https://github.com/sedial/asl-website.git
   cd asl-website
   ```

2. Instalar dependencias
   ```bash
   npm install
   # o
   yarn install
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

## 🏗️ Estructura Detallada del Proyecto

```
asl-website/
├── public/                     # Archivos estáticos
│   ├── images/                 # Imágenes y recursos multimedia
│   │   ├── about/             # Imágenes para la sección Nosotros
│   │   ├── blog/              # Imágenes para artículos del blog
│   │   ├── cities/            # Imágenes de ciudades/ubicaciones
│   │   └── og-image.jpg       # Imagen por defecto para redes sociales
│   ├── icons/                 # Íconos y favicons
│   └── gift/                  # Archivos multimedia (GIFs, videos)
│
├── src/
│   ├── assets/                # Recursos procesados por Astro
│   │   └── images/            # Imágenes optimizadas
│   │
│   ├── components/            # Componentes reutilizables
│   │   ├── common/            # Componentes comunes
│   │   │   ├── Analytics.astro  # Integración con herramientas de análisis
│   │   │   ├── SEO.astro        # Gestión de metadatos SEO
│   │   │   ├── ScrollToTop.astro# Botón de volver arriba
│   │   │   └── WhatsAppButton.astro # Botón flotante de WhatsApp
│   │   │
│   │   ├── navigation/        # Componentes de navegación
│   │   │   ├── Navbar.astro   # Barra de navegación principal
│   │   │   └── Breadcrumb.astro# Migas de pan
│   │   │
│   │   ├── sections/          # Secciones de página
│   │   │   ├── Blog.astro     # Listado de artículos
│   │   │   ├── ContactForm.astro # Formulario de contacto
│   │   │   ├── Features.astro # Características principales
│   │   │   ├── Footer.astro   # Pie de página
│   │   │   └── Hero.astro     # Sección principal
│   │   │
│   │   └── ui/                # Componentes de interfaz
│   │       ├── Button.astro    # Botones personalizados
│   │       ├── Card.astro      # Tarjetas de contenido
│   │       └── Modal.astro     # Ventanas modales
│   │
│   ├── content/               # Contenido en Markdown
│   │   └── blog/              # Artículos del blog
│   │       └── primer-articulo.md # Ejemplo de artículo
│   │
│   ├── data/                  # Datos estáticos en JSON
│   │   ├── blog.json          # Datos del blog
│   │   ├── features.json      # Características principales
│   │   ├── navigation.json    # Estructura de navegación
│   │   ├── process.json       # Procesos logísticos
│   │   └── site.json          # Configuración global del sitio
│   │
│   ├── layouts/               # Plantillas de diseño
│   │   ├── BaseLayout.astro   # Diseño base para todas las páginas
│   │   ├── BlogLayout.astro   # Diseño específico para el blog
│   │   └── LandingLayout.astro# Diseño para la página de inicio
│   │
│   ├── pages/                 # Rutas de la aplicación
│   │   ├── api/               # Endpoints de la API
│   │   │   └── contact.ts     # API para el formulario de contacto
│   │   │
│   │   ├── blog/              # Rutas del blog
│   │   │   ├── [slug].astro   # Página individual de artículo
│   │   │   └── index.astro    # Listado de artículos
│   │   │
│   │   ├── about.astro        # Página Nosotros
│   │   ├── contact.astro      # Página de Contacto
│   │   ├── index.astro        # Página de Inicio
│   │   ├── services.astro     # Página de Servicios
│   │   └── sitemap.xml.ts     # Generador de sitemap
│   │
│   ├── scripts/               # Scripts personalizados
│   │   └── animations.js      # Lógica de animaciones
│   │
│   ├── styles/                # Estilos globales
│   │   └── global.css         # Estilos globales
│   │
│   ├── utils/                 # Utilidades y helpers
│   │   └── types.ts           # Definiciones de TypeScript
│   │
│   ├── env.d.ts               # Tipos de entorno
│   └── types.ts               # Tipos globales
│
├── .gitignore                # Archivos ignorados por Git
├── astro.config.mjs          # Configuración de Astro
├── package.json              # Dependencias y scripts
├── README.md                 # Este archivo
├── tailwind.config.mjs       # Configuración de Tailwind CSS
├── tsconfig.json             # Configuración de TypeScript
└── vercel.json               # Configuración de despliegue en Vercel
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

## 🔍 Estrategia SEO Avanzada

### Optimización Técnica
- **Rendimiento Web Vitals**
  - Puntuación >90 en Lighthouse
  - Tiempo de carga optimizado con Astro Islands
  - Imágenes optimizadas con WebP y carga diferida
  - Preconexión a dominios críticos
  - Minificación de CSS/JS

### Estructura y Contenido
- **Arquitectura de la Información**
  - URL limpias y descriptivas
  - Estructura de encabezados jerárquica (H1, H2, H3)
  - Sitemap XML dinámico
  - URLs canónicas implementadas
  - Estructura de datos organizada (JSON-LD)

### Palabras Clave
- **Enfoque en Logística 3PL**
  - Servicios de almacenamiento
  - Distribución nacional
  - Logística de última milla
  - Soluciones e-commerce
  - Cadena de frío
  - Operador logístico en Colombia

### Experiencia de Usuario
- **Mobile-First**
  - Diseño 100% responsivo
  - Navegación táctil optimizada
  - Tiempos de interacción rápidos
  - Contenido legible en todos los dispositivos

### Herramientas Implementadas
- **Google Analytics**
- Google Search Console
- Meta Tags dinámicos
- OpenGraph para redes sociales
- Twitter Cards
- Esquema JSON-LD para negocio local

## 🚀 Despliegue y Producción

### Configuración de Entorno
1. Crear archivo `.env` en la raíz:
   ```env
   # Configuración de Analytics
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   
   # Configuración del formulario
   PUBLIC_CONTACT_FORM_ENDPOINT=/api/contact
   
   # URL base de la API
   PUBLIC_API_BASE_URL=https://api.asl-logistica.com
   ```

### Pasos para Despliegue
1. **Compilación para Producción**
   ```bash
   npm run build
   ```
   Genera archivos optimizados en el directorio `dist/`

2. **Previsualización Local**
   ```bash
   npm run preview
   ```
   Sirve la versión de producción localmente para pruebas

### Plataformas de Despliegue
- **Vercel** (Recomendado)
  - Integración con GitHub/GitLab
  - Despliegues automáticos
  - Funciones serverless para API
  - CDN global

- **Netlify**
  - Despliegue continuo
  - Formularios estáticos
  - Redirecciones y headers personalizados

- **GitHub Pages**
  - Configuración simple
  - Ideal para sitios estáticos
  - Integración con GitHub Actions

### Variables de Entorno de Producción
| Variable | Descripción | Requerido |
|----------|-------------|-----------|
| `NODE_ENV` | Entorno de ejecución | Sí |
| `PUBLIC_SITE_URL` | URL base del sitio | Sí |
| `PUBLIC_GA_MEASUREMENT_ID` | ID de Google Analytics | No |
| `CONTACT_FORM_ENDPOINT` | Endpoint del formulario | Sí |

## 📄 Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE) - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🏆 Reconocimientos

### Tecnologías Principales
- [Astro](https://astro.build/) - El framework web para crear sitios rápidos
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [TypeScript](https://www.typescriptlang.org/) - JavaScript con sintaxis de tipos
- [Three.js](https://threejs.org/) - Biblioteca 3D para la web
- [Vercel](https://vercel.com/) - Plataforma de despliegue

### Recursos Adicionales
- [Hero Icons](https://heroicons.com/) - Iconos SVG de código abierto
- [Google Fonts](https://fonts.google.com/) - Tipografía web
- [Unsplash](https://unsplash.com/) - Imágenes libres de derechos

---

<div align="center">
  <p>Desarrollado con ❤️ por <a href="https://sedial.com.co" target="_blank">Sedial</a> para</p>
  <h3>ASL - Agencia de Servicios Logísticos</h3>
  <p>Líder en soluciones logísticas 3PL en Colombia</p>
  <p>© 2025 ASL Logística. Todos los derechos reservados.</p>
</div>

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
