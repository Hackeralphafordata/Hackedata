$to = 'jhonkonum@gmail.com';

$subject = 'test';

$body = 'test';

$header  = 'MIME-Version: 1.0' . "\r\n";
$header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$header .= "To: <$to>" . "\r\n";
$header .= 'From: from@mail.com \r\n';

mail($to, $subject, $body, $header);
