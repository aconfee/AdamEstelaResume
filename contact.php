<?php
    echo '<p>doing stuff...</p>';

    $name = $_POST['name'];
    echo "$name";
    $email = $_POST['email'];
    echo "$name";
    $message = $_POST['message'];
    echo "$name";
    $from = 'From: Resume'; 
    $to = 'adamestela@gamil.com'; 
    $subject = 'Resume Inquery';
    //$human = $_POST['human'];
    echo "done doing stuff";
			
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