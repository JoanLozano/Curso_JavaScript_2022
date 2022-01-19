class Producto{
    static ContadorProductos = 0;

    constructor(nombre,precio){
        this._idproducto = ++Producto.ContadorProductos;
        this._nombre = nombre;
        this._precio = precio;

    }
    get idproducto(){
        return this._idproducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `Id Prodcuto: ${this.idproducto}, Nombre: ${this.nombre}, Precio: $${this.precio}`; 
    }
}

class Orden{
    static ContadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 7;
    }

    constructor(){
        this._idorden = ++Orden.ContadorOrdenes;
        this._productos = [];
        this._ContadorProductosAgregados = 0;
    }

    get IdOrden(){
        return this._idorden;
    }

    AgregarProductos(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto); //  ?Agregamos productos al arreglo
            //this._productos[this._ContadorProductosAgregados] = producto; // ?    Otra forma de hacerlo
        }else{
            console.log('No se pueden agregar mas productos');
        }
    }

    CalcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;  //  ? TotalVenta es igual a el total anterior mas el precio del producto agregado
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden += '\n' + producto.toString() + ', '; 
        }
        console.log(`Orden: ${this._idorden}, Total: $${this.CalcularTotal()}, Productos: ${productosOrden}`);
    }
}

let Producto1 = new Producto('Camisa', 50);
let Producto2 = new Producto('Pantalon', 40);
let Producto3 = new Producto('zapato', 75);
let Producto4 = new Producto('calcetines', 10);
let Producto5 = new Producto('corbata', 35);
let Producto6 = new Producto('Cinturon', 30);

/*
console.log(Producto1.toString());
console.log(Producto2.toString());
console.log(Producto3.toString());
console.log(Producto4.toString());
console.log(Producto5.toString());
*/

let Orden1 = new Orden();
Orden1.AgregarProductos(Producto1);
Orden1.AgregarProductos(Producto2);
Orden1.AgregarProductos(Producto3);
Orden1.AgregarProductos(Producto4);
Orden1.AgregarProductos(Producto5);
Orden1.AgregarProductos(Producto6);

Orden1.mostrarOrden();