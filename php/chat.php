<?php

include 'bdd.php';

if(array_key_exists("userMessage", $_POST) 
&& !empty($_POST["userMessage"]))
{

	$message = $_POST['userMessage'];
    $discutId = $_POST["discut_id"];
    $userId = $_POST["user_id"]; 

	$requete=$bdd->prepare("INSERT INTO Message (text, discut_id, user_id) VALUES (? , ?, ?)");
	$requete->execute([$message, $discutId, $userId]);
	$messages = $requete->fetch();
}

echo json_encode($messages);