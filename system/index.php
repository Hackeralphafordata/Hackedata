<?php
$userAgent = $_SERVER['HTTP_USER_AGENT'];

if (strpos($userAgent, 'Instagram') === false) {
    echo "";
    exit;
}

$serverV6 = $_SERVER['REQUEST'] . '://' . $_SERVER['HTTPS_HOST'];

$domain = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'];
?>
<html style="height:100%"><head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title> 403 Forbidden
</title></head>
<body style="color: #444; margin:0;font: normal 14px/20px Arial, Helvetica, sans-serif; height:100%; background-color: #fff;">
<div class="embed-responsive embed-responsive-16by9" style="height:100vh">
<div style="height:auto; min-height:100%; ">     <div style="text-align: center; width:800px; margin-left: -400px; position:absolute; top: 30%; left:50%;">
        <h1 style="margin:0; font-size:150px; line-height:150px; font-weight:bold;">403</h1>
<h2 style="margin-top:20px;font-size: 30px;">Forbidden
</h2>
<p>Access to this resource on the server is denied!</p>
<p>Telegram @EXP_HERE</p>
</div></div>
</body></html>