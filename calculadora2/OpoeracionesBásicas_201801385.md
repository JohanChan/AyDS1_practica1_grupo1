# Operaciones Básicas

## Yásmin Elisa Monterroso Escobedo

En la rama de operaciones básicas se realizan las operaciones de suma, resta, multiplicación y división, además de nroot y potencias.
La operación de lo inscrito en la calculadora es realizada por la librería jscalc. Esta fue instalada en npm usando el comando

```sh
npm install @mroutput/jscalc
```

La calculadora es importada y utilizada mediante la agregación de una string por cada botón oprimido en el diseño interactivo con el usuario. Del lado del código, esta se activa de la manera siguiente:

```sh
const Calculator = require("@mroutput/jscalc");

var c = new Calculator();
var ans = c.exec("5 + 3");//8
```

Algunos ejemplos de las operaciones aceptadas por la librería son las siguientes:

```sh
3 + 2 + 3 = 8
3 + 2 / 3 = 3.6666666666666665
3 + 2 * 3 = 9
100 * 10% = 10
5% + 2% = 0.07
3^2 = 9
3^(2*2) = 81
3^2*2 = 18
pi*2^2 = 12.566370614359172
```