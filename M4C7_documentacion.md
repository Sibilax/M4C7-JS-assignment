### M4C7

## ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

JavaScript (JS) es uno de los lenguajes de programación más populares y versátiles en el mundo del desarrollo web. Esto se debe, entre otros motivos, a que:

- Es el principal **lenguaje de navegador** que existe actualmente, esto significa que es un lenguaje de programación diseñado específicamente para ser ejecutado en un navegador web.

- Es el **lenguaje frontend predominante**. JavaScript es un pilar fundamental para la construcción de sitios web interactivos y dinámicos. Permite agregar funcionalidades como animaciones, realizar actualizaciones en tiempo real, validar de formularios, y agregar efectos visuales que permiten una experiencia de usuario más agradable en el navegador. Esto ha derivado en que las aplicaciones más poderosas como Netflix, Paypal, Facebook y Youtube hayan sido construidas con JavaScript.

- Javascript se ha expandido al desarrollo del lado del servidor mediante tecnologías como Node.js, lo cual facilita la transición entre frontend y backend de una aplicación web. Al utilizarse JS como lenguaje tanto en el frontend como en el backend,  se facilita el trabajo del desarrollador, ya que la transición resulta más fluida, no hace falta aprender un nuevo lenguaje de programación y se trabaja de forma más ágil y eficiente, gracias a la posibilidad de reutilizar el código en ambas partes.

- Es un lenguaje accesible y compatible con una amplia gama de dispositivos y plataformas, esto se debe a que todos los navegadores web modernos admiten JavaScript.

- Existe una gran comunidad de desarrolladores de JavaScript en todo el mundo.  Estos comparten conocimientos, ofrecen soporte a través de foros, blogs y redes sociales, además de colaborar en proyectos de código abierto. 

- Además de esto, JavaScript cuenta con una gran cantidad de bibliotecas, frameworks y herramientas (como React, Angular, Express.js, etc) que hacen el proceso de desarrollo de aplicaciones más sencillo y ágil. Sin mencionar que JavaScript sigue evolucionando gracias a que es actualizado regularmente.

- JS ha sido diseñado para ser event-driven, esto significa que responde a eventos como clics y pulsaciones de teclas, por ejemplo. Esto hace que sea ideal a la hora de crear interactividad en páginas web. Además, permite automatizar tareas, por ejemplo, si tenemos que dar click a un botón en una página web de manera regular, JS sería capaz de realizar esta tarea por nosotros.

- Es un lenguaje de tipado dinámico, lo cuál lo hace sumamente flexible. Los leguajes de tipado dinámico permiten a las variables cambiar de tipo durante la ejecución, a diferencia de lenguajes de tipado estático como Java o C++. Esta flexibilidad resulta útil, pero también puede causar errores si no se maneja correctamente.

- El conocimiento de JavaScript es altamente demandado en la industria tecnológica, lo cual puede resultar en oportunidades laborales. Sin embargo, es importante resaltar que no basta saber sobre JavaScript, sino que seguramente sean necesarios otros conocimientos. 

- JavaScript es un lenguaje de programación muy versátil, por lo que es útil tanto para la creación de aplicaciones móviles, como de escritorio, y por lo que los conocimientos de JavaScript podrán ser aplicados una gran variedad de proyectos. 

- JavaScript es un lenguaje interpretado, lo que significa que se ejecuta directamente en el navegador del usuario o cliente. No necesita un proceso de compilación previo como otros lenguajes como por ejemplo Java, C y C++. La compilación es el proceso mediante el cual un programa escrito en un lenguaje de alto nivel se traduce y se convierte en un código de máquina u otro código de nivel más bajo que puede ser entendido y ejecutado por la computadora. JavaScript, sin embargo, se ejecuta línea por línea a medida que se lee, sin necesidad de ser previamente compilado a un lenguaje de máquina.

## ¿Cuáles son algunos tipos de datos JS?

En Javascript existen diferentes tipos de datos. Para empezar es importante saber qué los tipos de dato pueden ser primitivos o de referencia.

**Los tipos de datos primitivos:**

Estos se almacenan de forma directa en la ubicación de memoria que ha sido asignada a la variable que los contiene. Esto implica que el valor real de un tipo de dato primitivo resulta almacenado de forma sencilla y directa en la variable.  Gracias a ello, este tipo de datos es inmutable y cuando realizamos cambios en ellos, lo que en realidad se hace es crear uno nuevo.


**Los tipos de datos o valores de referencia:**

Los tipos de datos de referencia no almacenan el valor real directamente en la variable, sino que contienen una referencia a la ubicación de memoria donde se encuentra el objeto real. Por lo tanto, la variable contiene la ubicación en memoria del objeto, pero no el objeto en sí. En este caso se trata de un tipo de dato mutable, lo que significa que las operaciones realizadas en un tipo de dato de referencia afectarán al objeto real.

