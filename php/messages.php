<?php

$discutId = $_GET["discut_id"];

include 'bdd.php';

    $requete=$bdd->prepare("SELECT User.user_id, msg_id, texte, jour, pseudo FROM Message INNER JOIN User ON Message.user_id = User.user_id WHERE Message.discut_id = ? ORDER BY jour");
	$requete->execute([$discutId]);
    $messages = $requete->fetchAll();

echo json_encode($messages);