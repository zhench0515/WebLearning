// import $ from '../assets/JS/jquery'

$(document).ready(function () {
    try {
        $('body').ripples({
            resolution: 512,
            dropRadius: 20, //px
            perturbance: 0.04,
        });
    } catch (e) {
        $('.error').show().text(e);
    }
    $('.disable').show().on('click', function () {
        $('body, main').ripples('destroy');
        $(this).hide();
    });
});