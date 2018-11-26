//Declaración de variables
misTitulos = ["Titulo 1","Titulo 2","Titulo 3","Titulo 4","Titulo 5"];
misAcciones = ["Accion 1","Accion 2","Accion 3","Accion 4","Accion 5"];


function verTitulos(){   
    for (var n = 0; n < misTitulos.length; n++){
        var titulo = document.createElement("li");
    
        $(titulo).addClass("list-item")
            .click(function(e){
                    $(".tituloselected").toggleClass("tituloselected");
                    $(this).toggleClass("tituloselected");
                })
            .text(misTitulos[n]);

        $("#titulos").append(titulo);
    }
}

function verAcciones(){
    for (var n = 0; n < misAcciones.length; n++){
        var accion = document.createElement("li");
    
        $(accion).addClass("list-item")
            .click(function(e){
                $(".accionselected").toggleClass("accionselected");
                $(this).toggleClass("accionselected");
            })
        .text(misAcciones[n]);

        $("#acciones").append(accion);
    }
}

function verPredTitulo(){
    var prediccion;
    alert("La prediccion es:" + prediccion);
}

function verPredAccion(){
    var prediccion;
    alert("La prediccion es:" + prediccion);
}