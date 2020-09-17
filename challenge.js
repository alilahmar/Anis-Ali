// declaration of var:
let input = document.getElementById("myInput");
let button = document.getElementsByClassName("addBtn")[0];
let list = document.getElementById("myUL");

// functions:
function addToDo() {
    
let text = document.createTextNode(input.Value);
console.log(text);
let li = document.createElement('li');
li.appendChild(text);
if(input.Value) {
    list.appendChild(li); 
}else
alert("add value to the input")


 input.Value="";
 let removebtn = document.createElement('button');
li.appendChild(removebtn);
 removeBtn.innerText= 'x';
}
Addclicker.addEventListener('click',addToDo)