// ===== IMÁGENES DE FONDO ALEATORIAS =====
const backgroundImages = [
    'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1707353402061-c31b6ba8562e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661503280224-a86d7ad2a574?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

// Seleccionar imagen aleatoria al cargar la página
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImage = backgroundImages[randomIndex];
    document.body.style.backgroundImage = `url('${randomImage}')`;
}

// Establecer imagen aleatoria al cargar
setRandomBackground();

// ===== MANEJO DEL FORMULARIO DE REGISTRO =====
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();  // Prevenir envío por defecto
        
        // Obtener valores del formulario
        const usuario = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const fechaNacimiento = registerForm.querySelector('input[type="date"]').value;
        const contraseña = registerForm.querySelector('input[type="password"]').value;
        
        // Validación básica
        if (usuario && email && fechaNacimiento && contraseña) {
            console.log("Datos de registro:", {
                usuario,
                email,
                fechaNacimiento,
                contraseña: "***" // No mostrar la contraseña en consola
            });
            
            alert("¡Registro exitoso! Bienvenido " + usuario);
            
            // Limpiar formulario
            registerForm.reset();
            
            // Aquí puedes redirigir a otra página o enviar los datos al servidor
            // window.location.href = "/inicio.html";
        } else {
            alert("Por favor, completa todos los campos");
        }
    });
} else {
    console.warn("⚠️ Advertencia: No se encontró el formulario de registro.");
}