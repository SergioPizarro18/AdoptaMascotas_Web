// Datos de ejemplo de mascotas
let pets = [
    {
        id: 1,
        name: "Prime",
        type: "Perro",
        sex: "Macho",
        age: "2 años",
        ageCategory: "joven",
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop",
        urgent: true
    },
    {
        id: 2,
        name: "Luna",
        type: "Gato",
        sex: "Hembra",
        age: "2 años",
        ageCategory: "joven",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
        urgent: true
    },
    {
        id: 3,
        name: "Rocky",
        type: "Perro",
        sex: "Macho",
        age: "4 años",
        ageCategory: "adulto",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
        urgent: false
    },
    {
        id: 4,
        name: "Bella",
        type: "Gato",
        sex: "Hembra",
        age: "6 meses",
        ageCategory: "cachorro",
        image: "https://static.wixstatic.com/media/8af33b_07682aa4c0f445ed91cbd1e8b28ceeb3~mv2.jpg/v1/fill/w_228,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8af33b_07682aa4c0f445ed91cbd1e8b28ceeb3~mv2.jpg",
        urgent: false
    },
    {
        id: 5,
        name: "Charlie",
        type: "Perro",
        sex: "Macho",
        age: "4 años",
        ageCategory: "adulto",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
        urgent: false
    },
    {
        id: 6,
        name: "Mimi",
        type: "Gato",
        sex: "Hembra",
        age: "2 años",
        ageCategory: "joven",
        image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=400&h=400&fit=crop",
        urgent: true
    },
    {
        id: 7,
        name: "Thor",
        type: "Perro",
        sex: "Macho",
        age: "8 años",
        ageCategory: "senior",
        image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=400&fit=crop",
        urgent: false
    },
    {
        id: 8,
        name: "Nala",
        type: "Gato",
        sex: "Hembra",
        age: "4 años",
        ageCategory: "adulto",
        image: "https://static.wixstatic.com/media/8af33b_047145a7c3644f89acfb223379601813~mv2.jpeg/v1/fill/w_228,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8af33b_047145a7c3644f89acfb223379601813~mv2.jpeg",
        urgent: false
    },
    {
        id: 9,
        name: "Bala",
        type: "Perro",
        sex: "Hembra",
        age: "11 meses",
        ageCategory: "cachorro",
        image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=400&fit=crop",
        urgent: true
    },
    {
        id: 10,
        name: "Pelusa",
        type: "Gato",
        sex: "Hembra",
        age: "2 años",
        ageCategory: "joven",
        image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=400&fit=crop",
        urgent: true
    },
    {
        id: 11,
        name: "Beto",
        type: "Perro",
        sex: "Macho",
        age: "6 años",
        ageCategory: "adulto",
        image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&h=400&fit=crop",
        urgent: false
    },
    {
        id: 12,
        name: "Simba",
        type: "Gato",
        sex: "Macho",
        age: "8 años",
        ageCategory: "senior",
        image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop",
        urgent: false
    },
    {
        id: 13,
        name: "Sergio",
        type: "Gato",
        sex: "Macho",
        age: "2 años",
        ageCategory: "joven",
        image: "https://www.elespectador.com/resizer/KC2rYnJ7xwQ5srRjOCnOHJVE4rw=/arc-anglerfish-arc2-prod-elespectador/public/KHYLDDXDT5BCLBABKRR6LXRLQU.jpg",
        urgent: false
    },
    {
        id: 14,
        name: "Perla",
        type: "Perro",
        sex: "Hembra",
        age: "2 años",
        ageCategory: "joven",
        image: "https://purina.com.pe/sites/default/files/2023-01/purina-nombres-para-perritas-hembras-05%20%281%29.png",
        urgent: false
    }
];

let filteredPets = [...pets];
let currentTypeFilter = 'all';

// Función para actualizar el breadcrumb
function updateBreadcrumb() {
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
    
    if (currentTypeFilter === 'Perro') {
        breadcrumbCurrent.textContent = 'Perritos';
    } else if (currentTypeFilter === 'Gato') {
        breadcrumbCurrent.textContent = 'Gatitos';
    } else {
        breadcrumbCurrent.textContent = 'Adopta';
    }
}

// Función para mostrar alerta cuando no se encuentra mascota
function showAlert() {
    const overlay = document.createElement('div');
    overlay.className = 'alert-overlay';
    
    overlay.innerHTML = `
        <div class="alert-box">
            <h3>🐾 Oops...</h3>
            <p>No encontramos esa mascota, pero hay muchos otros peluditos esperándote.</p>
            <button onclick="closeAlert()">Ver todas las mascotas</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
}

// Función para cerrar alerta
function closeAlert() {
    const overlay = document.querySelector('.alert-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Función para formatear fecha
function formatDate(date) {
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Función para renderizar mascotas
function renderPets(petsToRender) {
    const container = document.getElementById('petsContainer');
    
    if (petsToRender.length === 0) {
        container.innerHTML = '<div class="no-results">No se encontraron mascotas con los filtros seleccionados.</div>';
        return;
    }

    container.innerHTML = petsToRender.map(pet => `
        <div class="pet-card">
            <img src="${pet.image}" alt="${pet.name}" class="pet-image">
            <div class="pet-info">
                <h3 class="pet-name">${pet.name}</h3>
                <div class="pet-details">
                    <div class="pet-detail">
                        <span>Sexo:</span> ${pet.sex}
                    </div>
                    <div class="pet-detail">
                        <span>Edad:</span> ${pet.age}
                    </div>
                </div>
                <div>
                    <span class="badge badge-available">Disponible</span>
                    ${pet.urgent ? '<span class="badge badge-urgent">¡Urgente!</span>' : ''}
                </div>
                <button class="btn-adopt" onclick="adoptPet(${pet.id})">Adoptar</button>
            </div>
        </div>
    `).join('');
}

// Función para filtrar por tipo de mascota
function filterByType(type) {
    currentTypeFilter = type;
    updateBreadcrumb();
    applyFilters();
}

// Función para aplicar filtros
function applyFilters() {
    const filterSex = document.getElementById('filterSex').value;
    const filterAge = document.getElementById('filterAge').value;
    const sortName = document.getElementById('sortName').value;

    // Filtrar por tipo (desde el dropdown del header)
    if (currentTypeFilter === 'all') {
        filteredPets = [...pets];
    } else {
        filteredPets = pets.filter(pet => pet.type === currentTypeFilter);
    }

    // Filtrar por sexo
    if (filterSex !== '') {
        filteredPets = filteredPets.filter(pet => pet.sex === filterSex);
    }

    // Filtrar por edad
    if (filterAge !== '') {
        filteredPets = filteredPets.filter(pet => pet.ageCategory === filterAge);
    }

    // Ordenar por nombre
    if (sortName === 'asc') {
        filteredPets.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortName === 'desc') {
        filteredPets.sort((a, b) => b.name.localeCompare(a.name));
    }

    renderPets(filteredPets);
}

// Función para adoptar mascota
function adoptPet(petId) {
    const pet = pets.find(p => p.id === petId);
    alert(`¡Gracias por tu interés en adoptar a ${pet.name}! En breve te contactaremos.`);
}

// Event Listeners
document.getElementById('filterSex').addEventListener('change', applyFilters);
document.getElementById('filterAge').addEventListener('change', applyFilters);
document.getElementById('sortName').addEventListener('change', applyFilters);

// Renderizar mascotas inicialmente al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderPets(filteredPets);
});