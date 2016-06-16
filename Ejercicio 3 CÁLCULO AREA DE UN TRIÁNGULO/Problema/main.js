//Escribe aquí tu código

// var base; var altura; var area;
// var base = prompt('¿Cúal es la base del triángulo?');
// var altura = prompt('¿Cúal es la altura del triángulo?');
// var area = (parseInt(base) * parseInt(altura))/2;
// document.write('El área del triángulo es:' + ' ' + area);


function triangulo(){
	var base=document.getElementById('num_one').value;
	var altura=document.getElementById('num_two').value;
	var area=(parseInt(base)*parseInt(altura))/2;
	document.getElementById('area').value= area;
	var letra = document.createElement("h1");
	var t = document.createTextNode('El área del triángulo es:' + ' ' + area); 
	letra.appendChild(t); 
    document.body.appendChild(letra);
}