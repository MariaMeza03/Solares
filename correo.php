<?php
$destino   = 'marimezamartinez@gmail.com';
$titulo    = 'Correo de contacto';
$nombre    = $_POST['nombre'];
$email     = $_POST['telefono'];
$telefono  = $_POST['telefono'];
$direccion = $_POST['dirección'];
$nombre_cfe= $_POST['nombre_cfe'];
$number_cfe= $_['number_cfe'];
$mensaje   = $_['mensaje'];

$contenido = "Nombre:". $nombre . "\nCorreo:" . $email .


mail($destino, $titulo, $mensaje);


?>