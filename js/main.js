'use strict'
$(document).ready(function(){
    $("#formOne").on("submit", onClickJoin);
    $("#formTwo").on("submit", onClickCreate);
    $("#formThree").on("submit", onClickPseudo)
});


function onClickJoin(event){
    event.preventDefault(); 

    var form = $('#formOne')[0];
    var formData = new FormData(form);
    

    $.ajax({
		method: 'post',
		url: '../php/rejoindre.php', 
		data: formData,
		dataType: 'json', 
    
        success: function(data){
           if(data  )
        },
    });







}


function onClickCreate(event){
    event.preventDefault(); 

    var form = $('#formTwo')[0];
    var formData = new FormData(form);

    $.ajax({
		method: 'post',
		url: '../php/creer.php', 
		data: formData,
		dataType: 'json', 
    
        success: function(data){
           
        },
    });







}


function onClickPseudo(event){
    event.preventDefault(); 

    var form = $('#formThree')[0];
    var formData = new FormData(form);


    $.ajax({
		method: 'post',
		url: '../php/pseudo.php', 
		data: formData,
		dataType: 'json', 
    
        success: function(data){
           
        },
    });






}