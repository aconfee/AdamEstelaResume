<?php
    echo "doing stuff";
    print_r(error_get_last());

    // Pear Mail Library
    require_once "Mail.php";

    print_r(error_get_last());
    echo "included mailphp";

    $from = '<adamestela.gmail.com>';
    $to = '<icyflame198.yahoo.com>';

    print_r(error_get_last());
    echo "to $to";  

    $subject = 'Hi!';
    $body = "Hi,\n\nHow are you... DOUCHEBAGGG?";

    $headers = array(
        'From' => $from,
        'To' => $to,
        'Subject' => $subject
    );

    print_r(error_get_last());
    echo "array made";

    $smtp = Mail::factory('smtp', array(
            'host' => 'ssl://smtp.gmail.com',
            'port' => '465',
            'auth' => true,
            'username' => 'adamestela@gmail.com',
            'password' => 'elcoqui18'
        ));

    print_r(error_get_last());
    echo "smtp made, sendint message";

    $mail = $smtp->send($to, $headers, $body);

    print_r(error_get_last());
    echo "mesage sent. mail: $mail";

    if (PEAR::isError($mail)) {
        print_r(error_get_last());
        echo('<p>' . $mail->getMessage() . '</p>');
    } else {
        echo('<p>Message successfully sent!</p>');
    }
?>