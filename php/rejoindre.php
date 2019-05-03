<?php

include 'bdd.php';

$discutId = $_POST['discussion'];

$requete=$bdd->prepare("SELECT discut_id FROM Discussion WHERE chatName = ?");

$requete->execute([$discutId]);
$join= $requete->fetch();

if(empty($join) == false){
	$join["result"] = "true";
} else {
	$join["result"] = "false";
}

echo json_encode($join);