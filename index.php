<?php

$firstname=$_REQUEST['first name'];
$lasttname=$_REQUEST['last name'];
$age=$_REQUEST['age'];
$gender=$_REQUEST['gender'];
$email=$_REQUEST['email'];
$password=$_REQUEST['password'];

if(isset($_post[]))
    
$host = "localhost";
$user = "root";
$password="";
$db = "daily_task_project";


$conn=mysqli_connect($host,$user,$password,$db)
$insert = "insert into registrationform values('$firstname','$lasttname','$age','$gender','$email','$password')";
mysqli_query($conn,$insert);


?>