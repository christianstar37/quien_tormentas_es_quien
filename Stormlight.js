function tacharPersonaje(elemento) {
    if (!elemento.style.filter || elemento.style.filter === "none") {
        elemento.style.filter = "grayscale(100%)";
    } else {
        elemento.style.filter = "none";
        elemento.style.opacity = "1";
    }
}

function actualizarPersonaje(elemento) {
    let selector = document.getElementById("personajeElegido");
    let personajeSeleccionado = selector.value;
    let miImagen = document.getElementById("imagenPersonaje")
    miImagen.src = "Retratos/" + personajeSeleccionado + ".png"
}