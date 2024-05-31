let container = document.getElementById("#container");

const productos =[
    {nombre: "Procesador", precio: 70000, stock: 25},
    {nombre: "Motherboard", precio: 30000, stock: 70},
    {nombre: "Placa de Video", precio: 300000, stock: 10}
]

productos.forEach((prod)=>{
    //console.log("$" + prod.precio);

    let card = document.createElement("div");
    card.classList.add("card"); 

    let h1 = document.createElement("h1"); 
    h1.textContent = prod.nombre; 

    let p = document.createElement("p");
    p.textContent = "$" + prod.precio;

    contenedor.append(card);
    card.append(h1);

})