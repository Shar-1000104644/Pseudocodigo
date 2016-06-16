//Escribe aquí tu código
// var nota_uno; var nota_dos; var nota_tres; var suma; var promedio; 
// var nota_uno = prompt('¿Cúal es tu primera nota?');
// var nota_dos = prompt('¿Cúal es tu segunda nota?');
// var nota_tres = prompt('¿Cúal es tu tercera nota?');

// // var suma = parseInt(nota_uno) + parseInt(nota_dos) + parseInt(nota_tres);
// // var promedio = suma/3;

// var promedio = (parseInt(nota_uno) + parseInt(nota_dos) + parseInt(nota_tres))/3;
// document.write('Tu promedio final es:'+ ' '+ promedio);


function promediar(){
	var notaUno=document.getElementById('num_one').value;
	var notaDos=document.getElementById('num_two').value;
	var notaTres=document.getElementById('num_three').value;
	var suma=parseInt(notaUno) + parseInt(notaDos) + parseInt(notaTres);
	var resultado= suma/3;
	document.getElementById('promedio').value= resultado;
	var letra = document.createElement("h1");
	var t = document.createTextNode('Tu promedio final es:' + ' ' + resultado); 
	letra.appendChild(t); 
    document.body.appendChild(letra);
}



