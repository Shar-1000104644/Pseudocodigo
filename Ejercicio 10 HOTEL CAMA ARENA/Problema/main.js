//Escribe aquí tu código
var costo_estancia; var habitaciones; var precio;
var costo_estancia = prompt('¿Cúal es el costo por la usar una habitacion en tu hotel?');
var habitaciones = prompt('¿Cúantas habitaciones va a ocupar?');
var precio = costo_estancia*habitaciones;
document.write('Debes cobrar' + ' ' + 'S/.'+precio + ' '+ 'soles');

