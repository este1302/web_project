<?php
$servername = "localhost";
$username = "root";
$password = "mypass";
$dbname = "docs_users";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

if($_SERVER['REQUEST_METHOD']=='POST')
{
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];

    $query = "INSERT INTO users_info (email, username, password) 
                VALUES(?, ?, ?)";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("sss", $email, $username, $password);

    if ($stmt->execute() === TRUE)
    {
        echo "Record updated successfully";
    } 
    else
    {
        echo "Error updating record: " . $conn->error;
    }
    
}

$conn->close();
?> 