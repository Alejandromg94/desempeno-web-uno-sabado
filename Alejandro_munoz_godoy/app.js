
let nombreProducto = prompt("Por favor, ingresa el nombre del producto:");

let stockProducto = 50;     
let ventasTotales = 0;      

function mostrarInventario() {
    console.log(`Inventario actual de ${nombreProducto}: ${stockProducto} unidades, Ventas totales: ${ventasTotales} unidades.`);
   
}



const registrarVenta = function(cantidadVendida) {
    if (cantidadVendida <= stockProducto) {
       
        stockProducto -= cantidadVendida;
        ventasTotales += cantidadVendida;
        console.log(` Venta exitosa: ${cantidadVendida} unidades de ${nombreProducto}`);
    } else {
        console.log(" Stock insuficiente para esta venta.");
    }
};

const reponerStock = function(cantidadRepuesta) {
    stockProducto += cantidadRepuesta;
    console.log(` Reposición exitosa: ${cantidadRepuesta} unidades de ${nombreProducto}`);
}

// mostrarInventario();
// registrarVenta(20);
// mostrarInventario();
// reponerStock(30);
// mostrarInventario();


const simularDiaDeVentas = () => {
    console.log(" === INICIO SIMULACIÓN DÍA DE VENTAS ===");
    mostrarInventario();
    
    const cantidadPorCliente = 8; 
    
    for (let cliente = 1; cliente <= 5; cliente++) {
        console.log(`\n Cliente ${cliente} intenta comprar ${cantidadPorCliente} unidades...`);
        registrarVenta(cantidadPorCliente);
    }
    
    console.log("\n === FIN SIMULACIÓN DÍA DE VENTAS ===");
    mostrarInventario();
};


function diagnosticoInventario() {
    console.log(" === DIAGNÓSTICO DE INVENTARIO ===");
    mostrarInventario();
    
    console.log("\n ANÁLISIS DE STOCK:");
    
    if (stockProducto >= 40) {
        console.log(" Nivel de stock óptimo");
    } else if (stockProducto >= 20) {
        console.log(" Stock moderado, considera reponer pronto");
    } else if (stockProducto >= 10) {
        console.log(" Stock bajo, necesita reposición");
    } else {
        console.log(" ¡Alerta! Bajo stock, reposición urgente");
    }
    
    
    console.log("\n ANÁLISIS DE VENTAS:");
    
    let categoriaVentas;
    
    if (ventasTotales >= 40) {
        categoriaVentas = "alta";
    } else if (ventasTotales >= 20) {
        categoriaVentas = "moderada";
    } else {
        categoriaVentas = "baja";
    }
    
    switch (categoriaVentas) {
        case "alta":
            console.log(" Producto estrella, alta demanda");
            break;
        case "moderada":
            console.log(" Ventas moderadas");
            break;
        case "baja":
            console.log(" Baja rotación del producto");
            break;
        default:
            console.log(" No se puede determinar el nivel de ventas");
    }
    
    
    console.log("\n RECOMENDACIÓN:");
    
    if (stockProducto >= 30 && ventasTotales >= 30) {
        console.log("Mantener stock alto - Producto de alta rotación");
    } else if (stockProducto < 15 && ventasTotales >= 20) {
        console.log(" REPONER URGENTE - Alta demanda con stock crítico");
    } else if (stockProducto > 40 && ventasTotales < 10) {
        console.log(" Reducir próximos pedidos - Exceso de inventario");
    } else {
        console.log(" Situación estable - Monitorear regularmente");
    }
}
// simularDiaDeVentas();
// diagnosticoInventario();


function iniciarGestion() {
    console.log(" INICIANDO SISTEMA DE GESTIÓN DE INVENTARIO");
    console.log(` Producto en gestión: ${nombreProducto}`);
    
   
    while (true) {
       
        const opcion = prompt(`MENÚ DE INVENTARIO - ${nombreProducto.toUpperCase()}

Selecciona una opción:
1 - Registrar Venta
2 - Reponer Stock
3 - Simular Día de Ventas
4 - Ver Diagnóstico de Inventario
5 - Mostrar Inventario Actual
6 - Cerrar programa

Ingresa el número de tu opción:`);

      
        switch (opcion) {
            case '1': 
                const cantidadVenta = parseInt(prompt("Ingresa la cantidad a vender:"));
                if (!isNaN(cantidadVenta) && cantidadVenta > 0) {
                    registrarVenta(cantidadVenta);
                } else {
                    alert(" Por favor, ingresa una cantidad válida mayor a 0");
                }
                break;

            case '2': 
                const cantidadReposicion = parseInt(prompt("Ingresa la cantidad a reponer:"));
                if (!isNaN(cantidadReposicion) && cantidadReposicion > 0) {
                    reponerStock(cantidadReposicion);
                } else {
                    alert(" Por favor, ingresa una cantidad válida mayor a 0");
                }
                break;

            case '3': 
                simularDiaDeVentas();
                break;

            case '4': 
                diagnosticoInventario();
                break;

            case '5': 
                mostrarInventario();
                break;

            case '6': 
                alert(`¡Gracias por usar el sistema de gestión! 
Producto: ${nombreProducto}
Stock final: ${stockProducto} unidades
Ventas totales: ${ventasTotales} unidades`);
                console.log("=== PROGRAMA FINALIZADO ===");
                return; 

            default:
                alert(" Opción no válida. Por favor, ingresa un número del 1 al 6.");
                break;
        }
    }
}

iniciarGestion();