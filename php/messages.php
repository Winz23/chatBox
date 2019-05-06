<?php

$discutId = $_GET["discut_id"];
include 'bdd.php';

    $requete=$bdd->prepare("SELECT texte, jour, user_id, discut_id FROM Message WHERE discut_id = ?ORDER BY jour");
	$requete->execute([$discutId]);
    $messages = $requete->fetchAll();

echo json_encode($messages);