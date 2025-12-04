// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // FUNCIONALIDAD DEL MENÚ DROPDOWN DE AYUDA
    // ============================================
    const helpDropdown = document.querySelector('.help-dropdown');
    const helpButton = document.querySelector('.btn-help-circle');
    const helpMenu = document.querySelector('.help-dropdown-menu');

    if (helpButton && helpMenu) {
        // Toggle del menú al hacer click en el botón
        helpButton.addEventListener('click', function(e) {
            e.stopPropagation();
            helpMenu.classList.toggle('show');
        });

        // Cerrar el menú al hacer click fuera de él
        document.addEventListener('click', function(e) {
            if (!helpDropdown.contains(e.target)) {
                helpMenu.classList.remove('show');
            }
        });

        // Prevenir que el menú se cierre al hacer click dentro de él
        helpMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // ============================================
    // FUNCIONALIDAD DE BÚSQUEDA EN TIEMPO REAL
    // ============================================
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            const faqItems = document.querySelectorAll('.faq-item');
            let hasResults = false;
            
            faqItems.forEach(item => {
                const questionText = item.querySelector('.faq-question-text').textContent.toLowerCase();
                const answerText = item.querySelector('.faq-answer-content').textContent.toLowerCase();
                
                if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                    item.style.display = 'block';
                    hasResults = true;
                    
                    // Si la búsqueda tiene más de 2 caracteres, expandir automáticamente
                    if (searchTerm.length > 2) {
                        item.classList.add('active');
                    }
                } else {
                    item.style.display = searchTerm.length > 2 ? 'none' : 'block';
                    
                    // Si no hay término de búsqueda, colapsar todas
                    if (searchTerm.length === 0) {
                        item.classList.remove('active');
                    }
                }
            });

            // Mostrar u ocultar las secciones de categorías si no hay resultados
            const faqSections = document.querySelectorAll('.faq-section');
            faqSections.forEach(section => {
                const visibleItems = section.querySelectorAll('.faq-item[style*="display: block"], .faq-item:not([style*="display: none"])');
                if (searchTerm.length > 2 && visibleItems.length === 0) {
                    section.style.display = 'none';
                } else {
                    section.style.display = 'block';
                }
            });
        });

        // Limpiar búsqueda con tecla Escape
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
                searchInput.blur();
            }
        });
    }

    // ============================================
    // ANIMACIONES AL HACER SCROLL
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos que deben animarse
    const animatedElements = document.querySelectorAll('.category-card, .faq-item');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(el);
    });

    // ============================================
    // SMOOTH SCROLL PARA LAS CATEGORÍAS
    // ============================================
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Agregar efecto de click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // ============================================
    // MEJORAR ACCESIBILIDAD CON TECLADO
    // ============================================
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach((question, index) => {
        // Hacer que sea accesible por teclado
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('aria-controls', `faq-answer-${index}`);
        
        const answer = question.nextElementSibling;
        answer.setAttribute('id', `faq-answer-${index}`);
        answer.setAttribute('role', 'region');
        
        // Permitir abrir/cerrar con Enter o Espacio
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ(this);
            }
        });
    });

    // ============================================
    // TRACKING DE PREGUNTAS MÁS VISITADAS
    // ============================================
    let faqInteractions = {};

    faqQuestions.forEach((question, index) => {
        question.addEventListener('click', function() {
            const questionText = this.querySelector('.faq-question-text').textContent;
            
            // Incrementar contador
            if (!faqInteractions[questionText]) {
                faqInteractions[questionText] = 0;
            }
            faqInteractions[questionText]++;
            
            // Log para debugging (puedes enviar esto a analytics en producción)
            console.log('Pregunta vista:', questionText, 'Veces:', faqInteractions[questionText]);
        });
    });

    // ============================================
    // BOTÓN "VOLVER ARRIBA" (OPCIONAL)
    // ============================================
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            const scrollPosition = window.scrollY;
            const categories = document.querySelector('.categories-section');
            
            // Si el usuario ha scrolleado más allá de las categorías, mostrar hint
            if (categories && scrollPosition > categories.offsetTop + categories.offsetHeight) {
                // Aquí podrías mostrar un botón de "volver arriba" si lo deseas
            }
        }, 100);
    });

    // ============================================
    // DESTACAR FAQ DESDE URL HASH
    // ============================================
    function highlightFAQFromHash() {
        const hash = window.location.hash;
        if (hash) {
            const targetSection = document.querySelector(hash);
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Si es un FAQ item, abrirlo automáticamente
                    if (targetSection.classList.contains('faq-item')) {
                        targetSection.classList.add('active');
                    }
                }, 100);
            }
        }
    }

    // Ejecutar al cargar la página
    highlightFAQFromHash();

    // Ejecutar cuando cambie el hash
    window.addEventListener('hashchange', highlightFAQFromHash);

    // ============================================
    // ANIMACIÓN DE NÚMEROS (CONTADORES)
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Buscar elementos con números para animar
    const counters = document.querySelectorAll('.category-count');
    counters.forEach(counter => {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    const target = parseInt(counter.textContent);
                    if (!isNaN(target)) {
                        animateCounter(counter, target);
                    }
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
});

// ============================================
// FUNCIONES GLOBALES
// ============================================

/**
 * Toggle FAQ item - Abrir/Cerrar acordeón
 */
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Cerrar todos los items de la misma sección
    const section = faqItem.closest('.faq-section');
    const itemsInSection = section.querySelectorAll('.faq-item');
    
    itemsInSection.forEach(item => {
        item.classList.remove('active');
        const question = item.querySelector('.faq-question');
        if (question) {
            question.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Abrir el item clickeado si no estaba activo
    if (!isActive) {
        faqItem.classList.add('active');
        element.setAttribute('aria-expanded', 'true');
        
        // Scroll suave hacia el item expandido
        setTimeout(() => {
            const elementPosition = faqItem.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 100;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }, 300);
    }
}

/**
 * Scroll suave a una categoría específica
 */
function scrollToCategory(categoryId) {
    const element = document.getElementById(categoryId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Opcional: expandir el primer FAQ de la categoría
        setTimeout(() => {
            const firstFAQ = element.querySelector('.faq-item');
            if (firstFAQ && !firstFAQ.classList.contains('active')) {
                const question = firstFAQ.querySelector('.faq-question');
                if (question) {
                    toggleFAQ(question);
                }
            }
        }, 800);
    }
}

/**
 * Función para filtrar por tipo (para compatibilidad con navegación)
 */
function filterByType(type) {
    console.log('Filtrar por tipo:', type);
    // Esta función se mantiene para compatibilidad con los enlaces del menú
    // Redirigirá a la página de adopción con el filtro correspondiente
}

// ============================================
// UTILIDADES ADICIONALES
// ============================================

/**
 * Debounce function para optimizar eventos
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Detectar si el usuario está en dispositivo móvil
 */
function isMobile() {
    return window.innerWidth <= 768;
}

/**
 * Agregar efecto de ripple a los botones
 */
function addRippleEffect(button, e) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Aplicar efecto ripple a botones CTA
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button, .category-card');
    ctaButtons.forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        
        button.addEventListener('click', function(e) {
            addRippleEffect(this, e);
        });
    });
});

// CSS para el efecto ripple (agregar dinámicamente)
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);