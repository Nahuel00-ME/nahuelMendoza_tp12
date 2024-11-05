

function rentalcar(tipoVehiculo, diaAlquiler, sillaBebe) {

    let totalAPagar = 0;
    switch (tipoVehiculo.toLowerCase()) {
        case "compacto":
            totalAPagar = 14000 * diaAlquiler;
            break;
        case "mediano":
            totalAPagar = 17000 * diaAlquiler;
            break;
        case "camioneta":
            totalAPagar = 28000 * diaAlquiler;
            break;
        default:
            break;
    }
    console.log(totalAPagar)
    let ctoDiario = 1200;
    if (sillaBebe == true) {
        totalAPagar += ctoDiario * diaAlquiler;
    }
    return totalAPagar;
}
//let diasAlquilados=5;
let diasAlquilados=2;
let vehiculo= "camioneta" ;
//let vehiculo= "COMPACTO" ;
//let sillita = true ;
let sillita = false ;

let precio = rentalcar (vehiculo,diasAlquilados,sillita);
console.log (`Estimado cliente: en base al tipo de vehículo ${vehiculo} alquilado, considerando los ${diasAlquilados} días utilizados, el monto total a pagar es de $`,precio);
//console.log (`Estimado cliente: en base al tipo de vehículo ${vehiculo} alquilado, considerando los ${diasAlquilados} días utilizados y la utilizacion de la sillita de bebe, el monto total a pagar es de $`,precio);
