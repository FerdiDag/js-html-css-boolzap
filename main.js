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

//per associare il tasto enter all'input
$("#input-text").keydown(function(event) {
    if (event.keyCode === 13) {
        $('#input-text').click();

    }
});

$("#input-text").click(function() {

    var messaggio = $('#input-text').val();
    console.log(messaggio);
    $('.reply').append("<p>" + messaggio + "</p>")

});
