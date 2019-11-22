$(document).ready(function() {
    // Validação de RG
    $('.mask-rg')
        .mask('00.000.000.0')
        .on('blur', function (e) {
            if ($(this).val().length < 12) {
                $(this).val('');
            }
        })
    ;

    $('.mask-cpf')
        .mask('000.000.000-00')
        .on('blur', function (e) {
            if ($(this).val().length < 13) {
                $(this).val('');
            }
        })
    ;

    $('.mask-phone')
        .mask('(00) 00000-0000')
        .on('blur', function (e) {
            if ($(this).val().length < 14) {
                $(this).val('');
            }
        })
    ;

    $('.mask-cep')
        .mask('00000-000')
        .on('blur', function (e) {
            if ($(this).val().length < 9) {
                $(this).val('');
            }
        })
    ;

    $('.mask-time')
        .mask('00:00:00')
        .on('blur', function (e) {
            if ($(this).val().length < 8) {
                $(this).val('');
            }
        })
    ;

    $('.mask-crm')
        .mask('000000000000000')
    ;


})
