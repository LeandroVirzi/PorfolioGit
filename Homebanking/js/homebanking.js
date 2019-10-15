//Declaración de variables
var nombreUsuario = 'LeandroVirzi';//nombre del usuario.
var saldoCuenta = 30000;//saldo de la cuenta.
var limiteExtraccion = 5000;//limite de extraccion.


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
//para que cargue primero el script
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    //cambiar limite de extraccion.
    var nuevoLimite = prompt("Ingrese el nuevo limite de extraccion: ");
    limiteExtraccion = parseInt(nuevoLimite);//limite.
    //REVISAR
    actualizarLimiteEnPantalla();
    return limiteExtraccion;
}


//EXTRAER DINERO.    
function extraerDinero() {
    //VARIABLES.
    var saldoAnterior = saldoCuenta;//saldo inicial de la cuenta.
    var extraer = prompt("monto que quieres retirar: ");//extraer el dinero.
    var billetes_cien = 100;//validar que el monto pueda ser extraido en billetes de 100.
    


    //validar que el monto pueda ser extraido en billetes de 100.
    if (extraer % 100 > 0 ){
        alert("El monto minimo es de $100");    
    }
    
    //si supera el limite de extraccion.
    else if (extraer > limiteExtraccion){
        alert("Estas superando el limite diario: "+limiteExtraccion);
    }

    //validar el saldo de la cuenta.
    else if (extraer > saldoCuenta ){
        alert("El monto es mayor al Saldo de la cuenta. \n Saldo: " + saldoCuenta)
    }

    //validar que no supere el limite de extraccion.
    else if (extraer > limiteExtraccion ){
        alert("El monto supera el limite de extraccion. \n Limite: "+limiteExtraccion);
    } 

    //validar billetes de 100.
    else if (extraer > 0 && extraer < 100 ){
        alert("El monto minimo es de $100");
    } 
    else {
        //validar que ccuando extrae dinero no supere el limite de extraccion diaria.
        limiteExtraccion = limiteExtraccion- extraer;
        //alert("Limite de extraccion: "+limiteExtraccion+"\n Extraccion diaria: "+limiteExtraccionDiaria);
    
        //saldo de la cuenta actualizado.
        saldoCuenta = parseInt(saldoCuenta) - parseInt(extraer);//a extraer. 
        alert("Has extraido: "+extraer + "\n Saldo anterior: " +saldoAnterior+ "\n Saldo actual: " +saldoCuenta+ " Limite de extraccion: " +limiteExtraccion);//mensaje de saldo.
        
        //actualizar vista.
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
        
    }
}
    

//SUMAR DINERO A LA CUENTA.
function depositarDinero() {
    var saldoAnterior = saldoCuenta;//saldo inicial de la cuenta.
    var deposito = prompt("Ingrese el saldo del dinero a depositar: ");//toma el saldo a ingresar.
    saldoCuenta = parseInt(saldoCuenta) + parseInt(deposito); //actualiza el saldo de la cuenta.
    alert("Has depositado: "+deposito + "\n Saldo anterior: "+saldoAnterior + "\n Saldo actual: "+saldoCuenta);//deposito.
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//PAGAR SERVICIOS.
function pagarServicio() {
    //variables.
    var agua = 350;//1
    var telefono = 425;//2
    var luz = 210;//3
    var internet = 570;//4

    //elija servicio a pagar.
    var servicioElegido = prompt("Ingrese el número que corresponda con el servicio que quieres pagar \n1 - Agua \n2 - Luz \n3 - Internet \n4 - Teléfono");
    if (servicioElegido == null || servicioElegido == ""){
        alert("No eligio un servicio");
    } else{
        let servicio = parseInt(servicioElegido);
        switch (servicio) {
            case 1:
                //debugger
                realizarPagoServicio("Agua",agua);
                break;
            case 2:
                realizarPagoServicio("Teléfono",telefono);
                break;
            case 3:
                realizarPagoServicio("Luz",luz);
                break;
            case 4:
                realizarPagoServicio("Internet",internet);
                break;
            default: alert("No existe el servicio seleccionado.");
                break;    
        }
        actualizarSaldoEnPantalla();
    }
    
}


//REALIZAR PAGO DE SERVICIOS (funcion exclusiva para el PAGO DE SERVICIOS).
function realizarPagoServicio(servicio,pagarServicio){
    //si tiene el saldo en la cuenta, haga lo siguiente.
    //debugger
    if (pagarServicio < saldoCuenta){
        let saldoAnterior = saldoCuenta;
        saldoCuenta = saldoCuenta - pagarServicio;
        alert("Has pagado: "+servicio +"\nImporte: "+pagarServicio+ "\nSaldo anterior: " +saldoAnterior+ "\nSaldo actual: " +saldoCuenta);//mensaje de saldo.
    } else {
        alert("No tienes dinero suficiente para cubrir este gasto.")
    }
    actualizarSaldoEnPantalla();
}


//TRANFERENCIA BANCARIA.
function transferirDinero() {
    //variables.
    var cuentaAmigaUno = 1234567;//cuenta destino 1.
    var cuentaAmigaDos = 7654321;//cuenta destino 2.
    
    
    let montoTransferencia = prompt("Ingrese el monto a transferir: ");
    if ( montoTransferencia > saldoCuenta) {
        alert("No posee fondos suficientes.")
    } else {
        let cuentaAmiga = prompt("Ingrese número de la cuenta a transferir: ");
        cuenta = parseInt(cuentaAmiga);
        switch (cuenta){
            case 1234567:
                transferir("1234567",montoTransferencia);
                break;
            case 7654321:
                transferir("7654321",montoTransferencia);
                break;
            default : alert("La cuenta ingresada, no pertenece a una cuenta amiga.");
                break;
        }
    }
    actualizarSaldoEnPantalla();
}

function transferir (cuentaAmiga,montoTransferencia) {
    //variables.
    let saldoAnterior = saldoCuenta;
    //transaccion.
    saldoCuenta = saldoCuenta - montoTransferencia;
    alert("Número de cuenta: "+cuentaAmiga+"\nImporte: "+montoTransferencia+ "\nSaldo anterior: " +saldoAnterior+ "\nSaldo actual: " +saldoCuenta);//mensaje de saldo.
    
    actualizarSaldoEnPantalla();
}


function iniciarSesion() {
    
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}