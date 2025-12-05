// Configuración de precios
const PRICES = {
    adoption: {
        shipping: 50.00,
        kit: 120.00,
        vaccines: 80.00
    },
    plans: {
        basico: 10.00,
        estandar: 25.00,
        premium: 50.00
    }
};

// Variables globales
let currentPaymentType = 'adoption';
let currentPlan = null;
let currentPetData = null;

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Detectar el tipo de pago desde los parámetros URL
    detectPaymentType();
    
    // Inicializar el contenido del pedido
    updateOrderSummary();
    
    // Configurar validación del formulario
    setupFormValidation();
    
    // Configurar formateo de campos
    setupFieldFormatting();
    
    // Configurar el envío del formulario
    setupFormSubmission();
    
    // Configurar modal de login
    setupLoginModal();
    
    // Configurar dropdown de ayuda
    setupHelpDropdown();
    
    // Log para debugging
    console.log('Tipo de pago:', currentPaymentType);
    console.log('Plan:', currentPlan);
    console.log('Mascota:', currentPetData);
});

// ===== MODAL LOGIN =====
function setupLoginModal() {
    const loginBtn = document.querySelector(".btn-login");
    const modal = document.getElementById("loginModal");
    const closeBtn = document.querySelector("#loginModal .modal-close");
    const loginForm = document.getElementById("loginForm");
    const loginUsuario = document.getElementById("loginUsuario");
    const loginPassword = document.getElementById("loginPassword");
    const loginUsuarioError = document.getElementById("loginUsuarioError");
    const loginPasswordError = document.getElementById("loginPasswordError");

    // Verificar que los elementos existen antes de asignar eventos
    if (loginBtn && modal && closeBtn) {
        // Abrir modal
        loginBtn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });

        // Cerrar modal con X
        closeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            modal.style.display = "none";
            // Limpiar validaciones al cerrar
            if (loginUsuario) loginUsuario.style.borderColor = '#E0E0E0';
            if (loginPassword) loginPassword.style.borderColor = '#E0E0E0';
            if (loginUsuarioError) loginUsuarioError.classList.remove('show');
            if (loginPasswordError) loginPasswordError.classList.remove('show');
        });

        // Cerrar modal haciendo clic en el fondo sombreado
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                // Limpiar validaciones al cerrar
                if (loginUsuario) loginUsuario.style.borderColor = '#E0E0E0';
                if (loginPassword) loginPassword.style.borderColor = '#E0E0E0';
                if (loginUsuarioError) loginUsuarioError.classList.remove('show');
                if (loginPasswordError) loginPasswordError.classList.remove('show');
            }
        });
    }

    // Validación de usuario
    if (loginUsuario && loginUsuarioError) {
        loginUsuario.addEventListener('input', function() {
            const value = this.value.trim();
            
            if (value.length === 0) {
                this.style.borderColor = '#E0E0E0';
                loginUsuarioError.classList.remove('show');
            } else if (value.length < 3) {
                this.style.borderColor = '#E63946';
                loginUsuarioError.textContent = 'El usuario debe tener al menos 3 caracteres.';
                loginUsuarioError.classList.add('show');
            } else {
                this.style.borderColor = '#2A9D8F';
                loginUsuarioError.classList.remove('show');
            }
        });
    }

    // Validación de contraseña
    if (loginPassword && loginPasswordError) {
        const passwordWrapper = loginPassword.closest('.input-wrapper');
        
        if (passwordWrapper && !passwordWrapper.querySelector('.toggle-password')) {
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
            
            passwordWrapper.appendChild(toggleButton);

            toggleButton.addEventListener('click', function(e) {
                e.preventDefault();
                const type = loginPassword.type === 'password' ? 'text' : 'password';
                loginPassword.type = type;
                
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

        loginPassword.addEventListener('input', function() {
            const value = this.value;
            
            if (value.length === 0) {
                this.style.borderColor = '#E0E0E0';
                loginPasswordError.classList.remove('show');
            } else if (value.length < 6) {
                this.style.borderColor = '#E63946';
                loginPasswordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
                loginPasswordError.classList.add('show');
            } else {
                this.style.borderColor = '#2A9D8F';
                loginPasswordError.classList.remove('show');
            }
        });
    }

    // Manejar envío del formulario
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const usuario = loginUsuario.value.trim();
            const password = loginPassword.value;
            
            let isValid = true;
            
            if (usuario.length < 3) {
                loginUsuario.style.borderColor = '#E63946';
                loginUsuarioError.textContent = 'El usuario debe tener al menos 3 caracteres.';
                loginUsuarioError.classList.add('show');
                isValid = false;
            }
            
            if (password.length < 6) {
                loginPassword.style.borderColor = '#E63946';
                loginPasswordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
                loginPasswordError.classList.add('show');
                isValid = false;
            }
            
            if (isValid) {
                console.log('Login exitoso:', { usuario, password: '***' });
                alert('¡Inicio de sesión exitoso! Bienvenido ' + usuario);
                modal.style.display = 'none';
                loginForm.reset();
                loginUsuario.style.borderColor = '#E0E0E0';
                loginPassword.style.borderColor = '#E0E0E0';
            }
        });
    }
}

