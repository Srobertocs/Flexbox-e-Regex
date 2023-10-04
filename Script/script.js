$(document).ready(function () {
    $('#cpf_input').on('input', function () {
        var value = $(this).val();
        value = value.replace(/\D/g, ''); 
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
        $(this).val(value);
    });

    $('#tel_input').on('input', function () {
        var value = $(this).val();
        value = value.replace(/\D/g, ''); 
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2'); 
        $(this).val(value);
    });
});

$("#botao").on('click', function(){
    alert("Formulário enviado com sucesso!!");
});