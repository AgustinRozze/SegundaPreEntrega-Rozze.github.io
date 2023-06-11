nombrecompleto = prompt('Ingresa tu nombre');
alert('Te damos la bienvenida ' +nombrecompleto)






const Datos = [
    {
        nombre: "nike air max",
        subtitle:"zapatilla de alto rendimiento para basketball",
        isbn13:"9747383372",
        precio:18000.00,
    },
    {
        nombre: "nike vapor max ",
        subtitle:"zapatilla de alto rendimiento para basketball",
        isbn13:"9747383373",
     
        precio:23000.00,
    },
    {
        nombre: "nike vapor max ",
        subtitle:"zapatilla de alto rendimiento para basketball",
        isbn13:"9747383374",
        precio:30000.00,
    },
    {
        nombre: "nike vaporfly",
        subtitle:"zapatilla de alto rendimiento para basketball",
        isbn13:"9747383375",
        precio:40000.00,
    }
    ];
    
    let Carrito = {
        Productos : [],
        GetTotal: function() {
            let suma = 0;
            for (let p of this.Productos) {
                suma += p.precio * p.cantidad;
            }
            return suma;
        },
        Agregar: function(producto, cantidad) {
            this.Productos.push({ ...producto, cantidad: cantidad });
        },
        Vaciar: function() {
            this.Productos = [];
        }
    }
    function GetStringProducto(producto){
      return producto.nombre + " - $" + producto.precio + " c/u";
    }
    function GetListaProductoString(){
        var lista = "";
        for (var i = 0; i < Datos.length; i++) {
            lista += `${i+1}) ${GetStringProducto(Datos[i])}\n`;
        }
        return lista;
    }
    function listadoProductos(){
        let listado = Number(prompt(GetListaProductoString()));
        let producto = GetProducto(listado);
        if (producto != null) {
            cantidad = Number(prompt("Cuantas desea llevar?"));
            Carrito.Agregar(producto, cantidad);
    
            compra = Number(prompt('\nQuiere agregar mas cosas al carrito? \n1)precione 1 para seguir comprando \n2)precione 2 para finalizar'))
            if( compra == 1 ){
                listadoProductos();
            }
            else
            {
                alert(`Total a pagar: $${Carrito.GetTotal()} `)
            }
        }
        else{
            alert("Opcion Erronea");
            listadoProductos();
        }
    }
    
        function GetProducto(seleccion) {
            if (Datos.length >= seleccion) {
                return Datos[seleccion - 1];
            }
            return null;
        }
        listadoProductos();

        const listaTitulosYPrecios = Datos.map((Datos) =>{
            return{
                title: Datos.titulo,
                price:Datos.precio,
            }
            
            });
            console.log(listaTitulosYPrecios);
            
            
            Datos.sort( (a,b)=> b.price - a.price);
            console.log(Datos);
            
            const saludar = (nombrecompleto) => {
                console.log ('vuelva pronto! '+ nombrecompleto )
            }
            saludar(nombrecompleto); 


        