// ===== HELP DROPDOWN =====
function setupHelpDropdown() {
    const helpDropdown = document.querySelector('.help-dropdown');
    const helpButton = document.querySelector('.btn-help-circle');
    const helpMenu = document.querySelector('.help-dropdown-menu');

    if (helpButton && helpMenu) {
        // Toggle del menú al hacer click en el botón
        helpButton.addEventListener('click', function(e) {
            e.stopPropagation();
            helpMenu.classList.toggle('show');
        });

        // Cerrar el menú al hacer click fuera de él
        document.addEventListener('click', function(e) {
            if (helpDropdown && !helpDropdown.contains(e.target)) {
                helpMenu.classList.remove('show');
            }
        });

        // Prevenir que el menú se cierre al hacer click dentro de él
        helpMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Detectar el tipo de pago y los datos del pedido
function detectPaymentType() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    const plan = urlParams.get('plan');
    const petName = urlParams.get('pet');
    
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
    
    if (type === 'subscription' && plan) {
        currentPaymentType = 'subscription';
        currentPlan = plan;
        breadcrumbCurrent.textContent = `Pago - Suscripción ${capitalizeFirst(plan)}`;
        console.log('Detectado: Suscripción', plan);
    } else if (type === 'adoption' || petName) {
        currentPaymentType = 'adoption';
        currentPetData = {
            name: petName || 'Prime',
            image: urlParams.get('image') || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&h=150&fit=crop'
        };
        breadcrumbCurrent.textContent = `Pago - Adopción de ${currentPetData.name}`;
        console.log('Detectado: Adopción de', currentPetData.name);
    } else {
        currentPaymentType = 'adoption';
        currentPetData = {
            name: 'Prime',
            image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&h=150&fit=crop'
        };
        console.log('Usando valores por defecto');
    }
}

// Actualizar el resumen del pedido según el contexto
function updateOrderSummary() {
    const orderContent = document.getElementById('orderContent');
    const subtotalRow = document.getElementById('subtotalRow');
    const shippingRow = document.getElementById('shippingRow');
    const kitRow = document.getElementById('kitRow');
    const vaccinesRow = document.getElementById('vaccinesRow');
    
    console.log('Actualizando resumen para:', currentPaymentType);
    
    if (currentPaymentType === 'adoption') {
        orderContent.innerHTML = `
            <div class="order-item">
                <img src="${currentPetData.image}" alt="${currentPetData.name}" class="order-item-image">
                <div class="order-item-info">
                    <h3 class="order-item-name">Adopción de ${currentPetData.name}</h3>
                    <p class="order-item-details">Incluye documentación, revisión veterinaria y kit básico de adopción</p>
                </div>
            </div>
        `;
        
        subtotalRow.style.display = 'none';
        shippingRow.style.display = 'flex';
        kitRow.style.display = 'flex';
        vaccinesRow.style.display = 'flex';
        
        document.getElementById('shippingValue').textContent = `S/ ${PRICES.adoption.shipping.toFixed(2)}`;
        document.getElementById('kitValue').textContent = `S/ ${PRICES.adoption.kit.toFixed(2)}`;
        document.getElementById('vaccinesValue').textContent = `S/ ${PRICES.adoption.vaccines.toFixed(2)}`;
        
        const total = PRICES.adoption.shipping + PRICES.adoption.kit + PRICES.adoption.vaccines;
        document.getElementById('totalValue').textContent = `S/ ${total.toFixed(2)}`;
        
        console.log('Total adopción:', total);
        
    } else if (currentPaymentType === 'subscription') {
        const planNames = {
            basico: 'Básico',
            estandar: 'Estándar',
            premium: 'Premium'
        };
        
        const planDescriptions = {
            basico: 'Apoyo mensual para el cuidado de nuestras mascotas',
            estandar: 'Incluye beneficios adicionales y actualizaciones mensuales',
            premium: 'Máximo nivel de apoyo con beneficios exclusivos'
        };
        
        orderContent.innerHTML = `
            <div class="order-item">
                <div class="order-item-info">
                    <h3 class="order-item-name">Plan ${planNames[currentPlan]}</h3>
                    <p class="order-item-details">${planDescriptions[currentPlan]}</p>
                    <span class="plan-badge">Suscripción Mensual</span>
                </div>
            </div>
        `;
        
        subtotalRow.style.display = 'flex';
        shippingRow.style.display = 'none';
        kitRow.style.display = 'none';
        vaccinesRow.style.display = 'none';
        
        const planPrice = PRICES.plans[currentPlan];
        document.getElementById('subtotalValue').textContent = `S/ ${planPrice.toFixed(2)}`;
        document.getElementById('totalValue').textContent = `S/ ${planPrice.toFixed(2)}`;
        
        console.log('Total suscripción:', planPrice);
    }
}

// Formateo automático de campos mientras el usuario escribe
function setupFieldFormatting() {
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryDateInput = document.getElementById('expiryDate');
    const cvvInput = document.getElementById('cvv');
    
    // Formatear número de tarjeta (XXXX XXXX XXXX XXXX)
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;
    });
    
    // Formatear fecha de expiración (MM/AA)
    expiryDateInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
    });
    
    // Solo números en CVV
    cvvInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
    });
    
    // Solo letras en nombre del titular
    const cardNameInput = document.getElementById('cardName');
    cardNameInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    });
    
    // Solo números en código postal
    const postalCodeInput = document.getElementById('postalCode');
    postalCodeInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 5);
    });
}

