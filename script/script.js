$(function () {
    
$(".navbar a, footer a").on("click", function(event){
    event.preventDefault();
    var hash=this.hash;
    $('body').animate({scrollTop:(hash).offset().top}, 900, function(){window.location.hash=hash;})


});



    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $('.commentaire').empty();
        var postdata = $('#contact-form').serialize();
        
        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                 
                if(json.isSuccess) 
                {
                    $('#contact-form').append("<p class='Merci'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                    $('#contact-form')[0].reset();
                }
                else
                {
                    $('#firstname + .commentaire').html(json.firstnameError);
                    $('#name + .commentaire').html(json.nameError);
                    $('#email + .commentaire').html(json.emailError);
                    $('#phone + .commentaire').html(json.phoneError);
                    $('#message + .commentaire').html(json.messageError);
                }                
            }
        });
    });

})