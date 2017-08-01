$(function () {
    $('.request').on('click', function () {
        var loading = $('<div id="preloader"><div id="preloader-inner"></div></div>');
        $('body').append(loading);

        $(window).preloader({
            fadeDuration: 0,
            delay: 3000
        });
        $.get('https://restcountries.eu/rest/v2/currency/usd')
            .done(function (countries) {
                var countCountry = Lazy(countries).filter(function (country) {
                    return country.region !== 'Africa' && country.region !== 'Asia';
                }).toArray().length;
                setTimeout(function () {
                    $('.response').val(countCountry)
                }, 3000);
            });
    });
});






