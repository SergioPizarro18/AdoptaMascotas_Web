// Función para agregar efecto de scroll suave a los botones
document.addEventListener('DOMContentLoaded', function() {
    const btnImpact = document.querySelector('.btn-impact');
    
    if (btnImpact) {
        btnImpact.addEventListener('click', function() {
            alert('¡Gracias por tu interés! Pronto podrás ver todo nuestro impacto en detalle.');
        });
    }

    // Animación adicional al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar todas las tarjetas
    const cards = document.querySelectorAll('.help-card, .partnership-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});