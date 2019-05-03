<?php

include 'bdd.php';

$pseudo = $_POST['pseudo'];

$requete=$bdd->prepare("SELECT user_id FROM User WHERE pseudo = ?
");

$requete->execute([$pseudo]);
$user = $requete->fetch();

if(empty($user) == true){
	$requete=$bdd->prepare("INSERT INTO User (pseudo) VALUES (?) ");
} else {
	$user["result"] = "false";
}

echo json_encode($user);