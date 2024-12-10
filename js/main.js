(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// Calculadora de recicláveis
// script.js


// script.js

// Pesos fixos por unidade (em gramas)
const pesoPorUnidade = {
    papel: 20,    // 20g por unidade
    plastico: 10, // 10g por unidade
    vidro: 60,    // 60g por unidade
    metal: 50,    // 50g por unidade
    pilhas: 200,  // 200g por unidade
};

// Pontos por quilograma
const pontosPorKg = {
    papel: 5,
    plastico: 5,
    vidro: 3,
    metal: 4,
    pilhas: 8,
};

// Calcula o peso total e converte para pontos
function calcularPesoEPontos() {
    const material = document.getElementById("material").value;
    const quantidade = parseInt(document.getElementById("quantidade").value, 10);
    const resultado = document.getElementById("resultadoCalculadora");

    // Verifica entrada válida
    if (!quantidade || quantidade <= 0) {
        resultado.textContent = "Insira uma quantidade válida.";
        return;
    }

    // Calcula peso total (em gramas) e converte para kg
    const pesoTotalGramas = quantidade * (pesoPorUnidade[material] || 0);
    const pesoTotalKg = pesoTotalGramas / 1000; // Convertendo para quilogramas

    // Calcula pontos com base no peso total em kg
    const pontos = pesoTotalKg * (pontosPorKg[material] || 0);

    // Exibe resultados
    resultado.innerHTML = `
        <p>Material: ${material.charAt(0).toUpperCase() + material.slice(1)}</p>
        <p>Peso total: ${pesoTotalKg.toFixed(2)}kg</p>
        <p>Pontos acumulados: ${pontos.toFixed(2)}</p>
    `;
}


 
