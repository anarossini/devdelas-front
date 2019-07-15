<?php
// Check for empty fields
if empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'anarossini01@gmail.com'; 
$email_body = "\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: noreply@devdelas.com.br\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>