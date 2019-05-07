


var url = location.search.substring(1).split('&');
var result = [];

for (var i=0; i<url.length; i++) 
{
var donnée = url[i].split('=');
result[i]=donnée[1];
}
var discutId = result[0];
var userId = result[1]

window.onload = afficherInfo(userId, discutId);

var lastId = null;
setInterval(afficherNewMess(lastId),2000);

function afficherInfo(userId, discutId){
    $.ajax({
        type		: 'POST',
        url		    : '../php/user.php?user_id='+userId+'&discut_id='+discutId, 
        dataType	: 'json',
        success: function(data)
        {    
            $('#userName').text(data.pseudo);
            $('#chatName').text(data.chatName);
            afficherMessage(userId);
        }      
    })
}

function afficherMessage(userId)
{
    $('#bulle').html('<div>');

    $.ajax({
        type		: 'POST',
        url		    : '../php/messages.php?discut_id='+discutId, 
        dataType	: 'json',
        success: function(data)
        {
            for(var i=0; i<data.length; i++)
            {   
                lastId = data[i]['msg_id'];
                
                if(data[i]['user_id'] == userId)
                {   
                    $('#bulle').append("<div class= 'blue formPost'><div class='msgPost'><p>" + data[i]['texte'] + "</p></div> <div class='postBy'><p>Envoyé par "+data[i]['pseudo']+" le "+data[i]['jour']+"</p></div>");
                }
                else
                {
                    $('#bulle').append("<div class= 'grey formPost'><div class='msgPost'><p>" + data[i]['texte'] + "</p></div> <div class='postBy'><p>Envoyé par "+data[i]['pseudo']+" le "+data[i]['jour']+"</p></div>");
                }
            }
            return lastId;
        }              
    })
}
console.log(afficherMessage());

function afficherNewMess(lastId){
    console.log(lastId);
    $.ajax({
        type		: 'POST',
        url		    : '../php/messagesActu.php?discut_id='+discutId+'&last_id'+lastId, 
        dataType	: 'json',
        success: function(data)
        {
            for(var i=0; i<data.length; i++)
            {   
                lastId = data[i]['']
                if(data[i]['user_id'] == userId)
                {   
                    $('#bulle').append("<div class= 'blue formPost'><div class='msgPost'><p>" + data[i]['texte'] + "</p></div> <div class='postBy'><p>Envoyé par "+data[i]['pseudo']+" le "+data[i]['jour']+"</p></div>");
                }
                else
                {
                    $('#bulle').append("<div class= 'grey formPost'><div class='msgPost'><p>" + data[i]['texte'] + "</p></div> <div class='postBy'><p>Envoyé par "+data[i]['pseudo']+" le "+data[i]['jour']+"</p></div>");
                }
            }  
        }
              
    })
}