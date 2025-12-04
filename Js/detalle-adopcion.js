// Función para cambiar la imagen principal
function changeImage(imageSrc) {
    // Cambiar la imagen principal
    const mainImage = document.getElementById('mainImage');
    mainImage.style.opacity = '0';
    
    setTimeout(() => {
        // Reemplazar w=150&h=150 por w=600&h=600 para mejor calidad
        const highQualityImage = imageSrc.replace('w=150&h=150', 'w=600&h=600');
        mainImage.src = highQualityImage;
        mainImage.style.opacity = '1';
    }, 200);
    
    // Actualizar las miniaturas activas
    const thumbnails = document.querySelectorAll('.gallery-thumb');
    thumbnails.forEach(thumb => {
        if (thumb.src === imageSrc) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Función para agregar efecto de "like" o favorito (opcional)
function addToFavorites() {
    const heartIcon = document.querySelector('.btn-favorite');
    if (heartIcon) {
        heartIcon.classList.toggle('active');
        // Aquí puedes agregar lógica para guardar en localStorage o enviar a un servidor
    }
}

// Inicialización y manejo de eventos (se ejecuta al cargar la página)
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica del botón "Continuar" ---
    const btnContinue = document.querySelector('.btn-continue');
    
    if (btnContinue) {
        btnContinue.addEventListener('click', function() {
            // Actualmente muestra una alerta. Puedes cambiar esto para redirigir:
            alert('¡Gracias por tu interés en adoptar! Pronto implementaremos el proceso de adopción completo.');
            
            // Para redirigir a un formulario de adopción, descomenta la línea de abajo:
            // window.location.href = '/formulario-adopcion.html';
        });
    }
    
    // --- Animación de entrada para las tarjetas de información (Intersection Observer) ---
    const infoCards = document.querySelectorAll('.info-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    infoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
    
    // --- Animación para los tags de personalidad ---
    const personalityTags = document.querySelectorAll('.personality-tag');
    personalityTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        tag.style.transition = 'all 0.4s ease-out';
        
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'scale(1)';
        }, 800 + (index * 100));
    });
    
    // --- Animación para los requisitos ---
    const requirementItems = document.querySelectorAll('.requirements-list li');
    requirementItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.4s ease-out';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 1000 + (index * 100));
    });
    
    // --- Efecto hover en las miniaturas ---
    const thumbnails = document.querySelectorAll('.gallery-thumb');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-4px)';
        });
        
        thumb.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1) translateY(0)';
            }
        });
    });
});