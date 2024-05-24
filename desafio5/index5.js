const productos = ["Procesador", "Placa madre", "Memoria RAM", "Placa de video"]; //creo un array

for(let i = 0; i < productos.length; i++){ //utilizo un bucle para recorrer y mostrar mi array
    console.log(productos[i]);
}
console.log("") //espacio para separar arrays

productos.pop(); //elimino mi último objeto del array

for(i = 0; i < productos.length; i++){ //vuelvo a mostrar mi array
    console.log(productos[i]);
}