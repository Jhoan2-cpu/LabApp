// Generar dinámicamente el organigrama de Hill Climbing
document.addEventListener("DOMContentLoaded", () => {
    const organigrama = document.getElementById("organigrama");


    const infografia = document.getElementById("infografia");
    infografia.innerHTML = `
        <p>Un algoritmo genético es un método de optimización inspirado en la evolución natural. 
        Utiliza conceptos como selección, cruce y mutación para encontrar soluciones óptimas.</p>
    `;

    // Inicializar popovers de Bootstrap
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
});