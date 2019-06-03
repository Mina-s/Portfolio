<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


if(isset($_POST) && !empty($_POST)){

    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
   
  
    if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
       
        echo "Oops! Il y a un problème, Merci de compléter le formulaire et de réesayer ";
        die();
    }

   
    require '../vendor/autoload.php';
  
    $mail = new PHPMailer;
    $mail->IsSMTP();       
    $mail->Host = 'smtp.sendgrid.net';  
    $mail->Port = '587';        
    $mail->SMTPAuth = true;      
    $mail->Username = 'Amina-epitech';     
    $mail->Password = 'Aminouche26';    
    $mail->SMTPSecure = '';       
    $mail->From = $_POST["email"];     
    $mail->FromName = $_POST["name"];    
    $mail->AddAddress('amina.skendraoui@epitech.eu', 'Name');
    $mail->AddCC($_POST["email"], $_POST["name"]); 
    $mail->WordWrap = 50;       
    $mail->IsHTML(true);         
  
    $mail->Body = $_POST["message"];  
 
    if($mail->Send()){
        echo "Merci! Vôtre message a été envoyé.";

    }
    else{
        echo "Oops! Quelque chose a mal tourné et nous n'avons pas pu envoyer votre message.";
    
    }


} else {
    echo "Il y a eu un problème avec votre soumission, veuillez réessayer.";
}



?>