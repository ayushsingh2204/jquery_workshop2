$('document').ready(()=>{
    $('#b1').click(()=>{
        $('.red').show();
        $('.orange').hide();
        $('.yellow').hide();
    });

    $('#b2').click(()=>{
        $('.orange').show();
        $('.red').hide();
        $('.yellow').hide();
    });

    $('#b3').click(()=>{
        $('.yellow').show();
        $('.red').hide();
        $('.orange').hide();
    });

    $('#b4').click(()=>{
        $('.orange').show();
        $('.red').show();
        $('.yellow').show();
    });
})