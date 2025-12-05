// Datos de ejemplo para las novedades
let newsData = [
  {
    id: 1,
    title: "¡Rescatada! Conoce a Lila, nuestra nueva inquilina",
    date: "2025-02-10",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=800&fit=crop",
    category: "Rescate",
    description: `
      Lila, una perrita mestiza de aproximadamente 8 meses, fue encontrada
      en un parque local con signos de deshidratación. Gracias a un vecino
      que llamó al refugio, pudimos atenderla a tiempo. Ahora recibe cuidados,
      está estable y muy cariñosa.
    `,
    animal: {
      name: "Lila",
      species: "Perro mestizo",
      age: "8 meses"
    },
    cta: "Aplica para adoptarla",
    featured: true
  },
  {
    id: 2,
    title: "Gran éxito en la Jornada de Adopción 2025",
    date: "2025-02-03",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlLJEoo-TBfGs4TW6f60wPYwUjkIC2Mc6cA&s",
    category: "Evento",
    description: `
      El pasado fin de semana realizamos nuestra primera jornada de adopción,
      logrando que 18 peluditos encuentren un nuevo hogar lleno de amor.
      Fue un día emocionante donde familias enteras se acercaron para conocer
      a nuestros rescatados y darles una segunda oportunidad.
    `,
    cta: "Ver más eventos"
  },
  {
    id: 3,
    title: "Nuevo integrante: Copito, pequeño pero valiente",
    date: "2025-01-28",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=800&fit=crop",
    category: "Rescate",
    description: `
      Copito, un gatito de 3 meses, fue encontrado dentro de una caja cerca
      del mercado local. Llegó desnutrido, pero ya recuperó energía.
      Su carácter juguetón y dulce ha conquistado a todos en el refugio.
    `,
    animal: {
      name: "Copito",
      species: "Gato",
      age: "3 meses"
    },
    cta: "Conócelo para adoptarlo"
  },
  {
    id: 4,
    title: "Taller de cuidado responsable reunió a más de 60 personas",
    date: "2025-01-15",
    image: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?w=800&h=800&fit=crop",
    category: "Voluntariado",
    description: `
      Nuestro taller gratuito sobre bienestar animal educó a más de 60 asistentes.
      Hablamos sobre nutrición adecuada, primeros auxilios y la importancia
      de la esterilización responsable.
    `,
    cta: "Regístrate al próximo taller"
  },
  {
    id: 5,
    title: "Amparo ya puede caminar nuevamente",
    date: "2025-02-06",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&h=800&fit=crop",
    category: "Recuperación",
    description: `
      Amparo, atropellada hace un mes, ya logró dar sus primeros pasos
      gracias a fisioterapia constante. Su recuperación ha sido inspiradora
      y demuestra que con amor y cuidado todo es posible.
    `,
    animal: {
      name: "Amparo",
      species: "Perro",
      age: "5 años"
    },
    cta: "Dona para su tratamiento"
  },
  {
    id: 6,
    title: "Llegaron donaciones gracias a la comunidad escolar",
    date: "2025-02-01",
    image: "https://elcomercio.pe/resizer/OTqZ59LbHW8G-pLfST4Jt4AyOio=/1486x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FVJOZ7GU6JCSJIAECW3SW5NMOI.jpeg",
    category: "Donaciones",
    description: `
      Estudiantes organizaron una colecta que reunió alimento, medicinas y mantas.
      Su generosidad y compromiso nos motiva a seguir trabajando por los
      animales que más lo necesitan.
    `,
    cta: "Conoce cómo donar"
  },
  {
    id: 7,
    title: "Pipo encontró un hogar lleno de amor",
    date: "2025-01-22",
    image: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/7NAMJXZFBVAV7HTNRIBOQ6YCFQ.jpg",
    category: "Adopción",
    description: `
      Después de 7 meses en el refugio, Pipo fue adoptado por una familia amorosa.
      Ver su alegría al salir con su nueva familia fue un momento inolvidable
      para todo nuestro equipo.
    `,
    animal: {
      name: "Pipo",
      species: "Perro",
      age: "4 años"
    },
    cta: "Ver historias de adopción"
  },
  {
    id: 8,
    title: "Campaña de esterilización gratuita — Marzo 2025",
    date: "2025-03-02",
    image: "https://i0.wp.com/tierramarillano.cl/wp-content/uploads/2025/03/uproa-proyecto.jpg?fit=640%2C427&ssl=1",
    category: "Evento",
    description: `
      Anunciamos nuestra campaña anual de esterilización gratuita.
      Cupos limitados disponibles. Ayúdanos a controlar la población
      de animales callejeros de manera responsable.
    `,
    cta: "Inscríbete aquí"
  },
  {
    id: 9,
    title: "Tigre: de las calles a una segunda oportunidad",
    date: "2025-02-08",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&h=800&fit=crop",
    category: "Rescate",
    description: `
      Tigre fue hallado con una lesión y miedo extremo, pero ya está recuperándose.
      Con paciencia y amor, poco a poco está aprendiendo a confiar nuevamente
      en los humanos.
    `,
    animal: {
      name: "Tigre",
      species: "Gato",
      age: "2 años"
    },
    cta: "Conoce su proceso"
  },
  {
    id: 10,
    title: "Nueva alianza con veterinaria local",
    date: "2025-01-30",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=800&fit=crop",
    category: "Comunidad",
    description: `
      La veterinaria Patitas Saludables atenderá gratuitamente a nuestros rescatados.
      Esta alianza nos permitirá brindar mejor atención médica a todos
      nuestros animalitos.
    `,
    cta: "Apoya nuestros convenios"
  }
];

