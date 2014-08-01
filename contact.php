<?php
    // Please specify your Mail Server - Example: mail.yourdomain.com.
    ini_set("SMTP","adamestela@gmail.com");
    // Please specify an SMTP Number 25 and 8889 are valid SMTP Ports.
    ini_set("smtp_port","25");
    // Please specify the return address to use
    ini_set('sendmail_from', 'adamestela@gmail.com');

    $name = $_POST['name'];
    echo "$name ";
    $email = $_POST['email'];
    echo "$email ";
    $message = $_POST['message'];
    echo "$message ";
    $from = 'From: My Resume';
    $to = 'adamestela@gamil.com'; 
    $subject = 'Resume Inquery';
    //$human = $_POST['human'];
    echo " done doing stuff";
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit']) 
    {				
        echo '<p>sending...</p>'; 

        if (mail ($to, $subject, $body, $from)) 
        { 
	       echo '<p>Your message has been sent!</p>';
           header("Location: http://adamestelaresume.azurewebsites.net/");
            exit;
	    } 
        else 
        { 
	       echo '<p>Something went wrong, go back and try again!</p>'; 
           print_r(error_get_last());
        }
	}  
?>