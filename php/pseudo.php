<?php

include 'bdd.php';

if(array_key_exists("pseudo", $_POST) 
&& !empty($_POST["pseudo"])
&& array_key_exists("discut_id", $_POST) 
&& !empty($_POST["discut_id"]))
{

	$pseudo = $_POST['pseudo'];
	$discutId = $_POST["discut_id"];

	$requete=$bdd->prepare("SELECT user_id FROM User WHERE pseudo = ? AND  discut_id = ?");

	$requete->execute([$pseudo, $discutId]);
	$user = $requete->fetch();

	if(empty($user) == true)
	{
		$requete=$bdd->prepare("INSERT INTO User (pseudo, discut_id) VALUES (? , ?)");
		$requete->execute([$pseudo, $discutId]);
		$user = $requete->fetch();
		$user["result"] = "true";
	} 
	else 
	{
		$user["result"] = "false";
	}
}
else
{
	$user["result"] = "false";
}
echo json_encode($user);