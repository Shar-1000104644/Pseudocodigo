//Escribe aquí tu código

// var sueldo; var hora; var pago;
// var hora= prompt('¿Cúantas horas trabajaste durante la semana?');
// var pago = prompt('¿Cúal es la cantidad de dinero que recibes por trabajar una hora?');
// var sueldo = hora*pago;
// document.write('Esta semana tu pago es:'+' '+sueldo+' '+'soles');

function ingresos(){
	var pago=document.getElementById('num_one').value;
	var hora=document.getElementById('num_two').value;
	var resultado=parseInt(pago)*parseInt(hora);
	document.getElementById('sueldo').value= resultado;
	var letra = document.createElement("h1");
	var t = document.createTextNode('Tu remuneración semanal es:' + ' ' +'S/.'+ resultado + ' '+ 'soles.'); 
	letra.appendChild(t); 
    document.body.appendChild(letra);
}