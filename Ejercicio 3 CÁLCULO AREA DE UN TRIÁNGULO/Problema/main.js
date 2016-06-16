//Escribe aquí tu código
var base; var altura; var area;
var base = prompt('¿Cúal es la base del triángulo?');
var altura = prompt('¿Cúal es la altura del triángulo?');
var area = (parseInt(base) * parseInt(altura))/2;
document.write('El área del triángulo es:' + ' ' + area);