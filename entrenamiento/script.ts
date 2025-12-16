function contarNodos(): void{
let list: HTMLOListElement = document.getElementById("shoping-list")as HTMLOListElement;
console.log("HAy " + list.childElementCount + " elementos en la lista");
}
function obtenerTexto(): void{
let list:HTMLOListElement =document.getElementById("shoping-list")as HTMLOListElement;
console.log("El primer elemento es: " + list.firstElementChild?.textContent);
console.log("El ultimo elemento es:" + list.lastElementChild?.textContent);
}
function duplicar(): void{
    let list:HTMLOListElement = document.getElementById("shoping-list")as HTMLOListElement;
    let id: number = Number(window.prompt("Dime un elemento a duplicar"));

    const childs:HTMLLIElement[] = [];
    for(let i = 0; i < list.childElementCount; i++){
        childs.push(list.children[i] as HTMLLIElement);
    }
    if(id > 0 && id <= childs.length){
        let dupl:HTMLLIElement = document.createElement("li");
        dupl.textContent = childs[id -1].textContent;
        list.appendChild(dupl);
        console.log("Elemento duplicado.");
    }else{
        console.log("Número no válido");
    }
    
    
    }
function modificar(){
let list: HTMLOListElement = document.getElementById("shoping-list")as HTMLOListElement;
let id:number =Number(window.prompt("Dime el elemento que quieres modificar"));
let text :string = window.prompt("Dime el nuevo elemento de la lista")as string;
const childs:HTMLLIElement[] = [];
for(let i = 0;i<list.childElementCount;i++){
    childs.push(list.children[i]as HTMLLIElement);
    }
if(id > 0 && id <=childs.length){
    childs[id -1].textContent = text;
    console.log("Se ha modificado el elemento");
}else{
    console.log("Elemento no valido");
}
}
function mostrarTodo(){
    let list:HTMLOListElement= document.getElementById("shoping-list")as HTMLOListElement;
    const childs:HTMLLIElement[]= [...list.children].map(child =>child as HTMLLIElement);

    console.log("Elementos actuales: ");
    childs.forEach(element => console.log(element.textContent));

}
function añadir(){
let nuevo: HTMLLIElement =document.createElement("li");
nuevo.textContent = window.prompt("Añada un nuevo elemento a la lsita");
let list:HTMLOListElement =document.getElementById("shoping-list")as HTMLOListElement;
list.appendChild(nuevo);
console.log("Producto añadido");


}
function eliminar(){
let list:HTMLOListElement = document.getElementById("shoping-list")as HTMLOListElement;
let id:number = Number(window.prompt("Dime el elemnto que quieres borrar"));

const childs:HTMLLIElement[]=[];
for(let i=0;i< list.childElementCount;i++){
    childs.push(list.children[i] as HTMLLIElement);    
}
if(id>0 && id <= childs.length){
    list.removeChild(childs[id-1]);
    console.log("Elemento borrado");
}else{
    console.log("El id no existe");
}

}
function ordenar(){
let list:HTMLOListElement =document.getElementById("shoping-list")as HTMLOListElement;
const childs:HTMLLIElement[]=[];
for(let i =0; i <list.childElementCount;i++){
    childs.push(list.children[i]as HTMLLIElement);
}

const listaOrdeneada = childs.map(li => li.textContent as string).sort((a, b)=> a.localeCompare(b));
list.innerHTML ="";
for(const text of listaOrdeneada){
    let li:HTMLLIElement = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);
}
console.log("Lista ordenada alfabeticamante");
}