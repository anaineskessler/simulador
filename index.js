function agregar(producto,cantidad,precio,nroart){
    pedidoproducto[nroart] = producto;
    pedidocantidad[nroart] = cantidad;
    pedidocosto[nroart] = precio;
    alert (`PRODUCTO AGREGADO: \n Producto: ${pedidoproducto[nroart]} Cantidad: ${pedidocantidad[nroart]} Costo total: $ ${pedidocosto[nroart]}`);
} 

function calculocosto(precio, cantidad) {
    costo = precio * cantidad; 
//    alert(`${costo}`);
    return costo;
}

function buscoprecio(producto, listaproductos,listaprecios){
    for (let index = 0; index < listaproductos.length; index++) {
        if (producto === listaproductos[index]) {
           cod = index;
//           alert(`${producto}, ${listaproductos[index]}, ${cod}`);
        }
    };
    return cod;
}

function calculototal () {
    totalpedido=0;
    for (let index = 0; index < pedidocosto.length; index++) {
        totalpedido = totalpedido + pedidocosto[index];
    }
    return totalpedido;
}

function porcentaje(valor,porc) {
    let importe = valor*porc/100;
    return importe;
}

// Mediodía: 25% Descuento, Efectivo: 15% Descuento, Tarjeta 1 pago: 10% Descuento
function calculopromo(total,nropromo) {
    switch (nropromo) {
        case 1:
            total = total - porcentaje(total,25);
//            alert("promo1");
            break;
        case 2:
            total = total - porcentaje(total,15);
//            alert("promo2");
            break;
        case 3:
            total = total - porcentaje(total,10);   
//            alert("promo3");     
            break;
        default:
            break;
    }
    return total;
}

function verpedido(producto,cantidad,costo){
    for (let index = 0; index < producto.length; index++) {
        alert(`Producto: ${producto[index]} Cantidad: ${cantidad[index]} Precio: $${costo[index]}\n`);
    }
}


//mis productos
let listaproductos = ['ravioles', 'sorrentinos', 'agnolotis', 'fideos', 'ñoquis'];
let listaprecios = [800, 850, 950, 600, 600];

//vacio pedido
let pedidoproducto =[];
let pedidocantidad = [];
let pedidocosto = [];
let nroart = 0;
let costo = 0;
let totalpedido = 0;
let promo =false;
let nropromo = 0;
let total=0;

let opcion = parseInt(prompt("Elija una de las siguientes funciones \n 1- Agregar producto al pedido \n 2- Calcular Subtotal Compra \n 3- Calcular Promoción \n 4- Ver pedido actual \n 0- Finalizar Pedido"));
// alert(`Cant ${nroart}`);
while (opcion != 0) {
  
    switch (opcion) {
        case 1:
            let producto = prompt("Ingrese el producto (ravioles, sorrentinos, agnolotis, fideos, ñoquis)");
            let cantidad = parseInt(prompt("Ingrese la cantidad"));
            buscoprecio(producto,listaproductos,listaprecios);
            calculocosto(listaprecios[cod],cantidad);
            agregar(producto,cantidad,costo,nroart);
//            verpedido(pedidoproducto,pedidocantidad,pedidocosto);
            nroart =nroart + 1;
            break;
        case 2:
            totalpedido = calculototal();
            alert(`Total del Pedido hasta el momento: $${totalpedido}`);
            break;
        case 3:
            nropromo = parseInt(prompt("Elija una de las siguientes promociones \n 1- Mediodía \n 2- Efectivo \n 3- Tarjeta un pago \n 0- Menú anterior"));
            if (totalpedido === 0) {
                totalpedido = calculototal();
            };
//            alert(`Promo elegida ${nropromo} Importe sin promo: $ ${totalpedido}`);
            total = calculopromo(totalpedido,nropromo);
            alert(`Pedido con la Promoción ${nropromo}: $ ${total}`);
            promo=true;
            break;
        case 4:
            verpedido(pedidoproducto,pedidocantidad,pedidocosto);
            break;
        default:
            break;
    } 
//    alert(`Cant ${nroart}`);
    opcion = parseInt(prompt("Elija una de las siguientes funciones \n 1- Agregar producto al pedido \n 2- Calcular Subtotal Compra \n 3- Calcular Promoción \n 4- Ver pedido actual \n 0- Finalizar Pedido"));
}
totalpedido = calculototal();
if (promo & total > 0){
    alert(`Valor del pedido con promoción es $ ${total}`);
} else if (totalpedido > 0) {
    alert(`Valor del pedido es $ ${totalpedido}`);
} else {
    alert(`No hizo ningún pedido`);
}
