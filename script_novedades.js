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
    cta: "Aplica para adoptarla"
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
      gracias a fisioterapia constante.
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
    `,
    cta: "Apoya nuestros convenios"
  }
];


// Elementos del DOM
const newsContainer = document.getElementById("newsContainer");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalDate = document.getElementById("modalDate");
const modalImage = document.getElementById("modalImage");
const modalCTA = document.getElementById("modalCTA");
const closeModal = document.getElementById("closeModal");


// Función para crear resumen automático
function getSummary(text, max = 120) {
  const clean = text.replace(/\s+/g, " ").trim(); // limpia saltos
  return clean.length > max ? clean.slice(0, max) + "..." : clean;
}


// Renderizar tarjetas de novedades
function renderNews() {
  newsContainer.innerHTML = "";

  newsData.forEach(news => {
    const card = document.createElement("div");
    card.classList.add("news-card");

    // Si es noticia de animal, mostramos info del animal
    let previewInfo = "";

    if (news.animal) {
      previewInfo = `${news.animal.name} — ${news.animal.species}, ${news.animal.age}`;
    } else {
      previewInfo = news.category; // Evento, donación, comunidad, etc.
    }

    card.innerHTML = `
      <img src="${news.image}" alt="${news.title}">
      <h3>${news.title}</h3>
      <p class="preview">${previewInfo}</p>
      <span class="news-date">${news.date}</span>
    `;

    card.addEventListener("click", () => openModal(news));
    newsContainer.appendChild(card);
  });
}

// Abrir modal
function openModal(news) {
  modalTitle.textContent = news.title;
  modalDescription.textContent = news.description.trim();
  modalDate.textContent = news.date;
  modalImage.src = news.image;

  // Mostrar u ocultar CTA dinámico
  if (news.cta) {
    modalCTA.textContent = news.cta;
    modalCTA.classList.remove("hidden");
  } else {
    modalCTA.classList.add("hidden");
  }

  modal.classList.remove("hidden");
}


// Cerrar modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Cerrar modal haciendo clic fuera
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});


// Inicializar
renderNews();
