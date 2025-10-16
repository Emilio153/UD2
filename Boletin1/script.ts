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
function ej1(){
    let hora: Date = new Date();
    console.log("Hoy es: " + hora.getDate() + "/" + (hora.getMonth()+1) + "/" + hora.getFullYear());
    console.log("Son las: " + hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getMinutes());

    console.log("Hora Posterior: " + (hora.getHours()+1) + ":" + hora.getMinutes() + ":" + hora.getMinutes());
    console.log("Hora Anterior: " + (hora.getHours()-1) + ":" + hora.getMinutes() + ":" + hora.getMinutes());

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
 function validar_mail(){
    let expReg: RegExp = new RegExp("lo_que_sea");

    if(document.getElementById("email") !=null){
        let mensajeOK = document.createElement("span");
        let email: HTMLInputElement = document.getElementById("email") as HTMLInputElement;

        if(expReg.test(email.value)){
            mensajeOK.textContent= "Email correcto";
        }else{
            mensajeOK.textContent = "Email incorrecto";
        }

        }
    }
    

    
 