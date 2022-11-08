<?php
sleep(3);



try{
	$con=new PDO("mysql:host=localhost;dbname=register","root","");

}catch(PDOExection $e){
	echo $e->getMessage();
}
$name=$_POST['name'];
$email=$_POST['email'];
$mobile=$_POST['mobile'];
$password=$_POST['password'];

$sql="insert into data(email,pwd) values('$email','$password')";
$stmt=$con->prepare($sql);
$stmt->execute();


/*
$m=new MongoClient();
$db=$m->mydb;
$col=$db->mycol;
$name=$_POST['name'];
$email=$_POST['email'];
$dob=$_POST['DOB'];
$mobile=$_POST['mobile'];
$gender=$_POST['gender'];
$password=$_POST['password'];


$docu=array{
	'name'=> $name,
	'email'=> $email,
	'dob'=> $dob,
	'mobile'=> $mobile,
	'gender'=> $gender,
	'password'=> $password

   	
}
$col->insert($docu);*/
?>