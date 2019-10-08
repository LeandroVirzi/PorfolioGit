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
}


//EXTRAER DINERO.    
function extraerDinero() {
    //VARIABLES.
    var saldoAnterior = saldoCuenta;//saldo inicial de la cuenta.
    var extraer = prompt("monto que quieres retirar: ");//extraer el dinero.
    var billetes_cien = 100;//validar que el monto pueda ser extraido en billetes de 100.
    var limiteExtraccionDiaria = limiteExtraccion;//verificar que no supere el limite de extraccion diaria.
    
    //validar el saldo de la cuenta.
    while(extraer > saldoCuenta){
        alert("El monto es mayor al Saldo de la cuenta. \n Saldo: " + saldoCuenta)
        extraer = prompt("Ingrese nuevamente el monto: ")
    }

    //validar que no supere el limite de extraccion.
    while(extraer > limiteExtraccion){
        alert("El monto supera el limite de extraccion. \n Limite: "+limiteExtraccion);
        extraer = prompt("Ingrese nuevamente el monto: ");
    }

    //validar billetes de 100.
    while(extraer < 100){
        alert("El monto minimo es de $100");
        extraer = prompt("Ingrese nuevamente el monto: ");
    }

    //validar que el monto pueda ser extraido en billetes de 100.
    while (extraer % 100 > 0){
        alert("El monto minimo es de $100");
        extraer = prompt("Ingrese nuevamente el monto: ");
    }

    //validar que ccuando extrae dinero no supere el limite de extraccion diaria.
    limiteExtraccionDiaria = limiteExtraccionDiaria - extraer;
    
    

    
    //saldo de la cuenta actualizado.
    saldoCuenta = parseInt(saldoCuenta) - parseInt(extraer);//a extraer. 
    alert("Has extraido: "+extraer + "\n Saldo anterior: "+saldoAnterior + "\n Saldo actual: "+saldoCuenta);//mensaje de saldo.
}

//sumar dinero a la cuenta.
function depositarDinero() {
    var saldoAnterior = saldoCuenta;//saldo inicial de la cuenta.
    var deposito = prompt("Ingrese el saldo del dinero a depositar: ");//toma el saldo a ingresar.
    saldoCuenta = parseInt(saldoCuenta) + parseInt(deposito); //actualiza el saldo de la cuenta.
    alert("Has depositado: "+deposito + "\n Saldo anterior: "+saldoAnterior + "\n Saldo actual: "+saldoCuenta);//deposito.
}

function pagarServicio() {

}

function transferirDinero() {

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