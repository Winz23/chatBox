<?php

include 'bdd.php';

$idReunion = $_POST['creer'];

$requete=$bdd->prepare("SELECT discut_id FROM Discussion WHERE chatName = ?");
$requete->execute([$idReunion]);

$discussion = $requete->fetch();

if(empty($discussion) == true){
	$requete=$bdd->prepare("INSERT INTO Discussion (chatName) VALUES ? ");
	$requete->execute([$idReunion]);

	$discussion = $requete->fetch();
	$discussion["result"] = "true";
	
} else {
	$discussion["result"] = "false";
}


echo json_encode($discussion);
