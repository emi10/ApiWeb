document.querySelector(".register-form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    console.log(e.target.children.users)
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    // try {
    //     const response = await fetch('/users', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     });

    //     if (response.ok) {
    //         const result = await response.json();
    //         console.log('Registro exitoso:', result);
    //         // Redirigir al usuario o mostrar mensaje de éxito
    //     } else {
    //         console.error('Error en el registro:', response.statusText);
    //         // Manejar errores de respuesta del servidor
    //     }
    // } catch (error) {
    //     console.error('Error en la red:', error);
    //     // Manejar errores de red o conexión
    // }
});
