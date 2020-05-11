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
    if (messaggio != '') {
        $('.reply').append("<p class=risposta>" + messaggio + "</p>")
        $('#input-text').val('');
    }

});