### Ejemplos de tipos de datos primitivos

Number

```js
let myAge = 70; 

```
String

```js
let myString = 'Hola'; 

```
Boolean

```js
let myBoolean =  true;
 
let myBooleanTwo = false;

```

Undefined

```js
let myUndefined; 

```

Null

```js
let myNull = null; 

```

Symbol

```js
let mySymbol = Symbol(`foo'); 

```

### Ejemplos de algunos tipos de datos de referencia
Array

```js
let myArray = [1, 2, 3, 4]; 

```

Object

```js
let myObject = { clave: "valor"} 

```

Function

```js
let myFunction = function() { 
    console.log("Hola, soy una función"); 
}; 

```

## ¿Cuáles son las tres funciones de String en JS?

En JS existen mútiples funciones que se pueden utilizar para manipular y trabajar con cadenas de texto de manera efectiva. Entre ellas se encuentran:

**charAt(index):**

Devuelve el carácter en la posición especificada por el índice.

```js
let text = "JavaScript";
console.log(text.charAt(3)); /* imprime “a”, que si bien es el cuarto elemento, se encuentra en el índice 3 */

```
**toUpperCase():**

Devuelve la cadena en mayúsculas.

```js
let lowercase = "hello"; 
console.log(lowercase.toUpperCase()); // Imprime: HELLO 

```

**toLowerCase():**

Devuelve la cadena en minúsculas. 


```js
let uppercase = "HELLO"; 
console.log(uppercase.toLowerCase()); // Imprime: hello 

```
## ¿Qué es un condicional?

Los condicionales en JavaScript son estructuras que permiten ejecutar código en función de si una determinada condición se cumple o no.


**En JavaScript, los condicionales más comunes son:**


**if:** 

Es el más básico de los condicionales y se usa para ejecutar un bloque de código si una condición es verdadera. 

### Ejemplo

```js

let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} 

```

**If-else:**

Es el tipo más común de condicional. Permite ejecutar un bloque de código si la condición es verdadera, y otro bloque si la condición es falsa. 

### Ejemplo

```js

let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

```

**else if:**

Se utiliza para comprobar condiciones adicionales si la primera condición no se cumple. 

### Ejemplo

```js

let numero = 4;
 
if (numero === 7) { 
    console.log("Número 7"); 
} else if (numero !== 10) {
    console.log("Otro número"); 
} 

```
**else:** 

Se ejecuta si ninguna de las condiciones anteriores es verdadera. 

### Ejemplo

```js
let edad = 81; 

if (edad < 18) { 
    console.log("No puedes conducir"); 
} else if (edad > 80) {
    console.log("No deberías donducir"); 
} else { 
    console.log("puedes conducir"); 
};

```

**switch:**

Sirve para evaluar una expresión y ejecutar diferentes bloques de código según se cumple o no la condición de cada caso propuesto. Si la primera condición se cumple, se ejecuta el comportamiento que hayamos determinado, si no se evalúa el siguiente caso, y así sucesivamente.

### Ejemplo

```js

var tipoDeDato = true;

switch (typeof tipoDeDato) {
  case "string":
    console.log("Es una cadena de texto");
    break;
  case "number":
    console.log("Es un numero");
    break;
  case "boolean":
    console.log("Es un booleano");
    break;
  default:
    console.log('No hay coincidencias');
}
```
### Explicación:

```
var tipoDeDato = true;
```
Defino la variable tipoDeDato con el valor booleano true

```
switch (typeof tipoDeDato) {
```

El switch evalúa el tipo de la variable tipoDeDato utilizando el operador typeof que devuelve una cadena de texto con el tipo de dato. 

```
  case "string": 
    console.log("Es una cadena de texto");
    break;
```

el switch verifica el tipo de dato, si es un string imprime y sale del bloque switch gracias a la instrucción break. De lo contrario, pasa a la siguiente condición y la verifica.

```
  case "number":
    console.log("Es un numero");
    break;
```

el switch verifica el tipo de dato, si es un número imprime y sale del bloque switch gracias a la instrucción break. De lo contrario, pasa a la siguiente condición y la verifica.*/

```
  case "boolean":
    console.log("Es un booleano");
    break;
```

el switch verifica el tipo de dato, si es un booleano imprime y sale del bloque switch gracias a la instrucción break. De lo contrario, pasa imprime el mensaje establecido como default.

```
  default:
    console.log('No hay coincidencias');
}
```

## ¿Qué es un operador ternario?

Un operador ternario en JavaScript es un operador condicional.

**Este operador ternario requiere tres elementos:**

- Una condición escrita entre paréntesis y seguida de un signo de interrogación “?”

- Una expresión que se ejecutará si la condición es verdadera, seguida de dos puntos “:”

- y, por último, una expresión que se ejecutará si la condición es falsa. 

Estos elemento se almacenarán en una variable.


**La sintaxis del operador ternario es la siguiente:**

variable = (condicion) ? siSeCumple : siNoseCumple;

### Ejemplo

```js 
let edad = 20; 

