<?php
// Replace with your bot token and your user ID
$botToken = "7623771842:AAFAzIzPkgkiRdLUJmX18Lbexsc32xGUhwc";
$userId = "@INDalphahere"; // Your Telegram user ID

// Data you want to send
$message = "Hello, this is a test message from my website!";

// Function to send message
function sendMessage($chatId, $message) {
    global $botToken;
    $url = "https://api.telegram.org/bot$botToken/sendMessage";
    
    $data = [
        'chat_id' => $chatId,
        'text' => $message,
    ];

    // Use file_get_contents to send the request
    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data),
        ],
    ];
    
    $context = stream_context_create($options);
    return file_get_contents($url, false, $context);
}

// Call the function to send the message
$response = sendMessage($userId, $message);

// Check response
if ($response) {
    echo "Message sent successfully!";
} else {
    echo "Failed to send message.";
}
?>
