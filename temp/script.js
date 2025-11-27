// ===== CARUSEL =====
const images = [
  "https://placedog.net/900/500",
  "https://picsum.photos/900/500?random=10",
  "https://picsum.photos/900/500?random=11",
  "https://picsum.photos/900/500?random=12"
];

// Elementos del DOM
const imgElement = document.getElementById("carousel-img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("carousel-dots");

let index = 0;

// Cargar imagen inicial
imgElement.src = images[index];

// Crear indicadores dinámicos
images.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Cambiar imagen + dot activo
function updateCarousel() {
  imgElement.src = images[index];

  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

// Botón siguiente
nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

// Botón anterior
prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

// ===== MODAL LOGIN =====
const loginBtn = document.querySelector(".btn-login");
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".modal-close");

// Verificar que los elementos existen antes de asignar eventos
if (loginBtn && modal && closeBtn) {

    // Abrir modal
    loginBtn.addEventListener("click", () => {
        modal.style.display = "flex";  // Flex para centrar
    });

    // Cerrar modal con X
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal haciendo clic en el fondo sombreado
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {  // Detecta clic solo fuera de la caja
            modal.style.display = "none";
        }
    });

} else {
    console.warn("⚠️ Advertencia: No se encontró alguno de los elementos del modal (btn-login, loginModal o modal-close).");
}