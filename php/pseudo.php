<?php

include 'bdd.php';

$pseudo = $_POST['pseudo'];

$requete=$bdd->prepare("SELECT pseudo FROM User
");

$requete->execute([$pseudo]);
$user = $requete->fetch();

if(empty($user) == false){
	$user["result"] = "true";
} else {
	$user["result"] = "false";
}

echo json_encode($user);