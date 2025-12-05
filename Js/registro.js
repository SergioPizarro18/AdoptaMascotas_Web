const registerForm = document.getElementById("registerForm");

if (registerForm) {
    // Referencias a los campos
    const usuarioInput = registerForm.querySelector('input[type="text"]');
    const emailInput = registerForm.querySelector('input[type="email"]');
    const fechaInput = registerForm.querySelector('input[type="date"]');
    const passwordInput = registerForm.querySelector('input[type="password"]');

    // Referencias a mensajes de error
    const usuarioError = document.getElementById('usuarioError');
    const emailError = document.getElementById('emailError');
    const fechaError = document.getElementById('fechaError');
    const passwordError = document.getElementById('passwordError');

    // Validar usuario (mínimo 3 caracteres)
    if (usuarioInput && usuarioError) {
        usuarioInput.addEventListener('input', function() {
            const value = this.value.trim();
            
            if (value.length === 0) {
                this.style.borderColor = '#E0E0E0';
                usuarioError.classList.remove('show');
            } else if (value.length < 3) {
                this.style.borderColor = '#E63946';
                usuarioError.textContent = 'El usuario es muy corto. Debe tener al menos 3 caracteres.';
                usuarioError.classList.add('show');
            } else if (value.length > 20) {
                this.style.borderColor = '#E63946';
                usuarioError.textContent = 'El usuario es muy largo. Máximo 20 caracteres.';
                usuarioError.classList.add('show');
            } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                this.style.borderColor = '#E63946';
                usuarioError.textContent = 'Solo letras, números y guión bajo (_) permitidos.';
                usuarioError.classList.add('show');
            } else {
                this.style.borderColor = '#2A9D8F';
                usuarioError.classList.remove('show');
            }
        });
    }

    // Validar email en tiempo real
    if (emailInput && emailError) {
        emailInput.addEventListener('input', function() {
            const value = this.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (value.length === 0) {
                this.style.borderColor = '#E0E0E0';
                emailError.classList.remove('show');
            } else if (!emailRegex.test(value)) {
                this.style.borderColor = '#E63946';
                emailError.textContent = 'El formato del correo no es válido. Ejemplo: usuario@dominio.com';
                emailError.classList.add('show');
            } else {
                this.style.borderColor = '#2A9D8F';
                emailError.classList.remove('show');
            }
        });
    }

    // ===== HEURÍSTICA 2: Fortaleza de contraseña (Visibilidad del estado) =====
    if (passwordInput && passwordError) {
        // Crear indicador de fortaleza si no existe
        const passwordWrapper = passwordInput.closest('.form-group');
        let strengthIndicator = passwordWrapper.querySelector('.password-strength');
        
        if (!strengthIndicator) {
            strengthIndicator = document.createElement('div');
            strengthIndicator.className = 'password-strength';
            strengthIndicator.innerHTML = `
                <div class="password-strength-bar"></div>
            `;
            const strengthText = document.createElement('div');
            strengthText.className = 'password-strength-text';
            
            // Insertar después del mensaje de error
            passwordError.after(strengthIndicator);
            strengthIndicator.after(strengthText);
        }

        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strengthText = passwordWrapper.querySelector('.password-strength-text');
            
            if (password.length === 0) {
                this.style.borderColor = '#E0E0E0';
                strengthIndicator.style.display = 'none';
                strengthText.textContent = '';
                strengthIndicator.className = 'password-strength';
                passwordError.classList.remove('show');
                return;
            }

            strengthIndicator.style.display = 'block';
            
            // Validaciones específicas
            const errors = [];
            if (password.length < 8) errors.push('al menos 8 caracteres');
            if (!/[a-z]/.test(password)) errors.push('letras minúsculas');
            if (!/[A-Z]/.test(password)) errors.push('letras mayúsculas');
            if (!/\d/.test(password)) errors.push('números');
            if (!/[^a-zA-Z0-9]/.test(password)) errors.push('caracteres especiales (!@#$%^&*)');
            
            // Calcular fortaleza mejorada
            let strength = 0;
            
            // Longitud
            if (password.length >= 8) strength++;
            if (password.length >= 12) strength++;
            
            // Complejidad de caracteres
            if (/[a-z]/.test(password)) strength++; // Minúsculas
            if (/[A-Z]/.test(password)) strength++; // Mayúsculas
            if (/\d/.test(password)) strength++; // Números
            if (/[^a-zA-Z0-9]/.test(password)) strength++; // Caracteres especiales

            // Actualizar visualización
            strengthIndicator.className = 'password-strength';
            
            if (strength <= 2) {
                this.style.borderColor = '#E63946';
                strengthIndicator.classList.add('weak');
                strengthText.textContent = 'Contraseña débil';
                strengthText.style.color = '#E63946';
                
                if (errors.length > 0) {
                    passwordError.textContent = `Tu contraseña necesita: ${errors.join(', ')}.`;
                    passwordError.classList.add('show');
                }
            } else if (strength <= 4) {
                this.style.borderColor = '#F4A261';
                strengthIndicator.classList.add('medium');
                strengthText.textContent = 'Contraseña media';
                strengthText.style.color = '#F4A261';
                
                if (errors.length > 0) {
                    passwordError.textContent = `Para mejorar agrega: ${errors.join(', ')}.`;
                    passwordError.style.color = '#F4A261';
                    passwordError.classList.add('show');
                } else {
                    passwordError.classList.remove('show');
                    passwordError.style.color = '#E63946';
                }
            } else {
                this.style.borderColor = '#2A9D8F';
                strengthIndicator.classList.add('strong');
                strengthText.textContent = 'Contraseña fuerte';
                strengthText.style.color = '#2A9D8F';
                passwordError.classList.remove('show');
            }
        });
    }

    // ===== HEURÍSTICA 3: Prevención de errores - Validación de edad =====
    if (fechaInput && fechaError) {
        // Establecer fecha máxima (debe ser mayor de 13 años)
        const today = new Date();
        const maxDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
        const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
        
        fechaInput.max = maxDate.toISOString().split('T')[0];
        fechaInput.min = minDate.toISOString().split('T')[0];

        // Solo mostrar error después de que el usuario haya interactuado
        fechaInput.addEventListener('change', function() {
            this.classList.add('date-touched');
            
            if (!this.value) {
                this.style.borderColor = '#E0E0E0';
                fechaError.classList.remove('show');
                return;
            }
            
            const birthDate = new Date(this.value);
            const age = Math.floor((today - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
            
            if (age < 13) {
                this.style.borderColor = '#E63946';
                fechaError.textContent = `Debes tener al menos 13 años para registrarte. Tu edad: ${age} años.`;
                fechaError.classList.add('show');
            } else if (age > 120) {
                this.style.borderColor = '#E63946';
                fechaError.textContent = 'La fecha ingresada no es válida. Por favor verifica.';
                fechaError.classList.add('show');
            } else {
                this.style.borderColor = '#2A9D8F';
                fechaError.classList.remove('show');
            }
        });
    }

    // ===== HEURÍSTICA 4: Mostrar/Ocultar Contraseña =====
    if (passwordInput) {
        const passwordWrapper = passwordInput.closest('.form-group');
        
        // Agregar clase para identificar que es campo de contraseña
        passwordInput.classList.add('password-field');
        
        // Crear botón de mostrar/ocultar
        const toggleButton = document.createElement('button');
        toggleButton.type = 'button';
        toggleButton.className = 'toggle-password';
        toggleButton.setAttribute('aria-label', 'Mostrar contraseña');
        toggleButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        `;
        
        passwordInput.closest('.input-wrapper').appendChild(toggleButton);

        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            
            if (type === 'text') {
                this.setAttribute('aria-label', 'Ocultar contraseña');
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                `;
            } else {
                this.setAttribute('aria-label', 'Mostrar contraseña');
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                `;
            }
        });
    }

    // ===== HEURÍSTICA 6: Consistencia y estándares =====
    // El formulario sigue patrones estándar de diseño web

    // ===== HEURÍSTICA 7: Prevención de errores =====
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validar todos los campos antes de enviar
        const inputs = [usuarioInput, emailInput, fechaInput, passwordInput];
        let isValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.reportValidity();
            }
        });

        if (!isValid) {
            return;
        }

        // ===== HEURÍSTICA 8: Visibilidad del estado del sistema - Loading =====
        const submitButton = this.querySelector('.btn-register');
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        submitButton.innerHTML = '<div class="loading-spinner"></div>';

        // Simular proceso de registro
        setTimeout(() => {
            const usuario = usuarioInput.value.trim();
            const email = emailInput.value.trim();
            const fechaNacimiento = fechaInput.value;
            const contraseña = passwordInput.value;

            console.log("Datos de registro:", {
                usuario,
                email,
                fechaNacimiento,
                contraseña: "***" // No mostrar la contraseña en consola
            });

            // ===== HEURÍSTICA 9: Recuperación de errores - Mensaje de éxito =====
            submitButton.classList.remove('loading');
            submitButton.innerHTML = `<span class="btn-text">${originalText}</span>`;
            submitButton.disabled = false;

            // Mostrar mensaje de éxito
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message show';
            successDiv.innerHTML = `
                <strong>✓ ¡Registro exitoso!</strong><br>
                Bienvenido ${usuario}. Serás redirigido en breve...
            `;
            submitButton.after(successDiv);

            // Limpiar formulario
            registerForm.reset();
            
            // Resetear indicadores
            const strengthIndicator = registerForm.querySelector('.password-strength');
            const strengthText = registerForm.querySelector('.password-strength-text');
            if (strengthIndicator) strengthIndicator.style.display = 'none';
            if (strengthText) strengthText.textContent = '';

            // Redirigir después de 2 segundos
            setTimeout(() => {
                // window.location.href = "/inicio.html";
                console.log("Redirigiendo a inicio...");
            }, 2000);

        }, 1500); // Simular delay de red
    });

    // ===== HEURÍSTICA 10: Ayuda y documentación =====
    // Tooltip de ayuda en contraseña
    const passwordLabel = passwordWrapper?.querySelector('.form-label');
    if (passwordLabel) {
        const helpIcon = document.createElement('span');
        helpIcon.className = 'input-tooltip';
        helpIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span class="tooltip-text">
                La contraseña debe tener al menos 8 caracteres. 
                Se recomienda usar mayúsculas, números y símbolos.
            </span>
        `;
        passwordLabel.appendChild(helpIcon);
    }

} else {
    console.warn("⚠️ Advertencia: No se encontró el formulario de registro.");
}