// Generar dinámicamente el organigrama de Hill Climbing
document.addEventListener("DOMContentLoaded", () => {
    const organigrama = document.getElementById("organigrama");
    organigrama.innerHTML = `
        <div class="text-center">
            <div class="mb-3">
                <div class="btn btn-primary element-org" data-bs-toggle="popover" data-bs-content="Este es el punto de inicio del algoritmo.">Inicio</div>
            </div>
            <div class="mb-3">
                <i class="fas fa-arrow-down fa-2x text-secondary"></i>
            </div>
            <div class="mb-3">
                <div class="btn btn-secondary element-org" data-bs-toggle="popover" data-bs-content="Se genera una solución inicial aleatoria.">Generar solución inicial</div>
            </div>
            <div class="mb-3">
                <i class="fas fa-arrow-down fa-2x text-secondary"></i>
            </div>
            <div class="mb-3">
                <div class="btn btn-secondary element-org" data-bs-toggle="popover" data-bs-content="Se evalúa la calidad de la solución actual.">Evaluar solución</div>
            </div>
            <div class="mb-3">
                <i class="fas fa-arrow-down fa-2x text-secondary"></i>
            </div>
            <div class="mb-3">
                <div class="btn btn-secondary element-org" data-bs-toggle="popover" data-bs-content="Se selecciona un vecino que mejora la solución actual.">Seleccionar vecino mejorado</div>
            </div>
            <div class="mb-3">
                <i class="fas fa-arrow-down fa-2x text-secondary"></i>
            </div>
            <div class="mb-3">
                <div class="btn btn-secondary element-org" data-bs-toggle="popover" data-bs-content="Se actualiza la solución actual con el vecino seleccionado.">Actualizar solución actual</div>
            </div>
            <div class="mb-3">
                <i class="fas fa-arrow-down fa-2x text-secondary"></i>
            </div>
            <div class="mb-3">
                <div class="btn btn-success element-org" data-bs-toggle="popover" data-bs-content="Si la solución es óptima, el algoritmo finaliza.">¿Es óptimo? Finalizar</div>
            </div>
        </div>
    `;

    const infografia = document.getElementById("infografia");
    infografia.innerHTML = `
        <p>Un algoritmo genético es un método de optimización inspirado en la evolución natural. 
        Utiliza conceptos como selección, cruce y mutación para encontrar soluciones óptimas.</p>
    `;

    // Inicializar popovers de Bootstrap
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
});