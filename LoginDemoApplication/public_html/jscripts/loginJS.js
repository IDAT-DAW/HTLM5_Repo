/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $("#login").click(function(){
        
        var user = $("#user").val();
        var clave = $("#clave").val();
        // Verificando campos vacios
        if( user =='' || clave ==''){
           
            alert("Por favor complete los campos...!!!!!!");
            return false;
        }
        
        if (clave.length > 5)
        {
            alert("Tamaño maximo permitido es 5 caracteres");
            return false; 
        }
        
      });
});

