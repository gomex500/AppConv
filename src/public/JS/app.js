function convertir(){
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
            } else if(valor2 == 2) {
                res = dato * 0.393701;
                document.getElementById('res').innerHTML = res+" pul";
            }else if (valor2 == 3) {
                res = dato / 100;
                document.getElementById('res').innerHTML = res+" m";
            }else if (valor2 == 4){
                res = dato / 100000;
                document.getElementById('res').innerHTML = res+" km";
            }else if (valor2 == 5){
                res = dato / 160934;
                document.getElementById('res').innerHTML = res+" milla";
            }else{
                document.getElementById('res').innerHTML = "error"
            }
        } else if(valor1 == 2) {
            if (valor2 == 1) {
                res = dato * 2.54;
                document.getElementById('res').innerHTML = res+" cm";
            } else if(valor2 == 2) {
                document.getElementById('res').innerHTML = "como se te ocurre q vas a convertirlo al mismo tipo";
            }else if (valor2 == 3) {
                res = dato / 39.37;
                document.getElementById('res').innerHTML = res+" m";
            }else if (valor2 == 4){
                res = dato / 39370;
                document.getElementById('res').innerHTML = res+" km";
            }else if (valor2 == 5){
                res = dato / 63360;
                document.getElementById('res').innerHTML = res+" milla";
            }else{
                document.getElementById('res').innerHTML = "error"
            }
        }else if (valor1 == 3) {
            if (valor2 == 1) {
                res = dato * 100;
                document.getElementById('res').innerHTML = res+" cm";
            } else if(valor2 == 2) {
                res = dato * 39.37;
                document.getElementById('res').innerHTML = res+" pul";
            }else if (valor2 == 3) {
                document.getElementById('res').innerHTML = "como se te ocurre q vas a convertirlo al mismo tipo";
            }else if (valor2 == 4){
                res = dato / 1000;
                document.getElementById('res').innerHTML = res+" km";
            }else if (valor2 == 5){
                res = dato / 1609;
                document.getElementById('res').innerHTML = res+" milla";
            }else{
                document.getElementById('res').innerHTML = "error"
            }
        }else if (valor1 == 4){
            if (valor2 == 1) {
                res = dato * 100000;
                document.getElementById('res').innerHTML = res+" cm";
            } else if(valor2 == 2) {
                res = dato * 39370;
                document.getElementById('res').innerHTML = res+" pul";
            }else if (valor2 == 3) {
                res = dato * 1000;
                document.getElementById('res').innerHTML = res+" m";
            }else if (valor2 == 4){
                document.getElementById('res').innerHTML = "como se te ocurre q vas a convertirlo al mismo tipo";
            }else if (valor2 == 5){
                res = dato / 1.609;
                document.getElementById('res').innerHTML = res+" milla";
            }else{
                document.getElementById('res').innerHTML = "error"
            }
        }else if (valor1 == 5){
            if (valor2 == 1) {
                res = dato * 160934;
                document.getElementById('res').innerHTML = res+" cm";
            } else if(valor2 == 2) {
                res = dato * 63360;
                document.getElementById('res').innerHTML = res+" pul";
            }else if (valor2 == 3) {
                res = dato * 1609;
                document.getElementById('res').innerHTML = res+" m";
            }else if (valor2 == 4){
                res = dato / 1.609;
                document.getElementById('res').innerHTML = res+" km";
            }else if (valor2 == 5){
                document.getElementById('res').innerHTML = "como se te ocurre q vas a convertirlo al mismo tipo";
            }else{
                document.getElementById('res').innerHTML = "error"
            }
        }else{
            document.getElementById('res').innerHTML = "error";
        }
    }
}

function limpiar(){
    document.getElementById('dato').value = "";
    document.getElementById('res').innerHTML = "valor";
}