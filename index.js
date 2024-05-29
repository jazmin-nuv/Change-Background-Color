// ESCRIBIR MIS FUNCIONES
// FUNCIÓN 1. GENERAR UN COLOR ALEATORIO
function generarColor() {
    // Generar mi valor de RGB por separado y guardarlos en variables
    const rojo = Math.floor(Math.random()*255);
    const verde = Math.floor(Math.random()*255);
    const azul = Math.floor(Math.random()*255);
    color=[rojo,verde,azul];
    return color;
}
//console.log(generarColor());

// FUNCIÓN 2. CAMBIAR EL COLOR DE FONDO DEL CUERPO DE LA PÁGINA
function cambioBackground(){
    let vecColor = generarColor();
    // --> RGB(X, Y, Z)
    document.body.style.background = "rgb("+vecColor+")";
    console.log(vecColor);
}

// // Buscar el botón en mi HTML por su clase u id
// // btn btn-warning
// // Cada vez que mi botón sea accionado, voy a llamar o ejecutar mi función cambioBackground(); 

document.addEventListener("DOMContentLoaded",function(){
    let boton = document.getElementById("btn1");
    boton.addEventListener("click",cambioBackground);
});

