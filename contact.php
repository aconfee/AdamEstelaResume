<?php
    echo '<p>doing stuff...</p>';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Resume'; 
    $to = 'adamestela@gamil.com'; 
    $subject = 'Resume Inquery';
    //$human = $_POST['human'];
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit']) 
    {				
        echo '<p>sending...</p>'; 

        if (mail ($to, $subject, $body, $from)) 
        { 
	       echo '<p>Your message has been sent!</p>';
	    } 
        else 
        { 
	       echo '<p>Something went wrong, go back and try again!</p>'; 
        }
	}  
?>