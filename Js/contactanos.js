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


// Validación en tiempo real y envío del formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const asuntoSelect = document.getElementById('asunto');
    const mensajeTextarea = document.getElementById('mensaje');
    const privacidadCheckbox = document.getElementById('privacidad');
    const successMessage = document.getElementById('successMessage');
    const characterCounter = document.getElementById('mensaje-counter');

    // Contador de caracteres para el mensaje
    mensajeTextarea.addEventListener('input', function() {
        const length = this.value.length;
        characterCounter.textContent = `${length}/1000`;
        
        if (length > 900) {
            characterCounter.style.color = '#FF6B6B';
        } else {
            characterCounter.style.color = '#999';
        }
    });

    // Validación en tiempo real para nombre
    nombreInput.addEventListener('blur', function() {
        validateNombre();
    });

    nombreInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateNombre();
        }
    });

    // Validación en tiempo real para email
    emailInput.addEventListener('blur', function() {
        validateEmail();
    });

    emailInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateEmail();
        }
    });

    // Validación en tiempo real para teléfono
    telefonoInput.addEventListener('blur', function() {
        validateTelefono();
    });

    telefonoInput.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateTelefono();
        }
    });

    // Validación para asunto
    asuntoSelect.addEventListener('change', function() {
        validateAsunto();
    });

    // Validación para mensaje
    mensajeTextarea.addEventListener('blur', function() {
        validateMensaje();
    });

    mensajeTextarea.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateMensaje();
        }
    });

    // Validación para checkbox de privacidad
    privacidadCheckbox.addEventListener('change', function() {
        validatePrivacidad();
    });

    // Función de validación de nombre
    function validateNombre() {
        const nombre = nombreInput.value.trim();
        const errorSpan = document.getElementById('nombre-error');
        
        if (nombre === '') {
            showError(nombreInput, errorSpan, 'El nombre completo es obligatorio');
            return false;
        } else if (nombre.length < 3) {
            showError(nombreInput, errorSpan, 'El nombre debe tener al menos 3 caracteres');
            return false;
        } else if (!/^[a-záéíóúñA-ZÁÉÍÓÚÑ\s]+$/.test(nombre)) {
            showError(nombreInput, errorSpan, 'El nombre solo puede contener letras');
            return false;
        } else {
            showSuccess(nombreInput, errorSpan);
            return true;
        }
    }

    // Función de validación de email
    function validateEmail() {
        const email = emailInput.value.trim();
        const errorSpan = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            showError(emailInput, errorSpan, 'El correo electrónico es obligatorio');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, errorSpan, 'Por favor ingresa un correo electrónico válido');
            return false;
        } else {
            showSuccess(emailInput, errorSpan);
            return true;
        }
    }

    // Función de validación de teléfono (opcional pero con formato si se ingresa)
    function validateTelefono() {
        const telefono = telefonoInput.value.trim();
        const errorSpan = document.getElementById('telefono-error');
        
        // Si está vacío, es válido porque es opcional
        if (telefono === '') {
            clearValidation(telefonoInput, errorSpan);
            return true;
        }
        
        // Si tiene contenido, validar formato
        const telefonoRegex = /^\+?51\s?\d{3}\s?\d{3}\s?\d{3}$/;
        
        if (!telefonoRegex.test(telefono)) {
            showError(telefonoInput, errorSpan, 'Formato válido: +51 999 999 999');
            return false;
        } else {
            showSuccess(telefonoInput, errorSpan);
            return true;
        }
    }

    // Función de validación de asunto
    function validateAsunto() {
        const asunto = asuntoSelect.value;
        const errorSpan = document.getElementById('asunto-error');
        
        if (asunto === '') {
            showError(asuntoSelect, errorSpan, 'Por favor selecciona un asunto');
            return false;
        } else {
            showSuccess(asuntoSelect, errorSpan);
            return true;
        }
    }

    // Función de validación de mensaje
    function validateMensaje() {
        const mensaje = mensajeTextarea.value.trim();
        const errorSpan = document.getElementById('mensaje-error');
        
        if (mensaje === '') {
            showError(mensajeTextarea, errorSpan, 'El mensaje es obligatorio');
            return false;
        } else if (mensaje.length < 10) {
            showError(mensajeTextarea, errorSpan, 'El mensaje debe tener al menos 10 caracteres');
            return false;
        } else if (mensaje.length > 1000) {
            showError(mensajeTextarea, errorSpan, 'El mensaje no puede exceder los 1000 caracteres');
            return false;
        } else {
            showSuccess(mensajeTextarea, errorSpan);
            return true;
        }
    }

    // Función de validación de privacidad
    function validatePrivacidad() {
        const errorSpan = document.getElementById('privacidad-error');
        
        if (!privacidadCheckbox.checked) {
            errorSpan.textContent = 'Debes aceptar la política de privacidad';
            errorSpan.classList.add('show');
            return false;
        } else {
            errorSpan.textContent = '';
            errorSpan.classList.remove('show');
            return true;
        }
    }

    // Función para mostrar error
    function showError(input, errorSpan, message) {
        input.classList.remove('success');
        input.classList.add('error');
        errorSpan.textContent = message;
        errorSpan.classList.add('show');
        
        // Accesibilidad: anunciar error a lectores de pantalla
        input.setAttribute('aria-invalid', 'true');
    }

    // Función para mostrar éxito
    function showSuccess(input, errorSpan) {
        input.classList.remove('error');
        input.classList.add('success');
        errorSpan.textContent = '';
        errorSpan.classList.remove('show');
        
        // Accesibilidad
        input.setAttribute('aria-invalid', 'false');
    }

    // Función para limpiar validación
    function clearValidation(input, errorSpan) {
        input.classList.remove('error', 'success');
        errorSpan.textContent = '';
        errorSpan.classList.remove('show');
        input.removeAttribute('aria-invalid');
    }

    // Validación completa del formulario
    function validateForm() {
        const isNombreValid = validateNombre();
        const isEmailValid = validateEmail();
        const isTelefonoValid = validateTelefono();
        const isAsuntoValid = validateAsunto();
        const isMensajeValid = validateMensaje();
        const isPrivacidadValid = validatePrivacidad();
        
        return isNombreValid && isEmailValid && isTelefonoValid && 
               isAsuntoValid && isMensajeValid && isPrivacidadValid;
    }

    // Manejo del envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ocultar mensaje de éxito previo si existe
        successMessage.style.display = 'none';
        
        // Validar formulario completo
        if (validateForm()) {
            // Deshabilitar botón de envío para evitar múltiples envíos
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = `
                <svg class="spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
                Enviando...
            `;
            
            // Simular envío (aquí conectarías con tu backend)
            setTimeout(() => {
                // Recopilar datos del formulario
                const formData = {
                    nombre: nombreInput.value.trim(),
                    email: emailInput.value.trim(),
                    telefono: telefonoInput.value.trim(),
                    asunto: asuntoSelect.value,
                    mensaje: mensajeTextarea.value.trim(),
                    privacidad: privacidadCheckbox.checked
                };
                
                console.log('Datos del formulario:', formData);
                
                // Mostrar mensaje de éxito
                successMessage.style.display = 'flex';
                
                // Scroll al mensaje de éxito
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Limpiar formulario
                form.reset();
                
                // Limpiar validaciones visuales
                document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
                    input.classList.remove('success', 'error');
                });
                
                // Resetear contador de caracteres
                characterCounter.textContent = '0/1000';
                characterCounter.style.color = '#999';
                
                // Restaurar botón
                submitButton.disabled = false;
                submitButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Enviar Consulta
                `;
                
                // Ocultar mensaje de éxito después de 5 segundos
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
                
            }, 1500); // Simula tiempo de envío
            
        } else {
            // Si hay errores, hacer scroll al primer campo con error
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });

    // Manejo del botón de reseteo
    form.addEventListener('reset', function() {
        // Limpiar todas las validaciones
        document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
            input.classList.remove('success', 'error');
            input.removeAttribute('aria-invalid');
        });
        
        document.querySelectorAll('.error-message').forEach(span => {
            span.textContent = '';
            span.classList.remove('show');
        });
        
        // Resetear contador
        characterCounter.textContent = '0/1000';
        characterCounter.style.color = '#999';
        
        // Ocultar mensaje de éxito
        successMessage.style.display = 'none';
    });

    // Prevenir pegado de espacios en email
    emailInput.addEventListener('paste', function(e) {
        setTimeout(() => {
            this.value = this.value.trim();
        }, 0);
    });

    // Auto-formato para teléfono
    telefonoInput.addEventListener('input', function(e) {
        let value = this.value.replace(/\D/g, ''); // Eliminar todo excepto números
        
        // Si empieza con 51, agregar +
        if (value.startsWith('51')) {
            value = '+' + value;
        }
        
        // Formatear como +51 999 999 999
        if (value.startsWith('+51')) {
            const numbers = value.substring(3);
            if (numbers.length <= 3) {
                value = '+51 ' + numbers;
            } else if (numbers.length <= 6) {
                value = '+51 ' + numbers.substring(0, 3) + ' ' + numbers.substring(3);
            } else {
                value = '+51 ' + numbers.substring(0, 3) + ' ' + numbers.substring(3, 6) + ' ' + numbers.substring(6, 9);
            }
        }
        
        this.value = value;
    });
});

// Agregar estilos para el spinner de carga
const style = document.createElement('style');
style.textContent = `
    .spin {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(style);