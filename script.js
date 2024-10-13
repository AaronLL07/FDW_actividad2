const formulario = document.getElementById("formulario");
const botonEnviar = document.getElementById("botonEnviar");
const mensajeContainer = document.getElementById("mensaje-container");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario
    botonEnviar.textContent = "Enviando..."; // Cambia el texto del botón
    botonEnviar.disabled = true; // Desactiva el botón para evitar múltiples envíos

    // Simula un retraso de 2 segundos para enviar el formulario
    setTimeout(() => {
        botonEnviar.textContent = "Enviado"; // Cambia el texto del botón
        botonEnviar.disabled = false; // Reactiva el botón

        // Crea un mensaje de éxito y lo añade al contenedor
        const mensajeExito = document.createElement("p");
        mensajeExito.textContent = "¡Tu formulario fue enviado exitosamente!";
        mensajeExito.classList.add("mensaje-exito"); // Añade una clase para estilos
        mensajeContainer.appendChild(mensajeExito); // Agrega el mensaje al contenedor
    }, 2000);
});
