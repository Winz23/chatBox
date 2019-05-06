<?php
$discutId = $_POST["discut_id"];
$userId = $_POST["user_id"]; 

include 'bdd.php';

if(array_key_exists("userMessage", $_POST) 
&& !empty($_POST["userMessage"]))
{

	$message = $_POST['userMessage'];
   

	$requete=$bdd->prepare("INSERT INTO Message (text, discut_id, user_id) VALUES (? , ?, ?)");
	$requete->execute([$message, $discutId, $userId]);
    
    
}

$requete=$bdd->prepare("SELECT texte, jour, user_id, discut_id FROM Message WHERE discut_id = '?'
ORDER BY jour");
	$requete->execute([$discutId]);
    $messages = $requete->fetchAll();
    


echo json_encode($messages);