// Validaciones en tiempo real con mensajes claros
function setupFormValidation() {
    const form = document.getElementById('paymentForm');
    const inputs = form.querySelectorAll('input[required]');
    
    // Validar cada campo cuando pierde el foco
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() !== '' || this.type === 'checkbox') {
                validateField(this);
            }
        });
        
        // Limpiar error cuando el usuario empieza a escribir
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                clearError(this);
            }
        });
    });
}

// Validar un campo individual
function validateField(field) {
    const fieldId = field.id;
    let isValid = true;
    let errorMessage = '';
    
    // Si el campo está vacío y es requerido
    if (field.hasAttribute('required') && field.value.trim() === '' && field.type !== 'checkbox') {
        isValid = false;
        errorMessage = 'Por favor, completa este campo';
        showError(field, errorMessage);
        return false;
    }
    
    // Limpiar error anterior
    clearError(field);
    
    // Validaciones específicas por campo
    switch(fieldId) {
        case 'cardNumber':
            const cardNumber = field.value.replace(/\s/g, '');
            if (cardNumber.length === 0) {
                isValid = false;
                errorMessage = 'Ingresa el número de tu tarjeta';
            } else if (cardNumber.length < 13 || cardNumber.length > 19) {
                isValid = false;
                errorMessage = 'El número de tarjeta debe tener entre 13 y 19 dígitos';
            }
            break;
            
        case 'cardName':
            if (field.value.trim().length === 0) {
                isValid = false;
                errorMessage = 'Ingresa el nombre del titular';
            } else if (field.value.trim().length < 3) {
                isValid = false;
                errorMessage = 'Ingresa el nombre completo como aparece en la tarjeta';
            } else if (!field.value.trim().includes(' ')) {
                isValid = false;
                errorMessage = 'Ingresa nombre y apellido completos';
            }
            break;
            
        case 'expiryDate':
            if (field.value.length === 0) {
                isValid = false;
                errorMessage = 'Ingresa la fecha de expiración';
            } else if (field.value.length !== 5) {
                isValid = false;
                errorMessage = 'Formato debe ser MM/AA (ejemplo: 12/25)';
            } else if (!validateExpiryDate(field.value)) {
                isValid = false;
                errorMessage = 'La tarjeta está vencida o la fecha es inválida';
            }
            break;
            
        case 'cvv':
            if (field.value.length === 0) {
                isValid = false;
                errorMessage = 'Ingresa el código CVV';
            } else if (field.value.length < 3 || field.value.length > 4) {
                isValid = false;
                errorMessage = 'El CVV debe tener 3 o 4 dígitos (reverso de la tarjeta)';
            }
            break;
            
        case 'email':
            if (field.value.length === 0) {
                isValid = false;
                errorMessage = 'Ingresa tu correo electrónico';
            } else if (!validateEmail(field.value)) {
                isValid = false;
                errorMessage = 'Formato de correo inválido (ejemplo: usuario@email.com)';
            }
            break;
            
        case 'address':
            if (field.value.trim().length === 0) {
                isValid = false;
                errorMessage = 'Ingresa tu dirección';
            } else if (field.value.trim().length < 10) {
                isValid = false;
                errorMessage = 'Ingresa una dirección completa (calle, número, depto/casa)';
            }
            break;
            
        case 'city':
            if (field.value.trim().length === 0) {
                isValid = false;
                errorMessage = 'Ingresa tu ciudad';
            } else if (field.value.trim().length < 3) {
                isValid = false;
                errorMessage = 'Ingresa un nombre de ciudad válido';
            }
            break;
            
        case 'postalCode':
            if (field.value.length === 0) {
                isValid = false;
                errorMessage = 'Ingresa tu código postal';
            } else if (field.value.length < 5) {
                isValid = false;
                errorMessage = 'El código postal debe tener al menos 5 dígitos';
            }
            break;
            
        case 'acceptTerms':
            if (!field.checked) {
                isValid = false;
                errorMessage = 'Debes aceptar los términos y condiciones para continuar';
            }
            break;
    }
    
    if (!isValid) {
        showError(field, errorMessage);
    }
    
    return isValid;
}

