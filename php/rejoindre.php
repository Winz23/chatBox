<?php

include 'bdd.php';

$chatName = $_POST['discussion'];

$requete=$bdd->prepare("SELECT discut_id FROM Discussion WHERE chatName = ?");

$requete->execute([$chatName]);
$join= $requete->fetch();

if(empty($join) == false){
	$join["result"] = "true";

} else {
	$join["result"] = "false";
}

echo json_encode($join);