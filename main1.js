//var secondli = document.querySelector('li:nth-child(2)');
//secondli.style.backgroundColor = 'green';
//var thirdli = document.querySelector('li:nth-child(3');
//thirdli.style.display = 'none';

//var item =document.querySelectorAll('.list-group-item');
//item[1].style.color = 'green';

var odditem =document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odditem.length;i++){
    odditem[i].style.backgroundColor = 'green';
}
