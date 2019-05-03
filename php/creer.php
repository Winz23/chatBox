<?php

include 'bdd.php';

$idReunion = $_POST['discut_id'];

$requete=$bdd->prepare("SELECT discut_id FROM Discussion
");

$requete->execute([$idReunion]);
$discussion = $requete->fetch();

if(empty($discussion) == false){
	$discussion["result"] = "true";
} else {
	$discussion["result"] = "false";
}

echo json_encode($discussion);