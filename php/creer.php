<?php

include 'bdd.php';

$idReunion = $_POST['creer'];

$requete=$bdd->prepare("INSERT INTO
  `Discussion`(`chatName`,
  `auteur_id`)
VALUES ('?', '?')
");

$requete->execute([$idReunion]);
$discussion = $requete->fetch();

if(empty($discussion) == false){
	$discussion["result"] = "true";
} else {
	$discussion["result"] = "false";
}

echo json_encode($discussion);
