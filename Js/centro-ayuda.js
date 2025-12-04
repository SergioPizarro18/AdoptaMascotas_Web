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