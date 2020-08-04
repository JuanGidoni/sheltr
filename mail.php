<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['phone']))
$subject = $_POST['phone'];

$content="De: $name \n Email: $email \n Mensaje: $message";
$recipient = "juan.gidoni@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die(   header("contacto.html?error=2"));
header('contacto.html?enviado=1');
?>