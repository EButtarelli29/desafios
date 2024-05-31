
let precio = document.getElementById("PrecioProducto");
let titulo = document.querySelector("#NombreProducto");

setTimeout(() => {
    titulo.style.color = "red";
precio.innerText = "Precio: $450";
},5000)

