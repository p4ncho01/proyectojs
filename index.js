// Variables Globales
let id = 0;
let nombre = "";
let precio = 0;
let stock = 0;
let repetir = true;
let respuesta = 0;
let mostarProductos = "";
let arregloProductos = [];

class Producto {
    // Constructor de la clase
    constructor(id, nombre, precio, stock) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.stock = stock,
        this.subtotalProducto = 0            
    }

    subtotalPorProducto() {
        this.subtotalProducto = this.precio * this.stock;
    }
}

respuesta = parseInt(prompt("Bienvenido al inventario del almacen. Presione el número correspondiente a la opción del menú que desea realizar y luego haga click en aceptar. \n\n1.Agregar producto \n2.Salir\n"));

do {
    if (respuesta == 1) {
        ingresarProducto();
        alert("Producto ingresado con exito. :)");
        respuesta = parseInt(prompt("Presione el número correspondiente a la opción del menú que desea realizar y luego haga click en aceptar. \n\n1.Agregar producto \n2.Salir\n"));
    } else if (respuesta == 2) {
        repetir = false;
        alert("Ha seleccionado salir.");
    } else {
        alert("Ingresaste una opción incorrecta. Por favor vuelva a intentarlo. :(");
        respuesta = parseInt(prompt("Presione el número correspondiente a la opción del menú que desea realizar y luego haga click en aceptar. \n\n1.Agregar producto \n2.Salir\n"));
    }
} while (repetir);


// recorremos el arregloProductos con el método forEach
arregloProductos.forEach(recorrerArreglo);
alert(JSON.stringify(arregloProductos));
console.log(`Arreglo productos: ${JSON.stringify(arregloProductos)}`);
console.log(arregloProductos);
console.log(typeof (`Arreglo productos: ${JSON.stringify(arregloProductos)}`)); // string
console.log(typeof (arregloProductos)); // object

totalGeneral();

mostarProductos = "";
arregloProductos.forEach(recorrerArreglo);
alert(JSON.stringify(arregloProductos));
console.log(arregloProductos);

// funciones
function ingresarProducto() {
    let nuevoProducto;

    id = ++id;
    nombre = prompt(`Introduzca el nombre del producto${id}.`);
    precio = Number(prompt(`Introduzca el precio del producto${id}.`));
    stock = Number(prompt(`Introduzca la stock del producto${id}.`));
    nuevoProducto = new Producto(id, nombre, precio, stock);
    nuevoProducto.subtotalPorProducto();
    console.log(nuevoProducto);
    arregloProductos.push(nuevoProducto);
}

function recorrerArreglo(item, index) {
    // mostarProductos += index + ": " + item + "<br>"; // object
    mostarProductos += index + ": " + JSON.stringify(item) + "<br>";
}



