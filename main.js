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
        // inserisco il nuovo messaggio nel contenitore dei messaggi della chat
        $('.chat-container.active').append(nuovo_messaggio);
        // resetto l'input
        $('#input-text').val('');
        setTimeout(auto_reply, 1000);
    }

});

//ad ogni inserimento di un messaggio, l’utente riceveràun “ok” come risposta, che apparirà dopo 1 secondo
function auto_reply() {
    var messaggio = ('Ok');
    console.log(messaggio);

    // faccio una copia del template per creare un nuovo messaggio
    var nuovo_messaggio = $('.template .message').clone();
    // aggiungo la classe "user-chat" al messaggio
    nuovo_messaggio.addClass('user-chat');
    // inserisco il testo dell'utente nella p "message-text"
    nuovo_messaggio.children('.message-text').text(messaggio);
    // inserisco il nuovo messaggio nel contenitore dei messaggi della chat
    $('.chat-container.active').append(nuovo_messaggio);

}


// ​scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo icontatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo“mar” rimangono solo Marco e Martina)
$("#search").keyup(function() {
    var value = $(this).val().trim().toLowerCase();
    console.log(value);
    $(".contacts").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

    });
});



// intercetto il focus nell'input della searchbar
$('#search').focus(function() {
    $('.searchbar-container i').hide();
});



// intercetto la perdita di focus della searchbar
$('#search').blur(function() {
    $('.searchbar-container i').show();
});






//recupero l'indice dei div contatti (devo associarli ognuno alla sua chat)
$('div.contacts').click(function() {
    var nome = $(this).find('h4').text();
    var immagine = $("img", this).attr("src");

    console.log(immagine);
    console.log(nome);
    var currentIndex = $(this).index();
    console.log(currentIndex);
    //se c'è già un div con la classe active, la tolgo
    $('div.contacts').removeClass('active');
    //se c'è già un avatar con la classe active, la tolgo
    $('div.face-wrapper').removeClass('active');
    //se c'è già una chat container con la classe active, la tolgo
    $('.chat-container').removeClass('active');

    var contacts = $('div.contacts').eq(currentIndex);
    var chat = $('div.chat-container').eq(currentIndex);
    var avatar = $('div.face-wrapper').eq(currentIndex);
    var contactCurrent = $(this).addClass('active');
    chat.addClass('active');
    avatar.addClass('active');
    //aggiungo il nome della contactlist di sinistra in alto a destra
    $('.chat-container-info').html("<h4 class=name>" + nome + "</h4>");
    $('.chat-container-info').append("<p class=name-sub>" + 'Ultimo accesso alle' + "</p>");
    // $('#').attr("src", );
    $('#image-change').attr("src", immagine);
});


//triggero il click sul div a sinistra con la classe active quando carica la pagina
$("div.contacts.active").trigger('click');



//nascondo alert blu al click
$('div.messages-alert').click(function() {
    $(this).hide();
});


// $("div.chat").scroller();

//mostro icona del dropdown quando passo col mouse, la nascondo quando esco col mouse
$(".chat-container").hover(function() {
    $('.message .message-options').show();
}, function() {
    $('.message .message-options').hide();
});




// intercetto il click sull'icona del dropdown del messaggio
$('.chat-container').on('click', '.message-options', function() {
    // visualizzo il div "message-options-panel" corrispondente al messaggio su cui ho cliccato e aggiungo la classe active
    $(this).next('.message-options-panel').toggleClass('active');
});

// quando esco con il mouse da un messaggio, chiudo un eventuale pannello di opzioni aperto
$('.chat-container').on('mouseleave', '.message', function() {
    // tolgo la classe active  al pannello delle opzioni di questo messaggio
    $('.message-options-panel.active').removeClass('active');
});

// intercetto il click sulla voce "cancella messaggio"
$('.chat-container').on('click', '.message-destroy', function() {
    // $(this).parent().siblings('.message-text').text('messaggio eliminato!');
    // cancello il messaggio corrispondente
    $(this).closest('.message').remove();
});
