/*Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. 
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
Si es más pequeño, la consola registra "¡El número es menor que 50!"*/




function exercise(a, b, c, d) {
    let additionOne = a + b;
    let additionTwo = c + d;
    let multiplication = additionOne * additionTwo;

    if (multiplication > 50) {
        console.log("¡El número es mayor que 50!");
    } else if (multiplication < 50) {
        console.log("¡El número es menor que 50!");
    } else {
        console.log("¡50!");
    }
}



exercise(2, 3, 2, 3);
exercise(3, 2, 6, 4);
exercise(10, 8, 15, 17);