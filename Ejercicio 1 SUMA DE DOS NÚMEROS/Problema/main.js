//Escribe aquí tu código

// var numero_uno; var numero_dos; var resultado;
// var numero_uno = prompt('Ingresa el primer número');
// var numero_dos = prompt('Ingresa el segundo número');
// var resultado = parseInt(numero_uno) + parseInt(numero_dos);
// document.write('La suma es:' + ' ' + resultado);

//Segunda opción

function suma(){
	var numeroUno=document.getElementById('num_one').value;
	var numeroDos=document.getElementById('num_two').value;
	var resultado=parseInt(numeroUno)+parseInt(numeroDos);
	document.getElementById('suma').value= resultado;
	var letra = document.createElement("h1");
	var t = document.createTextNode('El resultado es:' + ' ' + resultado); 
	letra.appendChild(t); 
    document.body.appendChild(letra);
}