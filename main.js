//
// $('div.contacts').click(function() {
//     var currentContact = $('.contacts.active');
//     console.log( $('.contacts.active'));
//     var nextContact = currentContact.next('.contacts');
//     if (currentContact.hasClass('active')) {
//         currentContact.removeClass('active');
//         nextContact.addClass('active');
//     }
//
// });



$('div.contacts').click(function() {


});

//per associare  la pressione del tasto enter nella textarea al bottone
$("#input-text").keydown(function(event) {
    if (event.keyCode === 13) {
        $('#input-button').click();

    }


});

$("#input-button").click(function() {
    //prendo ciò che è stato scritto dall'utente nell'input e lo salvo in una variabile
    var messaggio = $('#input-text').val();
    console.log(messaggio);
    //se il messaggio non è vuoto, allora può essere speidto

    if (!messaggio.replace(/\s/g, '').length) {
        console.log('stringa non ok');
    } else {
        // faccio una copia del template per creare un nuovo messaggio
        var nuovo_messaggio = $('.template .message').clone();
        // aggiungo la classe "reply" al messaggio
        nuovo_messaggio.addClass('reply');
        // inserisco il testo dell'utente nella p "message-text"
        nuovo_messaggio.children('.message-text').text(messaggio);
        // inserisco il nuovo messaggio nel contenitore dei messaggi di risposta
        $('.reply-container').append(nuovo_messaggio);
        // resetto l'input
        $('#input-text').val('');
auto_reply();
    }
});

function auto_reply() {
    var messaggio = ('Ok');
    console.log(messaggio);



        // faccio una copia del template per creare un nuovo messaggio
        var nuovo_messaggio = $('.template .message').clone();
        // aggiungo la classe "reply" al messaggio
        nuovo_messaggio.addClass('user-chat');
        // inserisco il testo dell'utente nella p "message-text"
        nuovo_messaggio.children('.message-text').text(messaggio);
        // inserisco il nuovo messaggio nel contenitore dei messaggi di user-chat
        $('.chat-container').append(nuovo_messaggio);



}

//
//
//
// if (messaggio != '') {
//     $('.reply-container').append("<p class=reply>" + messaggio + "</p>");
//     $('#input-text').val('');
// }
