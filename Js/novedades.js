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

    newsContainer.appendChild(card);
  });
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
});