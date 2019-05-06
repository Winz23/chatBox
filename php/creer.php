<?php

include 'bdd.php';

if(array_key_exists("creer", $_POST) 
&& !empty($_POST["creer"]))
{

	$chatName = $_POST['creer'];

	$requete=$bdd->prepare("SELECT discut_id FROM Discussion WHERE chatName = ?");
	$requete->execute([$chatName]);
	$discussion = $requete->fetch();

	if(empty($discussion) == true)
	{
		$requete=$bdd->prepare("INSERT INTO Discussion (chatName, auteur_id) VALUES (?, ?) ");
		$requete->execute([$chatName, $author=0]);
		$discussion = $requete->fetch();

		$requete=$bdd->prepare("SELECT discut_id FROM Discussion WHERE chatName = ?");
		$requete->execute([$chatName]);
		$discussion = $requete->fetch();
		
		$discussion["result"] = "true";	
	} 
	else
	{
		$discussion["result"] = "false";
	}
}

echo json_encode($discussion);
