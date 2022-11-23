//var secondli = document.querySelector('li:nth-child(2)');
//secondli.style.backgroundColor = 'green';
//var thirdli = document.querySelector('li:nth-child(3');
//thirdli.style.display = 'none';

//var item =document.querySelectorAll('.list-group-item');
//item[1].style.color = 'green';

//var odditem =document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odditem.length;i++){
//    odditem[i].style.backgroundColor = 'green';
//}

//parent node
var item = document.querySelector("#items");
//console.log(item.parentNode);
//item.parentNode.parentNode.style.backgroundColor = 'grey';

//child node
//console.log(item.children);

//first element child
///console.log(item.firstElementChild);
//item.firstElementChild.textContent = 'hello';

//last elemnt child

//console.log(item.lastElementChild);
//item.lastElementChild.style.color ='yellow';

//previous siblinf
//console.log(item.previousElementSibling);

//create element
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
newDiv.id ='helllo1';
//add attr
newDiv.setAttribute('title','hello world');
//create text node
var text = document.createTextNode('hello world');

//add text to div
newDiv.appendChild(text);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');

//container.insertBefore(newDiv , h1);
//newDiv.style.fontSize = '30px';
//newDiv.style.fontWeight = 'bold'

var container = document.getElementById('items');
var newli = document.createElement('li');
newli.appendChild(text);
console.log(newli);
var secondli = document.querySelector('li:nth-child(1)');
container.insertBefore(newli,secondli);

