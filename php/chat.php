<?php
$discutId = $_GET["discut_id"];
$userId = $_GET["user_id"]; 

include 'bdd.php';

if(array_key_exists("message", $_POST) 
&& !empty($_POST["message"]))
{
	$message = $_POST['message'];
   
	$requete=$bdd->prepare("INSERT INTO Message (texte, discut_id, user_id) VALUES (? , ?, ?)");
	$requete->execute([$message, $discutId, $userId]);
	$discussion = $requete->fetch();
	$result['result'] = 'true';
}
    
echo json_encode($result);