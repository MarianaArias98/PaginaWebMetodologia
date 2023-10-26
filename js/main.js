
$(document).ready(function(){

$('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
});

$(window).on('scroll load', function(){
    $('.fa-bars').removeClass('fa-times');
    $('nav').removeClass('nav-toggle');
});
 


$('.count').each(function(){
    var $this = $(this),
    countTo = $this.attr('data-count');
    $({ countNum : $this.text()}).animate({
        countNum : countTo
    },
    {
       duration:5000,
       step : function(){
        $this.text(Math.floor(this.countNum));
       },
       complete : function(){
        $this.text(this.countNum + "+")
       }
    });
});


$('.project').magnificPopup({
    delegate:'a',
    type: 'image',
    gallery:{
        enabled: true
    }
});


// Obtén el elemento del ícono de WhatsApp por su identificador
const whatsappIcon = document.getElementById("whatsapp-icon");

// Agrega un evento clic al ícono de WhatsApp
whatsappIcon.addEventListener("click", function (event) {
    // Evita que el enlace predeterminado se ejecute
    event.preventDefault();

    // Número de teléfono (incluye el código de país, por ejemplo, +1234567890)
    const phoneNumber = "+5493865697709";

    // Mensaje opcional (puedes dejarlo en blanco si no deseas un mensaje predefinido)
    const message = "Hola, estoy interesado en sus servicios con yeso.";

    // Crea la URL de WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Abre una nueva ventana o redirige a la URL de WhatsApp
    window.open(whatsappURL, "_blank");
});





});