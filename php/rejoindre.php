<?php

include 'bdd.php';

$rejoindre = $_POST['discut_id'];

$requete=$bdd->prepare("SELECT discut_id FROM Discussion
");

$requete->execute([$rejoindre]);
$join= $requete->fetch();

if(empty($join) == false){
	$join["result"] = "true";
} else {
	$join["result"] = "false";
}

echo json_encode($join);