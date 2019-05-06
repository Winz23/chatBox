'use strict'
$(document).ready(function(){
    $("#formOne").on("submit", onClickJoin);
    $("#formTwo").on("submit", onClickCreate);
    $("#formThree").on("submit", onClickPseudo)
});


function onClickJoin(event){
    event.preventDefault(); 
    $(".alert-warning").remove();

    var form = $('#formOne');
    
    $.ajax({
		method: 'post',
		url: '../php/rejoindre.php', 
		data: form,
		dataType: 'json', 
    
        success: function(data){
           if(data.result == "true"){
                window.location='pseudo.html';
           } else {
            $(
                '<div class="alert alert-warning">Cette discussion n\'existe pas.</div>'
            ).insertBefore("h1");
           }

        },
    });







}


function onClickCreate(event){
    event.preventDefault(); 
    $(".alert-warning").remove();

    var form = $('#formTwo');


    $.ajax({
		method: 'post',
		url: '../php/creer.php', 
		data: form,
		dataType: 'json', 
    
        success: function(data){
            if(data.result == "true"){
                window.location='pseudo.html';
           } else {
            $(
                '<div class="alert alert-warning">Cette discussion existe déjà.</div>'
            ).insertBefore("h1");
           }
        },
    });







}


function onClickPseudo(event){
    event.preventDefault(); 
    $(".alert-warning").remove();

    var form = $('#formThree');

    $.ajax({
		method: 'post',
		url: '../php/pseudo.php', 
		data: form,
		dataType: 'json', 
    
        success: function(data){
            if(data.result == "true"){
                window.location='chat.html';
           }  else {
            $(
                '<div class="alert alert-warning">Ce pseudo existe déjà.</div>'
            ).insertBefore("h1");
           }
        },
    });






}

$('.fa-paper-plane').click(function(e){
    e.preventDefault();

    var message = encodeURIComponent( $('#msg').val() );

    if(message != ""){
        $.ajax({
            method : 'post',
            url : 'chat.php',
            data : message,
            dataType : 'json'
        });

        $('#fenetre').append("<p>" + message + "</p>");
    }
});