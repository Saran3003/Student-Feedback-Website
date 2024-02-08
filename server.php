<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "mail.id";
    $subject = "New Feedback Form Submission";
    
    $message = "Student Name: " . $_POST['studentName'] . "\n";
    $message .= "Roll Number: " . $_POST['rollNumber'] . "\n";
    $message .= "Year: " . $_POST['year'] . "\n";
    $message .= "Residential Status: " . $_POST['residentialStatus'] . "\n";
    $message .= "Feedback Message: " . $_POST['feedbackMessage'];

    $headers = "From: " . $_POST['email'];

    mail($to, $subject, $message, $headers);
    echo "Feedback submitted successfully!";
} else {
    echo "Invalid request!";
}
?>
