// Carrusel de imágenes
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');

    function showSlide(index) {
        // Remover la clase active de todos los slides y dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Agregar la clase active al slide y dot actual
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners para los botones
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Event listeners para los dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-avanzar el carrusel cada 5 segundos
    setInterval(nextSlide, 5000);

    // Mostrar el primer slide al cargar
    showSlide(0);
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