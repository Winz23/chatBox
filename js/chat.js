window.onload = afficherMessage()

function afficherMessage(){
    var url = location.search.substring(1).split('=');
    var discutId = url[1];
    $.ajax({
        type		: 'POST',
        url		    : '../php/messages.php?discut_id='+discutId, 
        dataType	: 'json',
        success: function(data)
        {
            console.log(data); 
            for(var i=0; i<data.length; i++)
            {
            console.log(data[i]['texte']);
            $('#fenetre').append(
            "<div class= 'formPost'><div class='msgPost'><p>" + data[i]['texte'] + "</p></div> <div class='postBy'><p>Envoyé par "+data[i]['user_id']+" le "+data[i]['jour']+"</p></div>");
            }  
        }      
    })
}