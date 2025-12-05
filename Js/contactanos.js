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
    // MENÚ DROPDOWN DE AYUDA
    // ============================================
    const helpButton = document.querySelector('.btn-help-circle');
    const helpMenu = document.querySelector('.help-dropdown-menu');
    const helpDropdown = document.querySelector('.help-dropdown');

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
    // FORMULARIO DE CONTACTO
    // ============================================
    const form = document.getElementById('contactForm');
    
    if (!form) {
        console.error('No se encontró el formulario');
        return;
    }

    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const asuntoSelect = document.getElementById('asunto');
    const mensajeTextarea = document.getElementById('mensaje');
    const privacidadCheckbox = document.getElementById('privacidad');
    const successMessage = document.getElementById('successMessage');
    const characterCounter = document.getElementById('mensaje-counter');

    // ============================================
    // CONTADOR DE CARACTERES
    // ============================================
    if (mensajeTextarea && characterCounter) {
        mensajeTextarea.addEventListener('input', function() {
            const length = this.value.length;
            characterCounter.textContent = `${length}/1000`;
            
            if (length > 1000) {
                characterCounter.style.color = '#FF6B6B';
                characterCounter.style.fontWeight = 'bold';
            } else if (length > 900) {
                characterCounter.style.color = '#FF9F66';
            } else {
                characterCounter.style.color = '#999';
                characterCounter.style.fontWeight = 'normal';
            }
        });
    }

    // ============================================
    // AUTO-FORMATO PARA TELÉFONO
    // ============================================
    if (telefonoInput) {
        telefonoInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            
            if (value.startsWith('51')) {
                value = '+' + value;
            }
            
            if (value.startsWith('+51') && value.length > 3) {
                const numbers = value.substring(3);
                if (numbers.length <= 3) {
                    value = '+51 ' + numbers;
                } else if (numbers.length <= 6) {
                    value = '+51 ' + numbers.substring(0, 3) + ' ' + numbers.substring(3);
                } else {
                    value = '+51 ' + numbers.substring(0, 3) + ' ' + numbers.substring(3, 6) + ' ' + numbers.substring(6, 9);
                }
            }
            
            this.value = value;
        });
    }

    // ============================================
    // VALIDACIÓN EN TIEMPO REAL
    // ============================================
    if (nombreInput) {
        nombreInput.addEventListener('blur', validateNombre);
        nombreInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateNombre();
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', validateEmail);
        emailInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateEmail();
            }
        });
    }

    if (telefonoInput) {
        telefonoInput.addEventListener('blur', validateTelefono);
        telefonoInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateTelefono();
            }
        });
    }

    if (asuntoSelect) {
        asuntoSelect.addEventListener('change', validateAsunto);
    }

    if (mensajeTextarea) {
        mensajeTextarea.addEventListener('blur', validateMensaje);
        mensajeTextarea.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateMensaje();
            }
        });
    }

    if (privacidadCheckbox) {
        privacidadCheckbox.addEventListener('change', validatePrivacidad);
    }

    // ============================================
    // FUNCIONES DE VALIDACIÓN
    // ============================================
    function validateNombre() {
        if (!nombreInput) return true;
        
        const nombre = nombreInput.value.trim();
        const errorSpan = document.getElementById('nombre-error');
        
        if (nombre === '') {
            showError(nombreInput, errorSpan, 'El nombre completo es obligatorio');
            return false;
        } else if (nombre.length < 3) {
            showError(nombreInput, errorSpan, 'El nombre debe tener al menos 3 caracteres');
            return false;
        } else if (!/^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/.test(nombre)) {
            showError(nombreInput, errorSpan, 'El nombre solo puede contener letras');
            return false;
        } else {
            showSuccess(nombreInput, errorSpan);
            return true;
        }
    }

    function validateEmail() {
        if (!emailInput) return true;
        
        const email = emailInput.value.trim();
        const errorSpan = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            showError(emailInput, errorSpan, 'El correo electrónico es obligatorio');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, errorSpan, 'Ingresa un correo válido (ejemplo: tu@email.com)');
            return false;
        } else {
            showSuccess(emailInput, errorSpan);
            return true;
        }
    }

    function validateTelefono() {
        if (!telefonoInput) return true;
        
        const telefono = telefonoInput.value.trim();
        const errorSpan = document.getElementById('telefono-error');
        
        if (telefono === '') {
            clearValidation(telefonoInput, errorSpan);
            return true;
        }
        
        const telefonoRegex = /^\+?51\s?\d{3}\s?\d{3}\s?\d{3}$/;
        
        if (!telefonoRegex.test(telefono)) {
            showError(telefonoInput, errorSpan, 'Formato válido: +51 999 999 999');
            return false;
        } else {
            showSuccess(telefonoInput, errorSpan);
            return true;
        }
    }

    function validateAsunto() {
        if (!asuntoSelect) return true;
        
        const asunto = asuntoSelect.value;
        const errorSpan = document.getElementById('asunto-error');
        
        if (asunto === '') {
            showError(asuntoSelect, errorSpan, 'Por favor selecciona un asunto');
            return false;
        } else {
            showSuccess(asuntoSelect, errorSpan);
            return true;
        }
    }

    function validateMensaje() {
        if (!mensajeTextarea) return true;
        
        const mensaje = mensajeTextarea.value.trim();
        const errorSpan = document.getElementById('mensaje-error');
        
        if (mensaje === '') {
            showError(mensajeTextarea, errorSpan, 'El mensaje es obligatorio');
            return false;
        } else if (mensaje.length < 10) {
            showError(mensajeTextarea, errorSpan, 'El mensaje debe tener al menos 10 caracteres');
            return false;
        } else if (mensaje.length > 1000) {
            showError(mensajeTextarea, errorSpan, 'El mensaje no puede exceder 1000 caracteres');
            return false;
        } else {
            showSuccess(mensajeTextarea, errorSpan);
            return true;
        }
    }

    function validatePrivacidad() {
        if (!privacidadCheckbox) return true;
        
        const errorSpan = document.getElementById('privacidad-error');
        
        if (!privacidadCheckbox.checked) {
            if (errorSpan) {
                errorSpan.textContent = 'Debes aceptar la política de privacidad';
                errorSpan.classList.add('show');
            }
            return false;
        } else {
            if (errorSpan) {
                errorSpan.textContent = '';
                errorSpan.classList.remove('show');
            }
            return true;
        }
    }

    function showError(input, errorSpan, message) {
        if (!input) return;
        
        input.classList.remove('success');
        input.classList.add('error');
        
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.classList.add('show');
        }
        
        input.setAttribute('aria-invalid', 'true');
    }

    function showSuccess(input, errorSpan) {
        if (!input) return;
        
        input.classList.remove('error');
        input.classList.add('success');
        
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.classList.remove('show');
        }
        
        input.setAttribute('aria-invalid', 'false');
    }

    function clearValidation(input, errorSpan) {
        if (!input) return;
        
        input.classList.remove('error', 'success');
        
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.classList.remove('show');
        }
        
        input.removeAttribute('aria-invalid');
    }

    // ============================================
    // ENVÍO DEL FORMULARIO
    // ============================================
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        console.log('🚀 Intentando enviar formulario...');
        
        // Ocultar mensaje de éxito previo
        if (successMessage) {
            successMessage.style.display = 'none';
        }
        
        // Validar todos los campos
        const isNombreValid = validateNombre();
        const isEmailValid = validateEmail();
        const isTelefonoValid = validateTelefono();
        const isAsuntoValid = validateAsunto();
        const isMensajeValid = validateMensaje();
        const isPrivacidadValid = validatePrivacidad();
        
        console.log('Validaciones:', {
            nombre: isNombreValid,
            email: isEmailValid,
            telefono: isTelefonoValid,
            asunto: isAsuntoValid,
            mensaje: isMensajeValid,
            privacidad: isPrivacidadValid
        });
        
        // Si hay errores, hacer scroll al primero
        if (!isNombreValid || !isEmailValid || !isTelefonoValid || !isAsuntoValid || !isMensajeValid || !isPrivacidadValid) {
            console.log('❌ Hay errores en el formulario');
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }
        
        console.log('✅ Formulario válido, procediendo a enviar...');
        
        // Todo válido, proceder con envío
        const submitButton = form.querySelector('button[type="submit"]');
        
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = `
                <svg class="spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
                Enviando...
            `;
        }
        
        // Simular envío
        setTimeout(function() {
            const formData = {
                nombre: nombreInput ? nombreInput.value.trim() : '',
                email: emailInput ? emailInput.value.trim() : '',
                telefono: telefonoInput ? telefonoInput.value.trim() : '',
                asunto: asuntoSelect ? asuntoSelect.value : '',
                mensaje: mensajeTextarea ? mensajeTextarea.value.trim() : ''
            };
            
            console.log('📧 Formulario enviado con éxito:', formData);
            
            // MOSTRAR MENSAJE DE ÉXITO
            if (successMessage) {
                successMessage.style.display = 'flex';
                successMessage.style.opacity = '1';
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            // LIMPIAR FORMULARIO
            form.reset();
            
            // Limpiar validaciones
            document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
                input.classList.remove('success', 'error');
                input.removeAttribute('aria-invalid');
            });
            
            document.querySelectorAll('.error-message').forEach(span => {
                span.textContent = '';
                span.classList.remove('show');
            });
            
            // Resetear contador
            if (characterCounter) {
                characterCounter.textContent = '0/1000';
                characterCounter.style.color = '#999';
                characterCounter.style.fontWeight = 'normal';
            }
            
            // Restaurar botón
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Enviar Consulta
                `;
            }
            
            // Ocultar mensaje después de 7 segundos
            setTimeout(function() {
                if (successMessage) {
                    successMessage.style.opacity = '0';
                    setTimeout(function() {
                        successMessage.style.display = 'none';
                        successMessage.style.opacity = '1';
                    }, 300);
                }
            }, 7000);
            
        }, 1500);
    });

    // ============================================
    // BOTÓN RESET
    // ============================================
    const resetButton = form.querySelector('button[type="reset"]');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
                input.classList.remove('success', 'error');
                input.removeAttribute('aria-invalid');
            });
            
            document.querySelectorAll('.error-message').forEach(span => {
                span.textContent = '';
                span.classList.remove('show');
            });
            
            if (characterCounter) {
                characterCounter.textContent = '0/1000';
                characterCounter.style.color = '#999';
                characterCounter.style.fontWeight = 'normal';
            }
            
            if (successMessage) {
                successMessage.style.display = 'none';
            }
            
            console.log('🧹 Formulario limpiado');
        });
    }

}); // FIN DEL DOMContentLoaded

// ============================================
// FUNCIONES GLOBALES (fuera del DOMContentLoaded)
// ============================================

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
    .spin {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);