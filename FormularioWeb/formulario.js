console.log ("funcionando");

// Ubico el formulario con el id.
// Detecto el submit.
// Incorporo una funcion con un parametro llamado event.
$("#formulario").submit(function(event){
    event.preventDefault(); // Almacena los datos sin resfrescar el sitio web.
    // Una vez que prevent detecte y almacene los datos va a ejecutar la funcion enviar.
    enviar();
});

// Funcion enviar
function enviar(){
    // Serialize toma todos los campos que llena el usuario y los convierte en un arreglo.
    var datos = $("#formulario").serialize();

    $.ajax({
        type: "post",
        url: "formulario.php",
        data: datos,
        success: function(texto){
            console.log(texto);
            if(texto=="exito"){ // (texto.trim() === "exito") elimina los espacios en blanco.
                correcto();
                console.log("Mensaje exitoso");
            }else{
                console.log("Mensaje error");
                phperror(texto);
            }
        }
    })
    
}


function correcto(){
    $("#mensajeExito").removeClass("d-none");
    
};

function phperror(texto){
    $("#mensajeError").removeClass("d-none");
    
};
