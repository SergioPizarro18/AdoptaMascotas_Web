// Función de búsqueda
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        const title = card.querySelector('.category-title').textContent.toLowerCase();
        const description = card.querySelector('.category-description').textContent.toLowerCase();
        const links = Array.from(card.querySelectorAll('.category-links a'))
            .map(link => link.textContent.toLowerCase())
            .join(' ');
        
        const content = title + ' ' + description + ' ' + links;
        
        if (content.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Si no hay resultados, mostrar mensaje
    const visibleCards = Array.from(categoryCards).filter(card => card.style.display !== 'none');
    if (visibleCards.length === 0 && searchTerm !== '') {
        showNoResults();
    } else {
        hideNoResults();
    }
});

// Función para búsquedas sugeridas
function searchQuery(query) {
    document.getElementById('searchInput').value = query;
    document.getElementById('searchInput').dispatchEvent(new Event('input'));
    
    // Scroll suave a las categorías
    document.querySelector('.categories-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Mostrar mensaje de "sin resultados"
function showNoResults() {
    let noResultsDiv = document.getElementById('noResults');
    
    if (!noResultsDiv) {
        noResultsDiv = document.createElement('div');
        noResultsDiv.id = 'noResults';
        noResultsDiv.className = 'no-results-message';
        noResultsDiv.innerHTML = `
            <div class="no-results-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
            </div>
            <h3>No encontramos resultados</h3>
            <p>Intenta con otros términos de búsqueda o envíanos una consulta directa.</p>
            <a href="/contactanos.html" class="btn-no-results">Enviar consulta</a>
        `;
        document.querySelector('.categories-grid').appendChild(noResultsDiv);
    }
    
    noResultsDiv.style.display = 'block';
}

function hideNoResults() {
    const noResultsDiv = document.getElementById('noResults');
    if (noResultsDiv) {
        noResultsDiv.style.display = 'none';
    }
}

// Enter key en búsqueda
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.querySelector('.categories-section').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
});

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