$(document).ready(function () {
    $("#registerForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
            },
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,
            }
        },
        messages: {
            name: {
                required: 'El nombre es obligatorio',
                minlength: 'El nombre debe tener al menos 3 caracteres'
            },
            email: {
                required: 'El email es requerido',
                email: 'El email debe poseer el siguiente formato: abc@mail.com',
            },
            phone: {
                required: 'El telefono es obligatorio'
            }
        }
    });
});
