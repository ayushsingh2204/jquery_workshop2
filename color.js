$('document').ready(()=>{
    $('#b1').click(()=>{
        $("#b1").css("background-color", "red");
        $('.red').show();
        $('.orange').hide();
        $('.yellow').hide();
    });

    $('#b2').click(()=>{
        $("#b2").css("background-color", "orange");
        $('.orange').show();
        $('.red').hide();
        $('.yellow').hide();
    });

    $('#b3').click(()=>{
        $("#b3").css("background-color", "yellow");
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
