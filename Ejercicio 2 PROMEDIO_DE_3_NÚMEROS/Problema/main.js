//Escribe aquí tu código
var nota_uno; var nota_dos; var nota_tres; var suma; var promedio; 
var nota_uno = prompt('¿Cúal es tu primera nota?');
var nota_dos = prompt('¿Cúal es tu segunda nota?');
var nota_tres = prompt('¿Cúal es tu tercera nota?');
// var suma = parseInt(nota_uno) + parseInt(nota_dos) + parseInt(nota_tres);
// var promedio = suma/3;
var promedio = (parseInt(nota_uno) + parseInt(nota_dos) + parseInt(nota_tres))/3;
document.write('Tu promedio final es:'+ ' '+ promedio);


