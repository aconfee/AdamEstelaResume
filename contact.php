<?php
    echo "doing stuff";

    // Pear Mail Library
    require_once "Mail.php";

    echo "included mailphp";

    $from = '<adamestela.gmail.com>';
    $to = '<icyflame198.yahoo.com>';

    echo "to $to";
    $subject = 'Hi!';
    $body = "Hi,\n\nHow are you... DOUCHEBAGGG?";

    $headers = array(
        'From' => $from,
        'To' => $to,
        'Subject' => $subject
    );

    echo "array made";

    $smtp = Mail::factory('smtp', array(
            'host' => 'ssl://smtp.gmail.com',
            'port' => '465',
            'auth' => true,
            'username' => 'adamestela@gmail.com',
            'password' => 'elcoqui18'
        ));

    echo "smtp made, sendint message";

    $mail = $smtp->send($to, $headers, $body);

    echo "mesage sent. mail: $mail";

    if (PEAR::isError($mail)) {
        echo('<p>' . $mail->getMessage() . '</p>');
    } else {
        echo('<p>Message successfully sent!</p>');
    }
?>