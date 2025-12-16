var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function contarNodos() {
    var list = document.getElementById("shoping-list");
    console.log("HAy " + list.childElementCount + " elementos en la lista");
}
function obtenerTexto() {
    var _a, _b;
    var list = document.getElementById("shoping-list");
    console.log("El primer elemento es: " + ((_a = list.firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent));
    console.log("El ultimo elemento es:" + ((_b = list.lastElementChild) === null || _b === void 0 ? void 0 : _b.textContent));
}
function duplicar() {
    var list = document.getElementById("shoping-list");
    var id = Number(window.prompt("Dime un elemento a duplicar"));
    var childs = [];
    for (var i = 0; i < list.childElementCount; i++) {
        childs.push(list.children[i]);
    }
    if (id > 0 && id <= childs.length) {
        var dupl = document.createElement("li");
        dupl.textContent = childs[id - 1].textContent;
        list.appendChild(dupl);
        console.log("Elemento duplicado.");
    }
    else {
        console.log("Número no válido");
    }
}
function modificar() {
    var list = document.getElementById("shoping-list");
    var id = Number(window.prompt("Dime el elemento que quieres modificar"));
    var text = window.prompt("Dime el nuevo elemento de la lista");
    var childs = [];
    for (var i = 0; i < list.childElementCount; i++) {
        childs.push(list.children[i]);
    }
    if (id > 0 && id <= childs.length) {
        childs[id - 1].textContent = text;
        console.log("Se ha modificado el elemento");
    }
    else {
        console.log("Elemento no valido");
    }
}
function mostrarTodo() {
    var list = document.getElementById("shoping-list");
    var childs = __spreadArray([], list.children, true).map(function (child) { return child; });
    console.log("Elementos actuales: ");
    childs.forEach(function (element) { return console.log(element.textContent); });
}
function añadir() {
    var nuevo = document.createElement("li");
    nuevo.textContent = window.prompt("Añada un nuevo elemento a la lsita");
    var list = document.getElementById("shoping-list");
    list.appendChild(nuevo);
    console.log("Producto añadido");
}
function eliminar() {
    var list = document.getElementById("shoping-list");
    var id = Number(window.prompt("Dime el elemnto que quieres borrar"));
    var childs = [];
    for (var i = 0; i < list.childElementCount; i++) {
        childs.push(list.children[i]);
    }
    if (id > 0 && id <= childs.length) {
        list.removeChild(childs[id - 1]);
        console.log("Elemento borrado");
    }
    else {
        console.log("El id no existe");
    }
}
function ordenar() {
    var list = document.getElementById("shoping-list");
    var childs = [];
    for (var i = 0; i < list.childElementCount; i++) {
        childs.push(list.children[i]);
    }
    var listaOrdeneada = childs.map(function (li) { return li.textContent; }).sort(function (a, b) { return a.localeCompare(b); });
    list.innerHTML = "";
    for (var _i = 0, listaOrdeneada_1 = listaOrdeneada; _i < listaOrdeneada_1.length; _i++) {
        var text = listaOrdeneada_1[_i];
        var li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
    }
    console.log("Lista ordenada alfabeticamante");
}
