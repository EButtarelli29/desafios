let nombre = "remeras";
let precioU = 200;
let cantidad = prompt("Ingrese la cantidad de " + nombre + " deseada: ");

if(cantidad >= 5){
    alert(`${cantidad} ${nombre} costarán $${precioU*cantidad*0.9}.`);
}else{
    alert(`${cantidad} ${nombre} costarán $${precioU*cantidad}.`);
}

//Swal.fire("SweetAlert2 is working!");