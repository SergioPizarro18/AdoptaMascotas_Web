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