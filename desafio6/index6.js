let producto = { //creo un objeto
    nombre: "Remera", //defino nombre
    precio: 15000, //defino precio
    stock: 50 //defino stock
}

producto.nombre = "Zapatilla"; //reescribo nombre
producto.categoria = "Calzado"; //agrego categoría

delete producto.stock //borro la propiedad stock

console.log(`Las propiedades del producto son: \n Nombre: ${producto.nombre} \n Precio: $${producto.precio} \n Stock: Agotado`)