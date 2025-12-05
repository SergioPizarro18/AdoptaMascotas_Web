// Datos de ejemplo para las novedades
let newsData = [
  {
    id: 1,
    title: "¡Rescatada! Conoce a Lila, nuestra nueva inquilina",
    date: "2025-02-10",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=800&fit=crop",
    category: "Rescate",
    description: `Lila, una perrita mestiza de aproximadamente 8 meses, fue encontrada en un parque local con signos de deshidratación. Gracias a un vecino que llamó al refugio, pudimos atenderla a tiempo.`,
    fullDescription: `Lila, una perrita mestiza de aproximadamente 8 meses, fue encontrada en un parque local con signos de deshidratación. Gracias a un vecino que llamó al refugio, pudimos atenderla a tiempo. 

Ahora recibe cuidados veterinarios especializados, está completamente estable y muy cariñosa con el equipo. Ha hecho amistades con otros perros en el refugio y disfruta mucho de los paseos diarios. Su recuperación ha sido rápida gracias a la dedicación de nuestro equipo médico.

Lila está lista para encontrar un hogar amoroso que le brinde la segunda oportunidad que merece.`,
    animal: {
      name: "Lila",
      species: "Perro mestizo",
      age: "8 meses",
      color: "Café y blanco",
      weight: "12 kg",
      vaccinated: true,
      neutered: false
    },
    location: "Refugio Central - Lima, Perú",
    contact: "+51 930 213 687",
    views: 1250,
    cta: "Ver disponibles para adoptar",
    featured: true
  },
  {
    id: 2,
    title: "Gran éxito en la Jornada de Adopción 2025",
    date: "2025-02-03",
    image: "https://scontent.flim9-1.fna.fbcdn.net/v/t1.6435-9/65550817_2355945938014442_8483795221287534592_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vtpbqjcGTJUQ7kNvwG71L9d&_nc_oc=AdmTGBoiwgto-AijxfrGkESo5X566sceCky_NkOYVek3T3fpUWrO9ZjBUlzFV14ioBO0PDDW-KE5-CHLEVBIMh_g&_nc_zt=23&_nc_ht=scontent.flim9-1.fna&_nc_gid=oWK7LazbFLKmMuHKudkw2w&oh=00_Afmx7KSermFMKRnKRRUskGldvdoQbRKQNlWtUIVeX_ZS8w&oe=69595D75 ",
    category: "Evento",
    description: `El pasado fin de semana realizamos nuestra primera jornada de adopción, logrando que 18 peluditos encuentren un nuevo hogar lleno de amor.`,
    fullDescription: `El pasado fin de semana realizamos nuestra primera jornada de adopción del 2025, logrando que 18 peluditos encuentren un nuevo hogar lleno de amor.

Fue un día emocionante donde familias enteras se acercaron para conocer a nuestros rescatados y darles una segunda oportunidad. Desde temprano en la mañana, el refugio se llenó de energía y entusiasmo. 

Resultados:
• 18 adopciones exitosas
• 45 familias visitantes
• 12 solicitudes para futuras adopciones
• Recaudación de $2,500 en donaciones

¡Gracias a todos los que hicieron posible este hermoso evento!`,
    event: {
      date: "2025-02-02",
      time: "09:00 - 17:00",
      location: "Parque Central de Lima",
      attendees: 45,
      adoptions: 18
    },
    location: "Parque Central, Lima",
    contact: "+51 930 213 687",
    views: 2100,
    cta: "Ayudar y colaborar",
    featured: false
  },
  {
    id: 3,
    title: "Nuevo integrante: Copito, pequeño pero valiente",
    date: "2025-01-28",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=800&fit=crop",
    category: "Rescate",
    description: `Copito, un gatito de 3 meses, fue encontrado dentro de una caja cerca del mercado local. Llegó desnutrido, pero ya recuperó energía.`,
    fullDescription: `Copito, un adorable gatito de apenas 3 meses, fue encontrado dentro de una caja de cartón abandonada cerca del mercado local. Llegó al refugio desnutrido y asustado, pero con nuestros cuidados ha recuperado toda su energía.

Su carácter juguetón y dulce ha conquistado a todos en el refugio. Es sociable con otros gatos y muy cariñoso con los humanos. Copito está listo para encontrar una familia que lo quiera como se merece.

Estado de salud: ✓ Desparasitado ✓ Examen veterinario completado ✓ Listo para adopción`,
    animal: {
      name: "Copito",
      species: "Gato",
      age: "3 meses",
      color: "Blanco y gris",
      weight: "0.8 kg",
      vaccinated: true,
      neutered: false
    },
    location: "Refugio Central - Lima, Perú",
    contact: "+51 930 213 687",
    views: 890,
    cta: "Ver disponibles para adoptar",
    featured: false
  },
  {
    id: 4,
    title: "Taller de cuidado responsable reunió a más de 60 personas",
    date: "2025-01-15",
    image: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?w=800&h=800&fit=crop",
    category: "Voluntariado",
    description: `Nuestro taller gratuito sobre bienestar animal educó a más de 60 asistentes. Hablamos sobre nutrición adecuada, primeros auxilios y la importancia de la esterilización responsable.`,
    fullDescription: `Nuestro taller gratuito sobre bienestar animal educó a más de 60 asistentes en la comunidad. El evento fue un éxito sin precedentes.

Temas cubiertos:
• Nutrición adecuada para perros y gatos
• Primeros auxilios en animales de compañía
• Importancia de la esterilización responsable
• Comportamiento animal y bienestar emocional
• Prevención de maltrato animal

Participantes: 62 personas
Edades: Desde 8 años hasta adultos mayores
Satisfacción: 98% de rating positivo

¡Gracias a todos por su participación activa!`,
    event: {
      date: "2025-01-15",
      duration: "4 horas",
      location: "Centro Comunitario",
      attendees: 62,
      topics: 5
    },
    location: "Centro Comunitario - Lima",
    contact: "+51 930 213 687",
    views: 650,
    cta: "Únete y colabora con nosotros",
    featured: false
  },
  {
    id: 5,
    title: "Amparo ya puede caminar nuevamente",
    date: "2025-02-06",
    image: "https://www.zooplus.es/magazine/wp-content/uploads/2023/03/Ano-de-perro-en-humano.webp",
    category: "Recuperación",
    description: `Amparo, atropellada hace un mes, ya logró dar sus primeros pasos gracias a fisioterapia constante. Su recuperación ha sido inspiradora.`,
    fullDescription: `Amparo, atropellada hace un mes en las calles de Lima, ya logró dar sus primeros pasos gracias a la fisioterapia constante y el amor del equipo del refugio.

Su recuperación ha sido inspiradora y demuestra que con amor y cuidado todo es posible. Amparo llegó a nosotros con fracturas graves en las extremidades traseras, pronóstico incierto y mucho miedo.

Hoy, después de 30 días de rehabilitación:
• Camina sin asistencia
• Juega con otros perros
• Come y duerme normalmente
• Recuperó su alegría

El tratamiento completo costó $1,800 USD. Seguimos recibiendo donaciones para completar su recuperación total.`,
    animal: {
      name: "Amparo",
      species: "Perro",
      age: "5 años",
      color: "Negro",
      weight: "18 kg",
      vaccinated: true,
      neutered: true,
      condition: "En recuperación"
    },
    location: "Centro Veterinario - Lima",
    contact: "+51 930 213 687",
    medicalCost: "$1,800 USD",
    views: 3200,
    cta: "Ayuda y contribuye",
    featured: false
  },
  {
    id: 6,
    title: "Llegaron donaciones gracias a la comunidad escolar",
    date: "2025-02-01",
    image: "https://elcomercio.pe/resizer/OTqZ59LbHW8G-pLfST4Jt4AyOio=/1486x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/FVJOZ7GU6JCSJIAECW3SW5NMOI.jpeg",
    category: "Donaciones",
    description: `Estudiantes organizaron una colecta que reunió alimento, medicinas y mantas. Su generosidad nos motiva a seguir trabajando.`,
    fullDescription: `¡Excelentes noticias! Estudiantes de la Institución Educativa "Amigos de los Animales" organizaron una colecta que reunió alimento, medicinas y mantas de abrigo para nuestro refugio.

Lo que se recolectó:
• 250 kg de alimento balanceado
• 45 medicinas diversas
• 30 mantas y cobertores
• Artículos de higiene y cuidado
• Valor total aproximado: $1,200

Su generosidad y compromiso nos motiva a seguir trabajando por los animales que más lo necesitan. ¡Mil gracias a toda la comunidad escolar!`,
    donation: {
      foodKg: 250,
      medicines: 45,
      blankets: 30,
      totalValue: "$1,200"
    },
    location: "Institución Educativa - Lima",
    contact: "+51 930 213 687",
    views: 1500,
    cta: "Haz tu donación",
    featured: false
  },
  {
    id: 7,
    title: "Pipo encontró un hogar lleno de amor",
    date: "2025-01-22",
    image: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/7NAMJXZFBVAV7HTNRIBOQ6YCFQ.jpg",
    category: "Adopción",
    description: `Después de 7 meses en el refugio, Pipo fue adoptado por una familia amorosa. Ver su alegría fue un momento inolvidable.`,
    fullDescription: `Después de 7 meses esperando en el refugio, nuestro querido Pipo finalmente encontró su hogar para siempre. Ver su alegría al salir con su nueva familia fue un momento inolvidable para todo nuestro equipo.

La historia de Pipo:
• Rescatado de las calles hace 1 año
• Pasó 7 meses en nuestro refugio esperando
• Fue adoptado por la familia López
• Ahora vive en una casa con jardín
• ¡Pipo es parte de una familia!

Recibimos fotos de Pipo jugando en su nuevo hogar. ¡Está felicísimo! Esta es la razón por la que hacemos lo que hacemos.`,
    animal: {
      name: "Pipo",
      species: "Perro",
      age: "4 años",
      color: "Marrón y blanco",
      weight: "15 kg",
      vaccinated: true,
      neutered: true
    },
    adoptionStory: {
      family: "Familia López",
      daysInRefuge: 210,
      adoptionDate: "2025-01-22"
    },
    location: "Refugio Central - Lima",
    contact: "+51 930 213 687",
    views: 2800,
    cta: "Ver disponibles para adoptar",
    featured: false
  },
  {
    id: 8,
    title: "Campaña de esterilización gratuita — Marzo 2025",
    date: "2025-03-02",
    image: "https://i0.wp.com/tierramarillano.cl/wp-content/uploads/2025/03/uproa-proyecto.jpg?fit=640%2C427&ssl=1",
    category: "Evento",
    description: `Anunciamos nuestra campaña anual de esterilización gratuita. Cupos limitados disponibles.`,
    fullDescription: `¡Excelente noticia! Anunciamos nuestra campaña anual de esterilización gratuita en colaboración con veterinarias locales.

Detalles del programa:
• Esterilización/castración completamente gratis
• Consulta veterinaria incluida
• Medicinas post-operatorias incluidas
• Cupos limitados (60 espacios)
• Personas de bajos recursos: prioridad

Beneficios:
✓ Controlar la población de animales callejeros
✓ Prevenir enfermedades reproductivas
✓ Mejorar comportamiento de mascotas
✓ Contribuir a la responsabilidad animal

Inscripciones: Del 3 al 10 de marzo
Procedimientos: Del 15 al 20 de marzo`,
    campaign: {
      slots: 60,
      startDate: "2025-03-03",
      endDate: "2025-03-10",
      procedureStart: "2025-03-15",
      cost: "GRATIS"
    },
    location: "Centro Veterinario - Lima",
    contact: "+51 930 213 687",
    views: 1900,
    cta: "Únete y colabora con nosotros",
    featured: false
  },
  {
    id: 9,
    title: "Tigre: de las calles a una segunda oportunidad",
    date: "2025-02-08",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&h=800&fit=crop",
    category: "Rescate",
    description: `Tigre fue hallado con una lesión y miedo extremo, pero ya está recuperándose. Con paciencia y amor, poco a poco está aprendiendo a confiar.`,
    fullDescription: `Tigre fue hallado en las calles con una profunda lesión en la pata delantera y miedo extremo a los humanos. Su estado era preocupante, pero no nos rendimos.

Proceso de recuperación:
Semana 1: Estabilización y tratamiento de herida
Semana 2: Terapia de comportamiento iniciada
Semana 3: Primeros pasos de confianza
Semana 4: Socialización con otros gatos

Hoy, después de 4 semanas:
✓ Herida cicatrizada
✓ Come de nuestras manos
✓ Ronronea cuando lo acariciamos
✓ Juega con juguetes
✓ Listo para adopción responsable`,
    animal: {
      name: "Tigre",
      species: "Gato",
      age: "2 años",
      color: "Naranja atigrado",
      weight: "3.5 kg",
      vaccinated: true,
      neutered: false,
      specialNeeds: "Requiere persona paciente"
    },
    location: "Refugio Central - Lima",
    contact: "+51 930 213 687",
    views: 1120,
    cta: "Ver disponibles para adoptar",
    featured: false
  },
  {
    id: 10,
    title: "Nueva alianza con veterinaria local",
    date: "2025-01-30",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=800&fit=crop",
    category: "Comunidad",
    description: `La veterinaria Patitas Saludables atenderá gratuitamente a nuestros rescatados. Esta alianza nos permitirá brindar mejor atención.`,
    fullDescription: `¡Tenemos excelentes noticias! La veterinaria "Patitas Saludables" se ha aliado oficialmente con nuestro refugio para brindar atención médica completamente gratuita a todos nuestros rescatados.

Servicios incluidos:
• Consultas veterinarias
• Vacunaciones
• Desparasitación
• Cirugías de emergencia
• Tratamientos especializados

Beneficios para el refugio:
• Ahorro de $500-800 mensuales
• Mejor atención médica para nuestros animales
• Mayor alcance en nuestras campañas
• Posibilidad de ayudar a más animales callejeros

Contacto de la veterinaria:
Dirección: Av. Principal 1234, Lima
Teléfono: +51 987 654 321
Horario: Lunes a Domingo, 8:00 AM - 8:00 PM`,
    partnership: {
      name: "Veterinaria Patitas Saludables",
      phone: "+51 987 654 321",
      address: "Av. Principal 1234, Lima",
      hours: "Lunes-Domingo 8:00-20:00",
      services: 6
    },
    location: "Av. Principal 1234, Lima",
    contact: "+51 930 213 687",
    views: 980,
    cta: "Únete y colabora con nosotros",
    featured: false
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
  document.getElementById('modalDescription').textContent = news.fullDescription || news.description.trim();
  document.getElementById('modalCTA').textContent = news.cta;
  document.getElementById('modalCTA').onclick = () => handleNewsCTA(news.id);

  // Calcular estadísticas
  const viewCount = news.views || Math.floor(Math.random() * 500) + 100;
  const readTime = Math.ceil((news.fullDescription || news.description).split(' ').length / 200);
  
  document.getElementById('viewCount').textContent = viewCount;
  document.getElementById('readTime').textContent = `${readTime} min de lectura`;
  
  // Mostrar stats
  document.getElementById('stat-views').style.display = 'flex';
  document.getElementById('stat-time').style.display = 'flex';

  // Agregar información adicional según categoría
  const extraInfoContainer = document.getElementById('modalExtraInfo');
  extraInfoContainer.innerHTML = '';

  if (news.animal) {
    const animalSection = document.getElementById('modalAnimal');
    animalSection.style.display = 'block';
    document.getElementById('animalName').textContent = news.animal.name;
    document.getElementById('animalSpecies').textContent = news.animal.species;
    document.getElementById('animalAge').textContent = news.animal.age;
  } else {
    document.getElementById('modalAnimal').style.display = 'none';
  }

  // Agregar información adicional específica
  if (news.event) {
    extraInfoContainer.innerHTML += `
      <div class="extra-info-box">
        <h3>📍 Detalles del Evento</h3>
        <p><strong>Fecha:</strong> ${formatDate(news.event.date)}</p>
        <p><strong>Hora:</strong> ${news.event.time || 'Por confirmar'}</p>
        <p><strong>Ubicación:</strong> ${news.event.location}</p>
        <p><strong>Asistentes:</strong> ${news.event.attendees} personas</p>
        ${news.event.adoptions ? `<p><strong>Adopciones:</strong> ${news.event.adoptions}</p>` : ''}
        ${news.event.topics ? `<p><strong>Temas:</strong> ${news.event.topics}</p>` : ''}
      </div>
    `;
  }

  if (news.campaign) {
    extraInfoContainer.innerHTML += `
      <div class="extra-info-box">
        <h3>🎯 Campaña</h3>
        <p><strong>Cupos disponibles:</strong> ${news.campaign.slots}</p>
        <p><strong>Inscripciones:</strong> ${formatDate(news.campaign.startDate)} - ${formatDate(news.campaign.endDate)}</p>
        <p><strong>Procedimientos:</strong> A partir del ${formatDate(news.campaign.procedureStart)}</p>
        <p><strong>Costo:</strong> ${news.campaign.cost}</p>
      </div>
    `;
  }

  if (news.donation) {
    extraInfoContainer.innerHTML += `
      <div class="extra-info-box">
        <h3>🎁 Donaciones Recolectadas</h3>
        <p><strong>Alimento:</strong> ${news.donation.foodKg} kg</p>
        <p><strong>Medicinas:</strong> ${news.donation.medicines} unidades</p>
        <p><strong>Mantas:</strong> ${news.donation.blankets}</p>
        <p><strong>Valor total:</strong> ${news.donation.totalValue}</p>
      </div>
    `;
  }

  if (news.medicalCost) {
    extraInfoContainer.innerHTML += `
      <div class="extra-info-box">
        <h3>💊 Costo del Tratamiento</h3>
        <p><strong>Inversión total:</strong> ${news.medicalCost}</p>
        <p>Ayuda a Amparo a completar su recuperación con tu donación.</p>
      </div>
    `;
  }

  if (news.partnership) {
    extraInfoContainer.innerHTML += `
      <div class="extra-info-box">
        <h3>🤝 Información de la Alianza</h3>
        <p><strong>Nombre:</strong> ${news.partnership.name}</p>
        <p><strong>Teléfono:</strong> ${news.partnership.phone}</p>
        <p><strong>Dirección:</strong> ${news.partnership.address}</p>
        <p><strong>Horario:</strong> ${news.partnership.hours}</p>
      </div>
    `;
  }

  if (news.location || news.contact) {
    extraInfoContainer.innerHTML += `
      <div class="extra-info-box contact-box">
        <h3>📞 Contacto</h3>
        ${news.location ? `<p><strong>📍 Ubicación:</strong> ${news.location}</p>` : ''}
        ${news.contact ? `<p><strong>📱 Teléfono:</strong> ${news.contact}</p>` : ''}
      </div>
    `;
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
  
  // Redireccionar según la categoría
  if (news.category === "Rescate" || news.category === "Adopción") {
    // Animales - ir a Adopta.html
    window.location.href = "/Adopta.html";
  } else if (news.category === "Donaciones") {
    // Solo Donaciones - ir a Consultas.html
    window.location.href = "/Consultas.html";
  } else if (news.category === "Recuperación" || news.category === "Evento" || news.category === "Voluntariado" || news.category === "Comunidad") {
    // Recuperación, Eventos y comunidad - ir a Ayudanos.html
    window.location.href = "/Ayudanos.html";
  } else {
    // Por defecto - ir a Inicio
    window.location.href = "/Inicio.html";
  }
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
// Cambia esta línea para ser más específico:
const closeBtn = document.querySelector("#loginModal .modal-close");
const loginForm = document.getElementById("loginForm");
const loginUsuario = document.getElementById("loginUsuario");
const loginPassword = document.getElementById("loginPassword");
const loginUsuarioError = document.getElementById("loginUsuarioError");
const loginPasswordError = document.getElementById("loginPasswordError");

// Verificar que los elementos existen antes de asignar eventos
if (loginBtn && modal && closeBtn) {

    // Abrir modal
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevenir comportamiento por defecto
        modal.style.display = "flex";
    });

    // Cerrar modal con X
    closeBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevenir comportamiento por defecto
        e.stopPropagation(); // Evitar propagación del evento
        modal.style.display = "none";
    });

    // Cerrar modal haciendo clic en el fondo sombreado
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

} else {
    console.warn("⚠️ Advertencia: No se encontró alguno de los elementos del modal.");
}

// Resto del código de validación...
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

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const usuario = loginUsuario.value.trim();
        const password = loginPassword.value;
        
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