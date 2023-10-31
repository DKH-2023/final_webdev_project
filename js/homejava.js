$(function() {
    $('#contact, #openContactForm').click(function() {
        console.log('Contact button clicked'); // Add this line
        $('#contactForm').fadeToggle().css('opacity', 1);
        $('.collapsebar').css('opacity', 1);
    });

    $(document).mouseup(function(e) {
        var container = $("#contactForm");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.fadeOut();
            if ($(window).width() <= 768) {
                $('.collapsebar').css('opacity', 0.7);
            }
        }
    });
});
