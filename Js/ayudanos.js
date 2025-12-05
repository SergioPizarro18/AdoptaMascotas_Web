function selectPlan(planName) {
    alert(`¡Gracias por elegir el Plan ${planName}! En breve te contactaremos para completar tu suscripción.`);
}


// Toggle del menú de ayuda con click
document.addEventListener('DOMContentLoaded', function() {
    const helpDropdown = document.querySelector('.help-dropdown');
    const helpButton = document.querySelector('.btn-help-circle');
    const helpMenu = document.querySelector('.help-dropdown-menu');

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
});

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



//CHATBOT
// ========== CHATBOT ==========
const chatButton = document.getElementById('chatButton');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatBody = document.getElementById('chatBody');
const chatBadge = document.querySelector('.chat-badge');

chatButton.addEventListener('click', () => {
    chatWindow.classList.add('active');
    chatButton.style.display = 'none';
    // Ocultar badge al abrir
    if (chatBadge) {
        chatBadge.style.display = 'none';
    }
});

chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('active');
    chatButton.style.display = 'flex';
});

function sendMessage() {
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    // Crear mensaje enviado
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
    
    // Limpiar input
    chatInput.value = '';
    
    // Scroll al final
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Simular respuesta automática después de 1.5 segundos
    setTimeout(() => {
        autoReply();
    }, 1500);
}

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
    
    // Scroll al final
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Enviar con botón
chatSend.addEventListener('click', sendMessage);

// Enviar con Enter
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Simular nueva notificación después de 5 segundos (solo para demo)
setTimeout(() => {
    if (!chatWindow.classList.contains('active') && chatBadge) {
        const currentBadge = parseInt(chatBadge.textContent);
        chatBadge.textContent = currentBadge + 1;
        chatBadge.style.display = 'flex';
        
        // Animación de shake
        chatButton.style.animation = 'shake 0.5s';
        setTimeout(() => {
            chatButton.style.animation = '';
        }, 500);
    }
}, 5000);

// Animación shake para el CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);