// Toggle del menú de ayuda
document.addEventListener('DOMContentLoaded', function() {
    const helpButton = document.querySelector('.btn-help-circle');
    const helpMenu = document.querySelector('.help-dropdown-menu');

    if (helpButton && helpMenu) {
        helpButton.addEventListener('click', function(e) {
            e.stopPropagation();
            helpMenu.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.help-dropdown')) {
                helpMenu.classList.remove('show');
            }
        });
    }
});

// Formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (!form) {
        console.error('No se encontró el formulario');
        return;
    }

    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const asuntoSelect = document.getElementById('asunto');
    const mensajeTextarea = document.getElementById('mensaje');
    const privacidadCheckbox = document.getElementById('privacidad');
    const successMessage = document.getElementById('successMessage');
    const characterCounter = document.getElementById('mensaje-counter');

    // Contador de caracteres
    if (mensajeTextarea && characterCounter) {
        mensajeTextarea.addEventListener('input', function() {
            const length = this.value.length;
            characterCounter.textContent = `${length}/1000`;
            
            if (length > 1000) {
                characterCounter.style.color = '#FF6B6B';
                characterCounter.style.fontWeight = 'bold';
            } else if (length > 900) {
                characterCounter.style.color = '#FF9F66';
            } else {
                characterCounter.style.color = '#999';
                characterCounter.style.fontWeight = 'normal';
            }
        });
    }

    // Auto-formato para teléfono
    if (telefonoInput) {
        telefonoInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            
            if (value.startsWith('51')) {
                value = '+' + value;
            }
            
            if (value.startsWith('+51') && value.length > 3) {
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
    }

    // Validación en tiempo real para cada campo
    if (nombreInput) {
        nombreInput.addEventListener('blur', validateNombre);
        nombreInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateNombre();
            }
        });
    }

    if (emailInput) {
        emailInput.addEventListener('blur', validateEmail);
        emailInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateEmail();
            }
        });
    }

    if (telefonoInput) {
        telefonoInput.addEventListener('blur', validateTelefono);
        telefonoInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateTelefono();
            }
        });
    }

    if (asuntoSelect) {
        asuntoSelect.addEventListener('change', validateAsunto);
    }

    if (mensajeTextarea) {
        mensajeTextarea.addEventListener('blur', validateMensaje);
        mensajeTextarea.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateMensaje();
            }
        });
    }

    if (privacidadCheckbox) {
        privacidadCheckbox.addEventListener('change', validatePrivacidad);
    }

    // Funciones de validación
    function validateNombre() {
        if (!nombreInput) return true;
        
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

    function validateEmail() {
        if (!emailInput) return true;
        
        const email = emailInput.value.trim();
        const errorSpan = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            showError(emailInput, errorSpan, 'El correo electrónico es obligatorio');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, errorSpan, 'Ingresa un correo válido (ejemplo: tu@email.com)');
            return false;
        } else {
            showSuccess(emailInput, errorSpan);
            return true;
        }
    }

    function validateTelefono() {
        if (!telefonoInput) return true;
        
        const telefono = telefonoInput.value.trim();
        const errorSpan = document.getElementById('telefono-error');
        
        if (telefono === '') {
            clearValidation(telefonoInput, errorSpan);
            return true;
        }
        
        const telefonoRegex = /^\+?51\s?\d{3}\s?\d{3}\s?\d{3}$/;
        
        if (!telefonoRegex.test(telefono)) {
            showError(telefonoInput, errorSpan, 'Formato válido: +51 999 999 999');
            return false;
        } else {
            showSuccess(telefonoInput, errorSpan);
            return true;
        }
    }

    function validateAsunto() {
        if (!asuntoSelect) return true;
        
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

    function validateMensaje() {
        if (!mensajeTextarea) return true;
        
        const mensaje = mensajeTextarea.value.trim();
        const errorSpan = document.getElementById('mensaje-error');
        
        if (mensaje === '') {
            showError(mensajeTextarea, errorSpan, 'El mensaje es obligatorio');
            return false;
        } else if (mensaje.length < 10) {
            showError(mensajeTextarea, errorSpan, 'El mensaje debe tener al menos 10 caracteres');
            return false;
        } else if (mensaje.length > 1000) {
            showError(mensajeTextarea, errorSpan, 'El mensaje no puede exceder 1000 caracteres');
            return false;
        } else {
            showSuccess(mensajeTextarea, errorSpan);
            return true;
        }
    }

    function validatePrivacidad() {
        if (!privacidadCheckbox) return true;
        
        const errorSpan = document.getElementById('privacidad-error');
        
        if (!privacidadCheckbox.checked) {
            if (errorSpan) {
                errorSpan.textContent = 'Debes aceptar la política de privacidad';
                errorSpan.classList.add('show');
            }
            return false;
        } else {
            if (errorSpan) {
                errorSpan.textContent = '';
                errorSpan.classList.remove('show');
            }
            return true;
        }
    }

    function showError(input, errorSpan, message) {
        if (!input) return;
        
        input.classList.remove('success');
        input.classList.add('error');
        
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.classList.add('show');
        }
        
        input.setAttribute('aria-invalid', 'true');
    }

    function showSuccess(input, errorSpan) {
        if (!input) return;
        
        input.classList.remove('error');
        input.classList.add('success');
        
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.classList.remove('show');
        }
        
        input.setAttribute('aria-invalid', 'false');
    }

    function clearValidation(input, errorSpan) {
        if (!input) return;
        
        input.classList.remove('error', 'success');
        
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.classList.remove('show');
        }
        
        input.removeAttribute('aria-invalid');
    }

    // ENVÍO DEL FORMULARIO
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        console.log('🚀 Intentando enviar formulario...');
        
        // Ocultar mensaje de éxito previo
        if (successMessage) {
            successMessage.style.display = 'none';
        }
        
        // Validar todos los campos
        const isNombreValid = validateNombre();
        const isEmailValid = validateEmail();
        const isTelefonoValid = validateTelefono();
        const isAsuntoValid = validateAsunto();
        const isMensajeValid = validateMensaje();
        const isPrivacidadValid = validatePrivacidad();
        
        console.log('Validaciones:', {
            nombre: isNombreValid,
            email: isEmailValid,
            telefono: isTelefonoValid,
            asunto: isAsuntoValid,
            mensaje: isMensajeValid,
            privacidad: isPrivacidadValid
        });
        
        // Si hay errores, hacer scroll al primero
        if (!isNombreValid || !isEmailValid || !isTelefonoValid || !isAsuntoValid || !isMensajeValid || !isPrivacidadValid) {
            console.log('❌ Hay errores en el formulario');
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }
        
        console.log('✅ Formulario válido, procediendo a enviar...');
        
        // Todo válido, proceder con envío
        const submitButton = form.querySelector('button[type="submit"]');
        
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = `
                <svg class="spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
                Enviando...
            `;
        }
        
        // Simular envío
        setTimeout(function() {
            const formData = {
                nombre: nombreInput ? nombreInput.value.trim() : '',
                email: emailInput ? emailInput.value.trim() : '',
                telefono: telefonoInput ? telefonoInput.value.trim() : '',
                asunto: asuntoSelect ? asuntoSelect.value : '',
                mensaje: mensajeTextarea ? mensajeTextarea.value.trim() : ''
            };
            
            console.log('📧 Formulario enviado con éxito:', formData);
            
            // MOSTRAR MENSAJE DE ÉXITO
            if (successMessage) {
                successMessage.style.display = 'flex';
                successMessage.style.opacity = '1';
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            // LIMPIAR FORMULARIO
            form.reset();
            
            // Limpiar validaciones
            document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
                input.classList.remove('success', 'error');
                input.removeAttribute('aria-invalid');
            });
            
            document.querySelectorAll('.error-message').forEach(span => {
                span.textContent = '';
                span.classList.remove('show');
            });
            
            // Resetear contador
            if (characterCounter) {
                characterCounter.textContent = '0/1000';
                characterCounter.style.color = '#999';
                characterCounter.style.fontWeight = 'normal';
            }
            
            // Restaurar botón
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    Enviar Consulta
                `;
            }
            
            // Ocultar mensaje después de 7 segundos
            setTimeout(function() {
                if (successMessage) {
                    successMessage.style.opacity = '0';
                    setTimeout(function() {
                        successMessage.style.display = 'none';
                        successMessage.style.opacity = '1';
                    }, 300);
                }
            }, 7000);
            
        }, 1500);
    });

    // Botón reset
    const resetButton = form.querySelector('button[type="reset"]');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
                input.classList.remove('success', 'error');
                input.removeAttribute('aria-invalid');
            });
            
            document.querySelectorAll('.error-message').forEach(span => {
                span.textContent = '';
                span.classList.remove('show');
            });
            
            if (characterCounter) {
                characterCounter.textContent = '0/1000';
                characterCounter.style.color = '#999';
                characterCounter.style.fontWeight = 'normal';
            }
            
            if (successMessage) {
                successMessage.style.display = 'none';
            }
            
            console.log('🧹 Formulario limpiado');
        });
    }
});

// Estilos para spinner
const style = document.createElement('style');
style.textContent = `
    .spin {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);