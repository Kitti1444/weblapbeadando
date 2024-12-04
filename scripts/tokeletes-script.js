$(document).ready(function () {
    // Slick Slider inicializálása
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 2, // Nagyobb kijelzőn 2 kép jelenik meg
        slidesToScroll: 2, // Kettesével lapoz
        arrows: true, // Lapozó nyilak engedélyezése
        dots: false, // Pontok kikapcsolva
        responsive: [
            {
                breakpoint: 768, // Tablet méret alatt
                settings: {
                    slidesToShow: 1, // Egyszerre 1 kép jelenik meg
                    slidesToScroll: 1, // Egyenként lapoz
                    arrows: false // Nyilak elrejtése
                }
            },
            {
                breakpoint: 480, // Mobil méret alatt
                settings: {
                    slidesToShow: 1, // Egyszerre 1 kép
                    slidesToScroll: 1, // Egyenként lapoz
                    arrows: false // Nyilak elrejtése
                }
            }
        ]
    });

    // Modal megjelenítése kattintáskor
    $('.multiple-items img').on('click', function () {
        $('#modalImage').attr('src', $(this).attr('src')); // A kattintott kép URL-jének átvétele
        $('#imageModal').fadeIn(); // Modal megjelenítése
    });

    // Modal bezárása "×" gombra kattintva
    $('.modal-close').on('click', function () {
        $('#imageModal').fadeOut(); // Modal elrejtése
    });

    // Modal bezárása a háttérre kattintva
    $('#imageModal').on('click', function (e) {
        if (e.target === this) {
            $(this).fadeOut(); // Modal elrejtése
        }
    });
});
