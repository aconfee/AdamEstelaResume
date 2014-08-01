<?php

// Pear Mail Library
require_once "Mail.php";

$from = '<adamestela.gmail.com>';
$to = '<icyflame198.yahoo.com>';
$subject = 'Hi!';
$body = "Hi,\n\nHow are you... DOUCHEBAGGG?";

$headers = array(
    'From' => $from,
    'To' => $to,
    'Subject' => $subject
);

$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '465',
        'auth' => true,
        'username' => 'adamestela@gmail.com',
        'password' => 'elcoqui18'
    ));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} else {
    echo('<p>Message successfully sent!</p>');
}
?>