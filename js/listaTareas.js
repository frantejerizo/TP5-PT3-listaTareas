function crearTarea() {
    const inputTareas = document.getElementById("inputTareas");
    const textoInput = inputTareas.value.trim();

    // Validar longitud mínima (la maxima no hace falta pq en el html tengo maxlenght validando ello)
    if (textoInput.length < 4) {
        alert('La tarea debe tener al menos 4 caracteres.');
        inputTareas.focus();
        return;
    }

    // Creo los elementos que voy a agregar
    const divNuevaTarea = document.createElement("div");
    const liNuevaTarea = document.createElement("li");
    const botonEliminarNuevaTarea = document.createElement("button");
    const iconoBasurero = document.createElement("i");

    // Añadir clases y contenido
    divNuevaTarea.className = "d-flex justify-content-between align-items-center mb-2";
    liNuevaTarea.innerText = textoInput;
    botonEliminarNuevaTarea.className = "btn btn-danger btn-sm";
    botonEliminarNuevaTarea.onclick = function () {
        divNuevaTarea.remove();
    };
    iconoBasurero.className = "bi bi-trash3";

    // Construir la estructura
    const contenedorPadre = document.getElementById("listaDesordenada");

    contenedorPadre.prepend(divNuevaTarea);
    divNuevaTarea.prepend(liNuevaTarea)
    divNuevaTarea.appendChild(botonEliminarNuevaTarea)
    botonEliminarNuevaTarea.appendChild(iconoBasurero)

    // Limpiar el campo de entrada
    inputTareas.value = '';
    
    // Con el focus hacemos que el cursor vuelva a ponerse en el input para escribir la siguiente tarea
    inputTareas.focus();
}
