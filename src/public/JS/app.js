var datos = [];

function convertir() {
    var valor1 = parseInt(document.getElementById('valor').value);
    var valor2 = parseInt(document.getElementById('conver').value);
    var dato = document.getElementById('dato').value;
    var res;
    if (dato === '') {
        alert("el campo de entrada esta vacio");
    } else {
        if (valor1 == 1) {
            if (valor2 == 1) {
                document.getElementById('res').innerHTML = "como se te ocurre q vas a convertirlo al mismo tipo";
            } else if (valor2 == 2) {
                res = dato * 0.393701;
                document.getElementById('res').innerHTML = res + " pul";
            } else if (valor2 == 3) {
                res = dato / 100;
                document.getElementById('res').innerHTML = res + " m";
            } else if (valor2 == 4) {
                res = dato / 100000;
                document.getElementById('res').innerHTML = res + " km";
            } else if (valor2 == 5) {
                res = dato / 160934;
                document.getElementById('res').innerHTML = res + " milla";
            } else {
                document.getElementById('res').innerHTML = "error"
            }
        } else if (valor1 == 2) {
            if (valor2 == 1) {
                res = dato * 2.54;
                document.getElementById('res').innerHTML = res + " cm";
            } else if (valor2 == 2) {
                document.getElementById('res').innerHTML = "como se te ocurre q vas a convertirlo al mismo tipo";
            } else if (valor2 == 3) {
                res = dato / 39.37;
                document.getElementById('res').innerHTML = res + " m";
            } else if (valor2 == 4) {
                res = dato / 39370;
                document.getElementById('res').innerHTML = res + " km";
            } else if (valor2 == 5) {
                res = dato / 63360;
                document.getElementById('res').innerHTML = res + " milla";
            } else {
                document.getElementById('res').innerHTML = "error"
            }
        } else if (valor1 == 3) {
            if (valor2 == 1) {
                res = dato * 100;
                document.getElementById('res').innerHTML = res + " cm";
            } else if (valor2 == 2) {
                res = dato * 39.37;
                document.getElementById('res').innerHTML = res + " pul";
            } else if (valor2 == 3) {
                document.getElementById('res').innerHTML = "como se te ocurre q vas a convertirlo al mismo tipo";
            } else if (valor2 == 4) {
                res = dato / 1000;
                document.getElementById('res').innerHTML = res + " km";
            } else if (valor2 == 5) {
                res = dato / 1609;
                document.getElementById('res').innerHTML = res + " milla";
            } else {
                document.getElementById('res').innerHTML = "error"
            }
        } else if (valor1 == 4) {
            if (valor2 == 1) {
                res = dato * 100000;
                document.getElementById('res').innerHTML = res + " cm";
            } else if (valor2 == 2) {
                res = dato * 39370;
                document.getElementById('res').innerHTML = res + " pul";
            } else if (valor2 == 3) {
                res = dato * 1000;
                document.getElementById('res').innerHTML = res + " m";
            } else if (valor2 == 4) {
                document.getElementById('res').innerHTML = "como se te ocurre q vas a convertirlo al mismo tipo";
            } else if (valor2 == 5) {
                res = dato / 1.609;
                document.getElementById('res').innerHTML = res + " milla";
            } else {
                document.getElementById('res').innerHTML = "error"
            }
        } else if (valor1 == 5) {
            if (valor2 == 1) {
                res = dato * 160934;
                document.getElementById('res').innerHTML = res + " cm";
            } else if (valor2 == 2) {
                res = dato * 63360;
                document.getElementById('res').innerHTML = res + " pul";
            } else if (valor2 == 3) {
                res = dato * 1609;
                document.getElementById('res').innerHTML = res + " m";
            } else if (valor2 == 4) {
                res = dato / 1.609;
                document.getElementById('res').innerHTML = res + " km";
            } else if (valor2 == 5) {
                document.getElementById('res').innerHTML = "como se te ocurre q vas a convertirlo al mismo tipo";
            } else {
                document.getElementById('res').innerHTML = "error"
            }
        } else {
            document.getElementById('res').innerHTML = "error";
        }
    }
}

function convertir2() {
    var ancho = parseFloat(document.getElementById('ancho').value);
    var largo = parseFloat(document.getElementById('largo').value);
    var res1;
    var res2;
    if (ancho > 0 && largo > 0) {
        res1 = ancho * largo;
        res2 = res1 / 10000;
        document.getElementById('res1').innerHTML = res1 + " m2";
        document.getElementById('res2').innerHTML = res2 + " ha";
    } else {
        alert("rellena todos los campos");
    }
}

function limpiar() {
    document.getElementById('dato').value = "";
    document.getElementById('res').innerHTML = "valor";
}

function limpiar2() {
    document.getElementById('ancho').value = "";
    document.getElementById('largo').value = "";
    document.getElementById('res1').innerHTML = "m2";
    document.getElementById('res2').innerHTML = "ha";
}

function add() {
    var dato = parseFloat(document.getElementById("dato").value);
    if (dato > 0) {
        datos.push(dato);
        cargarDatos();
        document.getElementById("dato").value = "";
    } else {
        alert("nel")
    }
}

function cargarDatos() {
    if (datos.length > 0) {
        var contenedor = document.getElementById('contenedor');
        contenedor.innerHTML = "";
        for (var i = 0; i < datos.length; i++) {
            var div = document.createElement("div");
            div.className = "ci text-white";
            div.innerHTML = '<h6 class="p" id="' + i + '">' + datos[i] + '</h6><button onclick="eliminar(' + datos[i] + ');" class="btn btn1 btn-info">Delete</button>'
            contenedor.appendChild(div);
        }
    } else {
        var contenedor = document.getElementById('contenedor');
        contenedor.innerHTML = '<h6 class="p text-white">Datos</h6>';
    }
}

function limpiar3() {
    document.getElementById('dato').value = "";
    var contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = '<h6 class="p text-white">Datos</h6>';
    document.getElementById('res5').innerHTML = "media:"
    document.getElementById('res6').innerHTML = "moda:"
    document.getElementById('res7').innerHTML = "desviacion:"
    datos.splice(0, datos.length);
}

function eliminar(item) {
    var i = datos.indexOf(item);
    if (i !== -1) {
        datos.splice(i, 1);
    }
    cargarDatos();
}

function calcular() {
    document.getElementById('res5').innerHTML = "media: "+getMedia();
}

function getMedia() {
    var media = 0;
    if (datos.length >= 2) {
        var suma = 0;
        for (var i = 0; i < datos.length; i++) {
            suma = suma + datos[i];
        }
        media = suma / datos.length;
    } else {
        alert('nel');
    }
    return media;
}

// function getModa(){
//     var val1;
//     var val2 = 0;
//     if (datos.length % 2==0) {
//         for (var i = 0; i < datos.length; i++) {
//             val1 = datos[i];
//             for (var e = 0; e < datos.length; e++) {
//                 if (val1 == datos[i]) {
//                     continue;
//                 }else if(val1 == datos[e]){
//                     val2 == 
//                 }else{

//                 }
//             }
//         }
//     } else {
        
//     }
// }