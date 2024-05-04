function sumarProductos(a, b){
    let total = a*b;
    return total;
}

let producto = "platos";
let precioU = 2500;
let cantidad = prompt(`Ingrese la cantidad de ${producto} que desea: `);

let total2 = sumarProductos(precioU, cantidad)

console.log(`${cantidad} ${producto} cuestan $${total2}.`);