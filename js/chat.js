window.onload = afficherMessage()

function afficherMessage(){
    var url = location.search.substring(1).split('&');
    var result = [];

    for (var i=0; i<url.length; i++) 
    {
    var donnée = url[i].split('=');
    result[i]=donnée[1];
    }
    var discutId = result[0];
    var userId = result[1]

    $.ajax({
        type		: 'POST',
        url		    : '../php/messages.php?discut_id='+discutId, 
        dataType	: 'json',
        success: function(data)
        { 
            for(var i=0; i<data.length; i++)
            {
                if(data.user_id == userId)
                {
                    $('#fenetre').append("<div class= 'blue formPost'><div class='msgPost'><p>" + data[i]['texte'] + "</p></div> <div class='postBy'><p>Envoyé par "+data[i]['pseudo']+" le "+data[i]['jour']+"</p></div>");
                }
                else
                {
                    $('#fenetre').append("<div class= 'grey formPost'><div class='msgPost'><p>" + data[i]['texte'] + "</p></div> <div class='postBy'><p>Envoyé par "+data[i]['pseudo']+" le "+data[i]['jour']+"</p></div>");
                }
            }  
        }     
    })

    $.ajax({
        type		: 'POST',
        url		    : '../php/user.php?user_id='+userId+'&discut_id='+discutId, 
        dataType	: 'json',
        success: function(data)
        {    
            $('#userName').text(data.pseudo);
            $('#chatName').text(data.chatName);
        }      
    })

}