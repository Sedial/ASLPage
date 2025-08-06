/**
 * Animaciones para la plantilla Astro
 */

// Función para animar elementos cuando entran en el viewport
export function setupIntersectionAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  if (!animatedElements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationType = element.dataset.animate;
        const delay = element.dataset.delay || 0;
        
        setTimeout(() => {
          element.classList.add('animated', animationType);
          element.classList.remove('opacity-0');
          observer.unobserve(element);
        }, delay);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(element => {
    element.classList.add('opacity-0');
    observer.observe(element);
  });
}

// Función para inicializar carruseles
export function initCarousels() {
  const carousels = document.querySelectorAll('[data-carousel]');
  
  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('[data-slide]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    let currentIndex = 0;
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
        slide.setAttribute('aria-hidden', i !== index ? 'true' : 'false');
      });
    }
    
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
    
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
    
    // Inicializar
    showSlide(currentIndex);
    
    // Configurar botones
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    if (nextButton) nextButton.addEventListener('click', nextSlide);
    
    // Auto-avance si está configurado
    const autoplay = carousel.dataset.autoplay === 'true';
    const interval = parseInt(carousel.dataset.interval || '5000', 10);
    
    if (autoplay && !isNaN(interval) && interval > 0) {
      setInterval(nextSlide, interval);
    }
  });
}

// Función para manejar tabs
export function initTabs() {
  const tabGroups = document.querySelectorAll('[data-tabs]');
  
  tabGroups.forEach(group => {
    const tabs = group.querySelectorAll('[data-tab]');
    const panels = group.querySelectorAll('[data-tab-panel]');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetPanel = tab.dataset.tab;
        
        // Actualizar tabs
        tabs.forEach(t => {
          t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
          t.classList.toggle('active', t === tab);
        });
        
        // Actualizar paneles
        panels.forEach(panel => {
          const isTarget = panel.dataset.tabPanel === targetPanel;
          panel.classList.toggle('hidden', !isTarget);
          panel.setAttribute('aria-hidden', isTarget ? 'false' : 'true');
        });
      });
    });
    
    // Activar el primer tab por defecto
    if (tabs.length > 0) {
      tabs[0].click();
    }
  });
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  setupIntersectionAnimations();
  initCarousels();
  initTabs();
});
