// Datos de novedades
const newsData = [
    {
        id: 1,
        title: "WUF: DE HÉROES A COMPAÑEROS, LA NUEVA VIDA QUE MERECEN",
        excerpt: "Después de años de servicio, estos perros héroes enfrentan su última y más importante misión: encontrar un hogar lleno de amor.",
        category: "adopcion",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=300&fit=crop",
        author: "Vielka Bahamonde",
        date: "5 nov",
        readTime: "3 min"
    },
    {
        id: 2,
        title: "WUF: CLUB WUF, UNA FORMA DE AMAR Y AYUDAR A LOS QUE MÁS LO NECESITAN",
        excerpt: "Porque cada wuf merece una oportunidad, Club WUF es la forma de unirse a la misión de rescatar, proteger y encontrar hogares.",
        category: "responsable",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&h=300&fit=crop",
        author: "Vielka Bahamonde",
        date: "5 nov",
        readTime: "4 min"
    },
    {
        id: 3,
        title: "WUF: CANELA, LA PERRITA RESCATADA QUE CONQUISTÓ A LA FAMILIA",
        excerpt: "Esta es la historia de Canela, una Wuf rescatada de un refugio donde más de 100 perros esperan un hogar.",
        category: "rescates",
        image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&h=300&fit=crop",
        author: "Vielka Bahamonde",
        date: "5 nov",
        readTime: "3 min"
    },
    {
        id: 4,
        title: "ADOPCIÓN RESPONSABLE: CÓMO PREPARAR TU HOGAR",
        excerpt: "Consejos esenciales para preparar tu casa antes de recibir a tu nuevo mejor amigo de cuatro patas.",
        category: "responsable",
        image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=300&fit=crop",
        author: "Equipo WUF",
        date: "3 nov",
        readTime: "5 min"
    },
    {
        id: 5,
        title: "EVENTO: GRAN FERIA DE ADOPCIÓN DE NOVIEMBRE",
        excerpt: "Únete a nuestra feria mensual donde más de 50 perritos y gatitos buscan una familia que los ame.",
        category: "eventos",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=300&fit=crop",
        author: "Equipo WUF",
        date: "1 nov",
        readTime: "2 min"
    },
    {
        id: 6,
        title: "LIFESTYLE: RUTINAS DE EJERCICIO CON TU PERRO",
        excerpt: "Mantente activo junto a tu mejor amigo con estas divertidas rutinas de ejercicio para ambos.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1544213118-94fe62ea1639?w=500&h=300&fit=crop",
        author: "Ana Torres",
        date: "30 oct",
        readTime: "4 min"
    },
    {
        id: 7,
        title: "HISTORIAS DE ÉXITO: MAX ENCONTRÓ SU HOGAR PARA SIEMPRE",
        excerpt: "La conmovedora historia de Max, un golden retriever que pasó 2 años en el refugio antes de encontrar a su familia perfecta.",
        category: "adopcion",
        image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&h=300&fit=crop",
        author: "María González",
        date: "28 oct",
        readTime: "4 min"
    },
    {
        id: 8,
        title: "SALUD CANINA: VACUNACIÓN Y CUIDADOS PREVENTIVOS",
        excerpt: "Todo lo que necesitas saber sobre el calendario de vacunación y los cuidados básicos para mantener a tu mascota saludable.",
        category: "responsable",
        image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500&h=300&fit=crop",
        author: "Dr. Carlos Ruiz",
        date: "26 oct",
        readTime: "6 min"
    },
    {
        id: 9,
        title: "RESCATE DE EMERGENCIA: 15 PERROS SALVADOS DE LA CALLE",
        excerpt: "Operativo de rescate masivo en zona urbana donde 15 perros fueron rescatados y están listos para adopción.",
        category: "rescates",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=300&fit=crop",
        author: "Equipo WUF",
        date: "24 oct",
        readTime: "3 min"
    }
];

/**
 * Renderiza las novedades en el grid
 * @param {string} filter - Categoría para filtrar ('all' para mostrar todas)
 */
function renderNews(filter = 'all') {
    const newsGrid = document.getElementById('newsGrid');
    
    // Filtrar noticias según la categoría seleccionada
    const filteredNews = filter === 'all' 
        ? newsData 
        : newsData.filter(news => news.category === filter);
    
    // Generar HTML para cada noticia
    newsGrid.innerHTML = filteredNews.map(news => `
        <article class="news-card" onclick="viewNews(${news.id})">
            <img src="${news.image}" alt="${news.title}" class="news-image">
            <div class="news-content">
                <div class="news-meta">
                    <div class="author-avatar">${news.author.charAt(0)}</div>
                    <span>${news.author}</span>
                    <span>•</span>
                    <span>${news.date}</span>
                    <span>•</span>
                    <span>${news.readTime}</span>
                </div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
                <span class="news-category">${getCategoryName(news.category)}</span>
            </div>
        </article>
    `).join('');
}

/**
 * Obtiene el nombre legible de una categoría
 * @param {string} category - Código de la categoría
 * @returns {string} Nombre de la categoría
 */
function getCategoryName(category) {
    const categories = {
        'adopcion': 'Adopción',
        'responsable': 'Tenencia Responsable',
        'lifestyle': 'Lifestyle',
        'eventos': 'Eventos',
        'rescates': 'Rescates'
    };
    return categories[category] || category;
}

/**
 * Toggle del menú de filtros en móvil
 */
function toggleFilter() {
    const filterContent = document.getElementById('filterContent');
    filterContent.classList.toggle('active');
}

/**
 * Función para ver los detalles de una noticia (placeholder)
 * @param {number} id - ID de la noticia
 */
function viewNews(id) {
    const news = newsData.find(n => n.id === id);
    if (news) {
        console.log('Ver noticia:', news);
        // Aquí puedes implementar la lógica para abrir un modal o navegar a otra página
        alert(`Abriendo: ${news.title}`);
    }
}

/**
 * Maneja los clics en las etiquetas de filtro
 */
function setupFilterListeners() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.filter-tag')) {
            const filterTag = e.target.closest('.filter-tag');
            
            // Remover clase active de todas las etiquetas
            document.querySelectorAll('.filter-tag').forEach(tag => {
                tag.classList.remove('active');
            });
            
            // Agregar clase active a la etiqueta clickeada
            filterTag.classList.add('active');
            
            // Obtener el filtro y renderizar
            const filter = filterTag.getAttribute('data-filter');
            renderNews(filter);
            
            // Scroll suave hacia las novedades en móvil
            if (window.innerWidth <= 1024) {
                document.querySelector('.news-section').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

/**
 * Setup del botón toggle en móvil
 */
function setupToggleButton() {
    const filterToggle = document.getElementById('filterToggle');
    if (filterToggle) {
        filterToggle.addEventListener('click', toggleFilter);
    }
}

/**
 * Inicializa la página cuando el DOM esté listo
 */
function init() {
    renderNews(); // Renderizar todas las novedades al inicio
    setupFilterListeners(); // Configurar listeners para los filtros
    setupToggleButton(); // Configurar botón toggle
}

// Ejecutar la inicialización cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}