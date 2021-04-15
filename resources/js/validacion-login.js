$(document).ready(function(){
    
    //Captura click del botón
    var boton = $("#validar-datos");
    boton.click(function(){

        //Guardar los datos del input en variables
        var email = $("#correo").val();
        var password = $("#contraseña").val();
        

        //Comparar datos con los de administrador
        if(email == "administrador@caosnews.com" && password == "12345"){
            alert("True" + email);

            location.href="administrador/admi_solicitud_1.html";
        }
        //Comparar datos con los de colaborador
        else if(email == "reporcultura@caosnews.com" && password == "12345"){

            location.href="reportero/repor_nuevo_reportaje.html";

        }else{
            var mensaje = $("#mensaje-error").css("display", "block");
        }
    });
       

});