// ============================================
// ESPERAR A QUE EL DOM ESTÉ COMPLETAMENTE CARGADO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MODAL LOGIN
    // ============================================
    // ===== MODAL LOGIN =====
const loginBtn = document.querySelector(".btn-login");
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".modal-close");
const loginForm = document.getElementById("loginForm");
const loginUsuario = document.getElementById("loginUsuario");
const loginPassword = document.getElementById("loginPassword");
const loginUsuarioError = document.getElementById("loginUsuarioError");
const loginPasswordError = document.getElementById("loginPasswordError");

// Verificar que los elementos existen antes de asignar eventos
if (loginBtn && modal && closeBtn) {

    // Abrir modal
    loginBtn.addEventListener("click", () => {
        modal.style.display = "flex";  // Flex para centrar
    });

    // Cerrar modal con X
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal haciendo clic en el fondo sombreado
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {  // Detecta clic solo fuera de la caja
            modal.style.display = "none";
        }
    });

} else {
    console.warn("⚠️ Advertencia: No se encontró alguno de los elementos del modal (btn-login, loginModal o modal-close).");
}

// ===== VALIDACIÓN DEL FORMULARIO DE LOGIN =====
if (loginUsuario && loginUsuarioError) {
    loginUsuario.addEventListener('input', function() {
        const value = this.value.trim();
        
        if (value.length === 0) {
            this.style.borderColor = '#E0E0E0';
            loginUsuarioError.classList.remove('show');
        } else if (value.length < 3) {
            this.style.borderColor = '#E63946';
            loginUsuarioError.textContent = 'El usuario debe tener al menos 3 caracteres.';
            loginUsuarioError.classList.add('show');
        } else {
            this.style.borderColor = '#2A9D8F';
            loginUsuarioError.classList.remove('show');
        }
    });
}

