'use strict'
$(document).ready(function(){
    $("#formOne").on("submit", onClickJoin);
    $("#formTwo").on("submit", onClickCreate);
    $("#formThree").on("submit", onClickPseudo)
});

var discutId;


function onClickJoin(event){
    event.preventDefault(); 
    $(".alert-warning").remove();

    var discussion = $('#discussion');
    
    $.ajax({
		method: 'post',
		url: '../php/rejoindre.php', 
		data: discussion,
		dataType: 'json', 
    
        success: function(data){
           if(data.result == "true"){
                window.location='pseudo.html?discut_id='+data.discut_id;
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

    var discussionName = $('#creer');


    $.ajax({
		method: 'post',
		url: '../php/creer.php', 
		data: discussionName,
		dataType: 'json', 
    
        success: function(data){
            if(data.result == "true"){
                discutId = data.discut_id;        
                window.location='pseudo.html?discut_id='+discutId;
           } else {
            $(
                '<div class="alert alert-warning">Cette discussion existe déjà.</div>'
            ).insertBefore("h1");
           } 
        },
        error: function(){
            
        }
    });
}


function onClickPseudo(event){
    event.preventDefault(); 
    $(".alert-warning").remove();

    var url = location.search.substring(1).split('=');
    var discutId = url[1]; 
    var pseudo = $('#pseudo').val();


    $.ajax({
		method: 'post',
		url: '../php/pseudo.php', 
		data: {pseudo: pseudo, discussionId: discutId},
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
            url : '../php/chat.php',
            data : message,
            dataType : 'json'
        });

        $('#fenetre').append("<p>" + message + "</p>");
    }
});