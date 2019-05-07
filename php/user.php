<?php
$discutId = $_GET["discut_id"];
$userId = $_GET["user_id"];
include 'bdd.php';

    $requete=$bdd->prepare("SELECT pseudo, chatName FROM `User` INNER JOIN Discussion ON User.discut_id = Discussion.discut_id WHERE User.user_id = ? ");
	$requete->execute([$userId]);
    $user = $requete->fetch();



echo json_encode($user);