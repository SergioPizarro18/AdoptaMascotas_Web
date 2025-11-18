// Datos de ejemplo de mascotas
let pets = [
    {
        id: 1,
        name: "Max",
        type: "Perro",
        age: "2 años",
        arrivalDate: new Date("2024-10-15"),
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop",
        urgent: false
    },
    {
        id: 2,
        name: "Luna",
        type: "Gato",
        age: "1 año",
        arrivalDate: new Date("2024-11-01"),
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
        urgent: true
    },
    {
        id: 3,
        name: "Rocky",
        type: "Perro",
        age: "3 años",
        arrivalDate: new Date("2024-09-20"),
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
        urgent: false
    },
    {
        id: 4,
        name: "Bella",
        type: "Gato",
        age: "6 meses",
        arrivalDate: new Date("2024-11-10"),
        image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=400&fit=crop",
        urgent: false
    },
    {
        id: 5,
        name: "Charlie",
        type: "Perro",
        age: "4 años",
        arrivalDate: new Date("2024-08-05"),
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
        urgent: false
    },
    {
        id: 6,
        name: "Mimi",
        type: "Gato",
        age: "2 años",
        arrivalDate: new Date("2024-10-28"),
        image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=400&h=400&fit=crop",
        urgent: true
    }
];

let filteredPets = [...pets];

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
                        <span>Tipo:</span> ${pet.type}
                    </div>
                    <div class="pet-detail">
                        <span>Edad:</span> ${pet.age}
                    </div>
                    <div class="pet-detail">
                        <span>Llegada:</span> ${formatDate(pet.arrivalDate)}
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

// Función para aplicar filtros
function applyFilters() {
    const searchName = document.getElementById('searchName').value.toLowerCase();
    const sortName = document.getElementById('sortName').value;
    const sortDate = document.getElementById('sortDate').value;

    // Filtrar por nombre
    filteredPets = pets.filter(pet => 
        pet.name.toLowerCase().includes(searchName)
    );

    // Ordenar por nombre
    if (sortName === 'asc') {
        filteredPets.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortName === 'desc') {
        filteredPets.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Ordenar por fecha
    if (sortDate === 'newest') {
        filteredPets.sort((a, b) => b.arrivalDate - a.arrivalDate);
    } else if (sortDate === 'oldest') {
        filteredPets.sort((a, b) => a.arrivalDate - b.arrivalDate);
    }

    renderPets(filteredPets);
}

// Función para adoptar mascota
function adoptPet(petId) {
    const pet = pets.find(p => p.id === petId);
    alert(`¡Gracias por tu interés en adoptar a ${pet.name}! En breve te contactaremos.`);
}

// Event Listeners
document.getElementById('searchName').addEventListener('input', applyFilters);
document.getElementById('sortName').addEventListener('change', applyFilters);
document.getElementById('sortDate').addEventListener('change', applyFilters);
document.getElementById('btnSearch').addEventListener('click', applyFilters);

// Renderizar mascotas inicialmente al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderPets(filteredPets);
});