if (loginPassword && loginPasswordError) {
    // Agregar botón de mostrar/ocultar contraseña
    const passwordWrapper = loginPassword.closest('.input-wrapper');
    
    if (passwordWrapper && !passwordWrapper.querySelector('.toggle-password')) {
        const toggleButton = document.createElement('button');
        toggleButton.type = 'button';
        toggleButton.className = 'toggle-password';
        toggleButton.setAttribute('aria-label', 'Mostrar contraseña');
        toggleButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        `;
        
        passwordWrapper.appendChild(toggleButton);

        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            const type = loginPassword.type === 'password' ? 'text' : 'password';
            loginPassword.type = type;
            
            if (type === 'text') {
                this.setAttribute('aria-label', 'Ocultar contraseña');
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                `;
            } else {
                this.setAttribute('aria-label', 'Mostrar contraseña');
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                `;
            }
        });
    }

    // Validar contraseña
    loginPassword.addEventListener('input', function() {
        const value = this.value;
        
        if (value.length === 0) {
            this.style.borderColor = '#E0E0E0';
            loginPasswordError.classList.remove('show');
        } else if (value.length < 6) {
            this.style.borderColor = '#E63946';
            loginPasswordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            loginPasswordError.classList.add('show');
        } else {
            this.style.borderColor = '#2A9D8F';
            loginPasswordError.classList.remove('show');
        }
    });
}

// Manejar envío del formulario
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const usuario = loginUsuario.value.trim();
        const password = loginPassword.value;
        
        // Validar campos
        let isValid = true;
        
        if (usuario.length < 3) {
            loginUsuario.style.borderColor = '#E63946';
            loginUsuarioError.textContent = 'El usuario debe tener al menos 3 caracteres.';
            loginUsuarioError.classList.add('show');
            isValid = false;
        }
        
        if (password.length < 6) {
            loginPassword.style.borderColor = '#E63946';
            loginPasswordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            loginPasswordError.classList.add('show');
            isValid = false;
        }
        
        if (isValid) {
            console.log('Login exitoso:', { usuario, password: '***' });
            alert('¡Inicio de sesión exitoso! Bienvenido ' + usuario);
            modal.style.display = 'none';
            loginForm.reset();
            loginUsuario.style.borderColor = '#E0E0E0';
            loginPassword.style.borderColor = '#E0E0E0';
        }
    });
}



    // ============================================
    // CHATBOT
    // ============================================
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatBody = document.getElementById('chatBody');
    const chatBadge = document.querySelector('.chat-badge');

    if (chatButton && chatWindow && chatClose && chatInput && chatSend && chatBody) {
        // Abrir chat
        chatButton.addEventListener('click', () => {
            chatWindow.classList.add('active');
            chatButton.style.display = 'none';
            if (chatBadge) {
                chatBadge.style.display = 'none';
            }
        });

        // Cerrar chat
        chatClose.addEventListener('click', () => {
            chatWindow.classList.remove('active');
            chatButton.style.display = 'flex';
        });

        // Función para enviar mensaje
        function sendMessage() {
            const message = chatInput.value.trim();
            
            if (message === '') return;
            
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message', 'sent');
            
            const currentTime = new Date().toLocaleTimeString('es-ES', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${message}</p>
                    <span class="message-time">${currentTime}</span>
                </div>
                <div class="message-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
            `;
            
            chatBody.appendChild(messageDiv);
            chatInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
            
            setTimeout(() => {
                autoReply();
            }, 1500);
        }

        // Función para respuesta automática
        function autoReply() {
            const replies = [
                '¡Gracias por tu mensaje! Un agente te responderá pronto. 😊',
                'Estamos procesando tu consulta. ¿Hay algo más en lo que pueda ayudarte?',
                '¡Perfecto! Te contactaremos a la brevedad. 🐾',
                'Entendido. ¿Necesitas información sobre alguna mascota en particular?',
                'Gracias por contactarnos. ¿Te gustaría conocer nuestro proceso de adopción?'
            ];
            
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message', 'received');
            
            const currentTime = new Date().toLocaleTimeString('es-ES', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div class="message-content">
                    <p>${randomReply}</p>
                    <span class="message-time">${currentTime}</span>
                </div>
            `;
            
            chatBody.appendChild(messageDiv);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        // Enviar con botón
        chatSend.addEventListener('click', sendMessage);

        // Enviar con Enter
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });

        // Simular notificación (solo para demo)
        setTimeout(() => {
            if (!chatWindow.classList.contains('active') && chatBadge) {
                const currentBadge = parseInt(chatBadge.textContent) || 0;
                chatBadge.textContent = currentBadge + 1;
                chatBadge.style.display = 'flex';
                
                chatButton.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    chatButton.style.animation = '';
                }, 500);
            }
        }, 5000);
    }

    // ============================================
    // FUNCIONALIDAD DEL MENÚ DROPDOWN DE AYUDA
    // ============================================
    const helpDropdown = document.querySelector('.help-dropdown');
    const helpButton = document.querySelector('.btn-help-circle');
    const helpMenu = document.querySelector('.help-dropdown-menu');

    if (helpButton && helpMenu) {
        helpButton.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            helpMenu.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
            if (helpDropdown && !helpDropdown.contains(e.target)) {
                helpMenu.classList.remove('show');
            }
        });

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
                    
                    if (searchTerm.length > 2) {
                        item.classList.add('active');
                    }
                } else {
                    item.style.display = searchTerm.length > 2 ? 'none' : 'block';
                    
                    if (searchTerm.length === 0) {
                        item.classList.remove('active');
                    }
                }
            });

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
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('aria-controls', `faq-answer-${index}`);
        
        const answer = question.nextElementSibling;
        if (answer) {
            answer.setAttribute('id', `faq-answer-${index}`);
            answer.setAttribute('role', 'region');
        }
        
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
            
            if (!faqInteractions[questionText]) {
                faqInteractions[questionText] = 0;
            }
            faqInteractions[questionText]++;
            
            console.log('Pregunta vista:', questionText, 'Veces:', faqInteractions[questionText]);
        });
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
                    
                    if (targetSection.classList.contains('faq-item')) {
                        targetSection.classList.add('active');
                    }
                }, 100);
            }
        }
    }

    highlightFAQFromHash();
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

    const counters = document.querySelectorAll('.category-count');
    counters.forEach(counter => {
        const counterObserver = new IntersectionObserver(function(entries) {
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
        
        counterObserver.observe(counter);
    });

    // ============================================
    // EFECTO RIPPLE EN BOTONES
    // ============================================
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

    const ctaButtons = document.querySelectorAll('.cta-button, .category-card');
    ctaButtons.forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        
        button.addEventListener('click', function(e) {
            addRippleEffect(this, e);
        });
    });

}); // FIN DEL DOMContentLoaded

// ============================================
// FUNCIONES GLOBALES (fuera del DOMContentLoaded)
// ============================================

/**
 * Toggle FAQ item - Abrir/Cerrar acordeón
 */
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    const section = faqItem.closest('.faq-section');
    const itemsInSection = section.querySelectorAll('.faq-item');
    
    itemsInSection.forEach(item => {
        item.classList.remove('active');
        const question = item.querySelector('.faq-question');
        if (question) {
            question.setAttribute('aria-expanded', 'false');
        }
    });
    
    if (!isActive) {
        faqItem.classList.add('active');
        element.setAttribute('aria-expanded', 'true');
        
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
 * Función para filtrar por tipo (compatibilidad con navegación)
 */
function filterByType(type) {
    console.log('Filtrar por tipo:', type);
}

// ============================================
// CSS DINÁMICO PARA ANIMACIONES
// ============================================
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
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);