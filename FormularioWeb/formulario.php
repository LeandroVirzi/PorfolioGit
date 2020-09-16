<?php
$error = ''; // Se va a ir llenando con los errores que detecte php.

// VALIDACIONES 
// Nombre
if (empty($_POST["nombre"])) {
    // Vamos a controlar que los campos esten llenados.
    // Con enpty pasamos el campo que queremos evaluar.
    $error = 'Ingresa un nombre <br>';
} else {
    // En caso de que no este vacio vamos a ejecutar una acción.
    $nombre = $_POST["nombre"]; // Almaceno el contenido.
    $nombre = filter_var($nombre,FILTER_SANITIZE_STRING); // Filtro el contenido, solo debe permitir string.
    
}

// Mail
if (empty($_POST["email"])){
    $error .= 'Ingresa un E-mail <br>'; // Concatena el mensaje de error.
} else {
    $email = $_POST["email"]; // Almaceno el mail.
    if (!filter_var($email,FILTER_VALIDATE_EMAIL)){  // Validacion de email. 
        // Si completa el campo con un correo falso, nos devuelve un TRUE porque pusimos un signo de !.
        $error .= 'Ingresa un E-mail verdadero <br>';
    } else {
        $email = filter_var($email,FILTER_SANITIZE_EMAIL); // Filtra quitando toedos los caracteres malisiosos.
    }
}



// Mensaje
if (empty($_POST["mensaje"])){
    $error .= 'Ingrese un mensaje <br>';
} else {
    $mensaje = $_POST["mensaje"];
    $mensaje = filter_var($mensaje,FILTER_SANITIZE_STRING);
}

// CORREO ELECTRONICO
// CUERPO DEL MENSAJE
$cuerpo = 'Nombre: '.$nombre.'/n';
$cuerpo .= 'E-mail :'.$email.'/n';
$cuerpo .= 'Mensaje :'.$mensaje.'/n';

// DIRECCIÓN
$enviarA = 'lean.9906@gmail.com' // Lo reemplazo con mi correo.
$asunto = 'Nuevo mensaje de mi sitio web';

// ENVIAR CORREO
if ($error == ''){ // Si la variable error se ecuentra vacia (no hay errores).
    $success = mail($enviarA,$asunto,$cuerpo,'de: '.$email); // Concateno mail del cliente. // Almacenamos el contenido en la variable succes para poder validarlo.
    echo 'exito'; // Si todo esta correcto enviamos el mensaje de exito.
} else {
    echo $error;
}




?>

