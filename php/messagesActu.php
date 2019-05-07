<?php
$lastId = $_GET["last_id"];
$discutId = $_GET["discut_id"];

include 'bdd.php';

    $requete=$bdd->prepare("SELECT User.user_id, msg_id, texte, jour, pseudo FROM Message INNER JOIN User ON Message.user_id = User.user_id WHERE Message.discut_id = ? AND msg_id > ? ORDER BY jour");
	$requete->execute([$discutId, $lastId]);
    $messages = $requete->fetchAll();

echo json_encode($messages);