// Función para crear resumen automático
function getSummary(text, max = 150) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > max ? clean.slice(0, max) + "..." : clean;
}

// Función para formatear fecha
function formatDate(dateString) {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const date = new Date(dateString);
  return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

// Renderizar tarjetas de novedades
function renderNews() {
  const newsContainer = document.getElementById("newsContainer");
  newsContainer.innerHTML = "";

  newsData.forEach((news, index) => {
    const card = document.createElement("div");
    card.classList.add("news-card");
    
    // Marcar la primera noticia como destacada
    if (news.featured || index === 0) {
      card.classList.add("featured");
    }

    // Ajustar delay de animación
    card.style.animationDelay = `${index * 0.1}s`;

    // Crear contenido de la tarjeta
    const summary = getSummary(news.description);
    const formattedDate = formatDate(news.date);

    card.innerHTML = `
      <img src="${news.image}" alt="${news.title}">
      <div class="news-content">
        <div class="news-date">
          📅 ${formattedDate}
        </div>
        <h3 class="news-title">${news.title}</h3>
        <p class="news-description">${summary}</p>
        <div class="news-footer">
          <span class="news-category">${news.category}</span>
          <button class="news-cta" onclick="handleNewsCTA(${news.id})">${news.cta}</button>
        </div>
      </div>
    `;

    // Agregar evento de clic a toda la tarjeta para abrir el modal
    card.addEventListener('click', function(e) {
      if (!e.target.closest('.news-cta')) {
        openNewsModal(news.id);
      }
    });

    newsContainer.appendChild(card);
  });
}

// Función para abrir el modal con detalles de la noticia
function openNewsModal(newsId) {
  const news = newsData.find(n => n.id === newsId);
  if (!news) return;

  const modal = document.getElementById('newsModal');
  const formattedDate = formatDate(news.date);

  // Llenar datos del modal
  document.getElementById('modalImage').src = news.image;
  document.getElementById('modalImage').alt = news.title;
  document.getElementById('modalTitle').textContent = news.title;
  document.getElementById('modalDate').textContent = `📅 ${formattedDate}`;
  document.getElementById('modalCategory').textContent = news.category;
  document.getElementById('modalDescription').textContent = news.description.trim();
  document.getElementById('modalCTA').textContent = news.cta;
  document.getElementById('modalCTA').onclick = () => handleNewsCTA(news.id);

  // Calcular estadísticas
  const viewCount = Math.floor(Math.random() * 500) + 100;
  const readTime = Math.ceil(news.description.split(' ').length / 200);
  
  document.getElementById('viewCount').textContent = viewCount;
  document.getElementById('readTime').textContent = `${readTime} min de lectura`;
  
  // Mostrar stats
  document.getElementById('stat-views').style.display = 'flex';
  document.getElementById('stat-time').style.display = 'flex';

  // Mostrar información del animal si existe
  const animalSection = document.getElementById('modalAnimal');
  if (news.animal) {
    animalSection.style.display = 'block';
    document.getElementById('animalName').textContent = news.animal.name;
    document.getElementById('animalSpecies').textContent = news.animal.species;
    document.getElementById('animalAge').textContent = news.animal.age;
  } else {
    animalSection.style.display = 'none';
  }

  // Mostrar modal
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeNewsModal() {
  const modal = document.getElementById('newsModal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

// Función para compartir noticia
function shareNews() {
  const text = `Mira esta novedad del refugio Colitas: ${document.getElementById('modalTitle').textContent}`;
  if (navigator.share) {
    navigator.share({
      title: 'Colitas - Novedades',
      text: text,
      url: window.location.href
    }).catch(err => console.log('Error sharing:', err));
  } else {
    alert('Función de compartir no disponible en tu navegador');
  }
}

// Función para manejar los CTAs
function handleNewsCTA(newsId) {
  const news = newsData.find(n => n.id === newsId);
  
  // Aquí puedes implementar la lógica específica para cada tipo de acción
  if (news.category === "Rescate" && news.animal) {
    alert(`¡Te interesa ${news.animal.name}!\n\nEspecie: ${news.animal.species}\nEdad: ${news.animal.age}\n\nEn breve te contactaremos para coordinar una visita.`);
    // Redirigir a página de adopción
    // window.location.href = `/adopcion/${newsId}`;
  } else if (news.category === "Evento") {
    alert(`¡Gracias por tu interés en nuestros eventos!\n\nTe redirigiremos a la página de registro.`);
    // window.location.href = `/eventos/${newsId}`;
  } else if (news.category === "Donaciones" || news.category === "Recuperación") {
    alert(`¡Gracias por querer ayudar!\n\nTe redirigiremos a nuestra página de donaciones.`);
    // window.location.href = "/donaciones";
  } else {
    alert(`Más información sobre: ${news.title}`);
    // window.location.href = `/noticias/${newsId}`;
  }
  closeNewsModal();
}

// Toggle del menú de ayuda con click
document.addEventListener('DOMContentLoaded', function() {
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
      if (helpDropdown && !helpDropdown.contains(e.target)) {
        helpMenu.classList.remove('show');
      }
    });

    // Prevenir que el menú se cierre al hacer click dentro de él
    helpMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // Renderizar las noticias
  renderNews();

  // Cerrar modal al hacer click fuera de él
  const modal = document.getElementById('newsModal');
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeNewsModal();
    }
  });

  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeNewsModal();
    }
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