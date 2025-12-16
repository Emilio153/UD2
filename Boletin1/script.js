// let colores = ["#FFD1DC", "#FFE5B4", "#FFFACD", "#BFD8B8", "#AEC6CF", "#CBAACB", "#E3E4FA", "#AAF0D1", "#FF7F50", "#FFD8B1"
// ];
// let ejercicios = document.getElementsByClassName("ejercicio");
// window.onload = function() {
//     for(let i = 0; i < ejercicios.length; i++){
//         let colorAleatorio = Math.random() * colores.length;
//         console.log(colorAleatorio);
//         ejercicios[i].style.backgroundColor = colores[Math.floor(colorAleatorio)];
//     }
// };
// ejerccicio 1
// Realiza un programa que haciendo uso del objeto DATE, crees una variable para
// saludar al usuario con un alerta tras abrir la aplicación indicando la hora y la fecha
// actual. Haz también que se muestre por consola una hora posterior y una hora
// anterior.
function ej1() {
    var hora = new Date();
    console.log("Hoy es: " + hora.getDate() + "/" + (hora.getMonth() + 1) + "/" + hora.getFullYear());
    console.log("Son las: " + hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getMinutes());
    console.log("Hora Posterior: " + (hora.getHours() + 1) + ":" + hora.getMinutes() + ":" + hora.getMinutes());
    console.log("Hora Anterior: " + (hora.getHours() - 1) + ":" + hora.getMinutes() + ":" + hora.getMinutes());
}
// 2.Crea una función que haciendo uso de las expresiones regulares permita validar el
// formato de una dirección de correo electrónico. Recuerda que estas son las normas
// que lo validan:
// a. El carácter @ es obligatorio y separa la primera y segunda parte del correo
// b. La primera parte acepta letras minúsculas, mayúsculas, caracteres
// numéricos y los siguientes carácteres. #*+&’!%@?{^}”
// c. La primera parte acepta todos los caracteres punto (.) que se deseen pero no
// puede ser ni el primer ni el último carácter ni tampoco pueden ir seguidos
// d. La segunda parte acepta puntos, dígitos, guiones y letras.
function ej2_validar_mail() {
    var regExp = new RegExp("[^\s@]+@[^\s@]+\.[^\s@]+$");
    if (regExp.test($inputValue("email"))) {
        $writeNode("ok", "El email es valido");
        $writeNode("error", "");
    }
    else {
        $writeNode("ok", "");
        $writeNode("error", "El email no cumple los requisitos");
    }
}
/* 3. Escribe un programa que le pida al usuario qué porcentaje quiere aplicar para
redimensionar la ventana. El programa debe pedir confirmación y solo en caso de
que se acepte, se redimensionará la ventana al porcentaje indicado. Es necesario
igualmente ir mostrando por consola que va ocurriendo en cada momento. ¿Se
puede hacer esto? ¿Por qué crees que puede ocurrir? */
function ej3() {
    var ventana = window.open("https://www.google.es", "nuevaVentana");
}
/* 4. Crea un formulario con un campo de tipo texto que pida una URL y al pulsar IR te
redirija a la URL introducida. (window.location) */
function redirect_to() {
    var regExp = new RegExp("^https:\/\/");
    var url = $inputValue("url").trim();
    if (regExp.test(url)) {
        window.location.href = url;
    }
    else {
        $writeNode("error2", "Introduce una url valida");
        window.setTimeout(function () { return $writeNode("error2", ""); }, 3000);
    }
}
//5. Abre una ventana emergente con la web del IES. (window.open)
/* 6. Muestra un mensaje de saludo a los cinco segundos de abrir la aplicación. (set
timeout (function, 5000ms) */
/* 7. Muestra toda la información (nombre, versión, conexión y plataforma) del navegador
usando el objeto navigator. (navigator.appName, navigator.appVersion,
navigator.platform, navigator.connection) */
/* 8. Muestra un mensaje por alerta cuando la página haya terminado de cargar. Usa el
objeto onload. (window.onload() = function) */
//Helpers (comunes para todo el boletín)
function $inputValue(id) {
    var input = document.getElementById(id);
    var result = "";
    if (input) {
        result = input.value;
    }
    return result;
}
function $writeNode(id, msg) {
    var nodo = document.getElementById(id);
    if (nodo) {
        nodo.textContent = msg;
    }
}
function suma(a, b) {
    var result = a + b;
    return result;
}
// const suma2 =(a:number, b: number)=>a+b;
var arrayPrueba = [1, 3, 5, 7, 9, 13];
var total = arrayPrueba.reduce(function (contador, data) { return contador + data; });
var array2 = arrayPrueba.filter(function (arrayPrueba) { return arrayPrueba > 5; });
var array3 = arrayPrueba.map(function (arrayPrueba) { return (arrayPrueba) * 2; });
var array4 = arrayPrueba.some(function (arrayPrueba) { return arrayPrueba > 5; });
var array5 = arrayPrueba.every(function (arrayPrueba) { return arrayPrueba > 5; });
arrayPrueba.forEach(function (data, idx) { return console.log("Este es el elemento" + (idx + 1) + ": " + data); });
console.log(arrayPrueba);
