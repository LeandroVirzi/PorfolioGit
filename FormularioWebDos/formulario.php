<?php

// echo 'exito';

error_reporting(E_ALL);
ini_set('display_errors',1);

// VARIABLES
$error = ''; // Se va a ir llenando con los errores que detecte php.
$nombre = ''; // Para guardar el nombre.
$color = ''; // Variable inicializada.
$genero = '';
$curso = '';
$valor = '';
$miArreglo = '':;


// VALIDACION NOMBRE
if (empty($_POST["nombre"])) {
    // Vamos a controlar que los campos esten llenados.
    // Con enpty pasamos el campo que queremos evaluar.
    $error = 'Ingresa un nombre </br>';
} else {
    // En caso de que no este vacio vamos a ejecutar una acción.
    $nombre = $_POST["nombre"]; // Almaceno el contenido.
    $nombre = filter_var($nombre,FILTER_SANITIZE_STRING); // Filtro el contenido, solo debe permitir string.
    $nombre = trim($nombre);
        if($nombre==''){
            $error .= 'Nombre esta vacio </br>';
        }
}

// VALIDACION COLOR
if (empty($_POST["color"])) {
    $error .= 'Ingresa un color </br>';
} else {
    // En caso de que no este vacio vamos a ejecutar una acción.
    $color = $_POST["color"]; // Almaceno el contenido.
    $color = filter_var($color,FILTER_SANITIZE_STRING); // Filtro el contenido, solo debe permitir string.
    $color = trim($color);
    if($color==''){
        $error .= 'Color esta vacio </br>';
    }
}

// VALIDACION GENERO
if (empty($_POST["genero"])) {
    $error .= 'Ingresa un genero </br>';
} else {
    // En caso de que no este vacio vamos a ejecutar una acción.
    $genero = $_POST["genero"]; // Almaceno el contenido.
    $genero = filter_var($genero,FILTER_SANITIZE_STRING); // Filtro el contenido, solo debe permitir string.
    $genero = trim($genero);
    if($genero==''){
        $error .= 'Genero esta vacio </br>';
    }
}

// VALIDACION CURSO
// Chequeo que la variable no este vacia.
if (empty($_POST["curso"])){
    $error .= 'Ingrese un curso';
} else {
    // Almaceno el contenido en la variable curso.
    $curso = $_POST["curso"];
    // Recorro el arreglo ya que no puedo enviar un arreglo por email.
    // Cursos [css, html, php].
    foreach($curso as $valor){
        $miArreglo .= $valor. ', ';
    }
}



// CUERPO DEL MENSAJE
$cuerpo = '';
$cuerpo .= "Nombre: ";
$cuerpo .= $nombre;
$cuerpo .= "/n";

$cuerpo .= '';
$cuerpo .= "Color: ";
$cuerpo .= $color;
$cuerpo .= "/n";

$cuerpo .= '';
$cuerpo .= "Curso: ";
$cuerpo .= $curso;
$cuerpo .= "/n";

$cuerpo .= '';
$cuerpo .= "Genero: ";
$cuerpo .= $genero;
$cuerpo .= "/n";

// DIRECCIÓN
$enviarA = 'lean.9906@gmail.com' // Lo reemplazo con mi correo.
$asunto = 'Nuevo mensaje de mi sitio web';

// ENVIAR CORREO
if ($error == ''){ // Si la variable error se ecuentra vacia (no hay errores).
    mail($enviarA,$asunto,$cuerpo); // Concateno mail del cliente. // Almacenamos el contenido en la variable succes para poder validarlo.
    echo 'exito'; // Si todo esta correcto enviamos el mensaje de exito.
} else {
    echo $error;
}
?>