let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad"; 

console.log(mensaje); // Imprime: Eres mayor de edad 
```

**Por qué se utiliza el operador ternario y que tener en cuenta**

El operador ternario permite escribir de manera concisa declaraciones condicionales, lo que puede hacer que el código sea más claro y fácil de entender en comparación con un **if...else** tradicional. Además, al ser más compacto puede resultar más eficiente que un bloque **if...else** en situaciones simples, gracias a que se escribe en una única línea. 

Sin embargo, el operador ternario es más útil para decisiones simples y cortas, ya que en situaciones con lógica más compleja o que contienen múltiples condiciones es mejor utilizar un condicional tradicional. Además, debemos tener en cuenta que este operador es menos explícito en cuanto a la estructura condicional que estamos utilizando, lo cual podría dificultar la comprensión del código para personas que no estén familiarizadas con el mismo. 

## ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

### Declaración de función:

Podría decirse que una **declaración de función** corresponde a una función tradicional, es decir, la que se define utilizando la palabra clave function seguida del nombre de la función y su cuerpo entre llaves. Estas funciones poseen un identificador propio (el nombre que le asignamos) que permite llamar a la función dentro y fuera de su alcance. Además, estas funciones son afectadas por *hoisting*. 

**Hoisting** es un comportamiento de JS en que las variables y funciones son movidas al inicio del código antes de que este se ejecute, lo cual puede provocar comportamientos inesperados. El hosting ocurre porque JS primero registra todas las declaraciones de variables y funciones en la memoria, antes de ejecutar el código línea por línea. Sabiendo esto, es importante preverlo y declarar nuestras variables antes de la función, también es útil utilizar expresiones de función, dado que estas no se ven afectadas.

Las declaraciones de funciones son útiles porque permiten la reutilización del código, ya que pueden ser definidas una vez y reutilizadas en múltiples partes del código. Estas  permiten encapsular bloques de código, facilitando su comprensión y haciendo que tengan su propio ámbito(scope). Además, a diferencia de las expresiones regulares, estas aceptan parámetros, lo que las hace más versátiles, ya que pueden usarse con diversos argumentos.

### Ejemplo

```js
function saludar(nombre) {
    return "¡Hola, " + nombre + "!";
}


saludar('Ana')

```
### Explicación:
```
function saludar(nombre) { 
```

declaro la función de nombre “saludar” y le paso como parámetro “nombre”

```
    return "¡Hola, " + nombre + "!";
}
```

Establezco lo que quiero que retorne, en este caso con el parámetro nombre

```
saludar('Ana') 
```

Llamo a la función “saludar” pasando “Ana” como argumento
Las expresiones de función suelen ser funciones anónimas que se asignan a una variable, además estas funciones pueden ser usadas como argumentos de otras funciones y no se ven afectadas por el hoisting.

### Expresiones de función:

Por otra parte, las **expresiones de función** tienen la ventaja de que permiten realizar operaciones que requerirían varias líneas de código de manera más compacta y legible.


```js

let saludar = function(nombre) { 
    return "¡Hola, " + nombre + "!";
}


saludar('Ana')

```

## ¿Qué es la palabra clave "this" en JS?

La palabra “this” en JS es una palabra clave cuyo significado varía según el contexto en el que se defina. Esto significa que “this” hace referencia al objeto que se está ejecutando en un momento dado. Dentro de un objeto hace referencia a una cosa, mientras que en otro objeto hace referencia a otra. 

## Ejemplo


```js
let alumno = {  //Aquí definimos el objeto “alumno” al que propiedades
    nombre: 'Juan', //nombre, con valor “Juan”
    apellido: 'Pérez', //apellido, con valor “Perez”
    nombreCompleto: function() { 
        return this.nombre + " " + this.apellido;  /*nombreCompleto, una función que devuelve el nombre completo del alumno */
    } 
}; 

alumno.nombreCompleto(); /* llamada que ejecuta la función  nombreCompleto del objeto alumno y devuelve  “Juan Perez”*/
```

Dentro del objeto ''alumno'' hemos creado la propiedad ''nombreCompleto'', cuyo valor es una función anónima que devuelve el nombre completo del alumno tras concatenar ''this.nombre'' (que se refiere al atributo nombre del objeto alumno en este contexto) con un espacio y ''this.apellido'' (que se refiere al atributo apellido del objeto alumno en este contexto). Por lo tanto ''this.nombre '' sería equivalente a ''objeto.apellido'' o ''alumno.apellido'' en este caso.