// Mostrar mensaje de error
function showError(field, message) {
    field.classList.add('error');
    const errorElement = document.getElementById(field.id + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

// Limpiar error
function clearError(field) {
    field.classList.remove('error');
    const errorElement = document.getElementById(field.id + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
}

// Validar fecha de expiración
function validateExpiryDate(date) {
    if (date.length !== 5) return false;
    
    const [month, year] = date.split('/');
    const monthNum = parseInt(month);
    const yearNum = parseInt('20' + year);
    
    if (monthNum < 1 || monthNum > 12) return false;
    
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    
    if (yearNum < currentYear) return false;
    if (yearNum === currentYear && monthNum < currentMonth) return false;
    
    return true;
}

// Validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Configurar el envío del formulario
function setupFormSubmission() {
    const form = document.getElementById('paymentForm');
    const submitButton = form.querySelector('.btn-submit');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        console.log('Validando formulario...');
        
        // Validar todos los campos
        const inputs = form.querySelectorAll('input[required]');
        let isValid = true;
        let firstErrorField = null;
        
        inputs.forEach(input => {
            const fieldValid = validateField(input);
            if (!fieldValid) {
                isValid = false;
                if (!firstErrorField) {
                    firstErrorField = input;
                }
            }
        });
        
        if (!isValid) {
            console.log('Formulario tiene errores');
            // Hacer scroll al primer error
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstErrorField.focus();
            }
            return;
        }
        
        console.log('Formulario válido, procesando pago...');
        
        // Deshabilitar el botón para evitar doble envío
        submitButton.disabled = true;
        submitButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
            </svg>
            Procesando Pago...
        `;
        
        // Simular procesamiento del pago
        setTimeout(() => {
            processPayment();
        }, 2000);
    });
}

// Procesar el pago
function processPayment() {
    const form = document.getElementById('paymentForm');
    
    // Recopilar datos del pago
    const paymentData = {
        type: currentPaymentType,
        plan: currentPlan,
        pet: currentPetData,
        cardNumber: document.getElementById('cardNumber').value,
        cardName: document.getElementById('cardName').value,
        expiryDate: document.getElementById('expiryDate').value,
        cvv: document.getElementById('cvv').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        postalCode: document.getElementById('postalCode').value,
        savePaymentMethod: document.getElementById('savePaymentMethod').checked,
        timestamp: new Date().toISOString()
    };
    
    console.log('Procesando pago:', paymentData);
    
    // Mostrar mensaje de éxito
    showSuccessMessage();
}

// Mostrar mensaje de éxito
function showSuccessMessage() {
    // Crear overlay de éxito
    const successOverlay = document.createElement('div');
    successOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    successOverlay.innerHTML = `
        <div style="
            background: white;
            padding: 3rem;
            border-radius: 20px;
            text-align: center;
            max-width: 500px;
            animation: slideUp 0.4s ease-out;
        ">
            <div style="
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, #2A9D8F 0%, #1d766a 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1.5rem;
            ">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            </div>
            <h2 style="color: #264653; font-size: 2rem; margin-bottom: 1rem;">¡Pago Exitoso!</h2>
            <p style="color: #666; font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.6;">
                ${currentPaymentType === 'adoption' 
                    ? `Tu adopción de ${currentPetData.name} ha sido procesada correctamente. Recibirás un correo con los siguientes pasos.`
                    : `Tu suscripción al Plan ${capitalizeFirst(currentPlan)} ha sido activada. ¡Gracias por tu apoyo!`
                }
            </p>
            <button onclick="window.location.href='/Inicio.html'" style="
                padding: 1rem 2rem;
                background: linear-gradient(135deg, #2A9D8F 0%, #1d766a 100%);
                color: white;
                border: none;
                border-radius: 12px;
                font-size: 1.1rem;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.3s ease;
            ">Volver al Inicio</button>
        </div>
    `;
    
    // Agregar estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(successOverlay);
}

// Utilidades
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}