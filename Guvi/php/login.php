<?php
sleep(3);



try{
	$con=new PDO("mysql:host=localhost;dbname=register","root","");

}catch(PDOExection $e){
	echo $e->getMessage();
}

$email=$_POST['email'];
$password=$_POST['password'];

$sql="select * from register where email='$email' and pwd='$password' ";
$stmt=$con->prepare($sql);
$stmt->execute();
