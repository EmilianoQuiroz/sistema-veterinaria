/*
JAVASCRIPT
*/
//--- ¿QUÉ ES? ---//
/*
JavaScript es el lenguaje de programación web por excelencia. 
Decimos que se trata de un lenguaje de programación interpretado. 
Su uso más conocido es del lado del cliente (client-side), corriendo en el navegador web, permite mejoras en la interfaz de usuario.
React está desarrollado en JS, por eso lo llamamos reactjs.
*/

//--- INCLUIR EL ARCHIVO JS EN NUESTRO HTML ---//
/*
Esto debe ser incluido en el head del html. También podemos introducir nuestro código javascript dentro de la etiqueta <script></script>
*/

//--- TIPOS DE EJECUCIÓN ---//
/*
Ejecución directa
Es el método de ejecución de scripts más básico. En este caso se incluyen las instrucciones dentro de la etiqueta <script>, y cuando el navegador lee la página y encuentra un script
va interpretando las líneas de código y las va ejecutando una después de otra.

Respuesta a un evento
Los eventos son acciones que realiza el usuario. Los programas como Javascript están preparados para atrapar determinadas acciones realizadas, en este caso sobre la página,
y realizar acciones como respuesta.
Por ejemplo la pulsación de un botón, el movimiento del ratón o la selección de texto de la página.
*/

//--- VARIABLES ---//
/*
La manera estándar de JS de almacenar valores en memoria es a través del uso de variables.

var nombre = sasa
let nombre = soso

DEFINIR UNA CONSTANTE
Desde ES6 (ECMA 2015) podemos definir una constante con la palabra reservada const
Las const no pueden cambiar la referencia con la que fueron inicializadas.
*/

//--- DOM ---//
/*
DOM (Document Object Model o modelo de objetos del documento) nos sirve para acceder a cualquiera de los componentes que hay dentro de una página. 
Por medio del DOM podremos controlar al navegador en general y a los distintos elementos que se encuentran en la página.
*/

//--- LET ---//
/*
Podemos utilizar let en lugar de var a la hora de declarar una variable, cuando queremos que ésta sólo sea accedida de manera local en determinado ámbito. Por ejemplo:
*/

//--- FUNCIÓN ARROW ---//
/*
En ambos ejemplos se sustituye el uso de la palabra reservada function, dando simplicidad al código.
(parametro1,parametro2,…,parámetro n) => {Definición de la función}
*/

//--- UN MUNDO DE API’S ---//
/*
Todo depende del contexto del trabajo y el target de usuarios / plataformas.
Puedo emocionarme para luego enterarme que algunos usuarios no pueden utilizar la experiencia.
Sugerencia: https://caniuse.com
Intenta chequear si puedes utilizar ES6 en cualquier navegador
*/

//--- EMPLATE STRINGS ---//
/*
Con ES6 podemos interpolar strings de una forma más sencilla, a como estábamos haciendo hasta ahora. Miremos el ejemplo:

let nombre = Santiago
let apellido = Quiroz

alert(`Mi nombre es ${nombre} y mi apellido es ${apellido}`)
*/


//--- VALORES POR DEFECTO: ANTES Y HOY ---//
/*
Antes teníamos que comprobar si la variable ya tenía un valor, para dar una respuesta por defecto.
En cambio hoy, podemos usar otra sintaxis, aunque tenga algunas diferencias de comportamiento.

function saludarA(nombre) {
    console.log(nombre|| 'coder'")
}

En muchas convenciones null es considerado como algo explícito de un valor que es la nada. Mientras que al undefined se lo considera como un valor que aún no se puede inferir que es, cuando no pasamos un parámetro será undefined (indefinido)

*/


//--- MÓDULOS ---//
/*
hora JavaScript se empieza a parecer a lenguajes como Python o Ruby. Llamamos a las funciones desde los propios scripts, sin tener que importarlos en el HTML si usamos JavaScript en el navegador.

module 'person'{
    export function hello(nombre){
        return nombre;
    }
}

Y para importar otro fichero: 
import {hello} from 'person';
var app {
    foo: function() {
        hello('Nick')
    }
}
export app;
*/

//--- REACT JS: LOS INICIOS ---//
/*
React JS fue creada por Jordan Walke, un ingeniero de software en Facebook, inspirado por los problemas que tenía la compañía con el mantenimiento del código de los anuncios dentro de su plataforma. 
React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencilla, declarativa y fácil de combinar.
¿Cómo llega React a la performance que tanta fama le trae?

Hablemos de tres conceptos:
Virtual DOM vs React Fiber y la Reconciliación

El acceso indiscriminado al DOM es caro, entonces se requirió encontrar una manera de realizarlo de la manera más óptima posible.

En vez de aplicar uno a uno los cambios en los cinco nodos, React procesa este resultado en una memoria. Calcula el área de impacto y determina la menor cantidad de movimientos de modo heurístico, por lo que también sabe donde no pueden haber ocurrido cambios.

Segunda premisa: Flujo de datos unidireccional
Para establecer esa seguridad, requiere que los datos y los cambios idealmente se provoquen de una manera específica con dos características:

Unidireccionalidad / De arriba hacia abajo
*/

//--- RESUMIENDO: ¿QUÉ ES EL VIRTUAL DOM? ---//
/*
Es un patrón de comportamiento, y React lo implementa con una tecnología llamada “Fiber”.

En sí resulta ser todo lo que React sabe de tu aplicación y cada nodo o fibra.

Esto es básicamente lo que React hace con el Virtual DOM: una representación virtual de la UI que se mantiene en memoria y en sincronía “reconciliado” con el DOM “real”.

● En primer lugar, React ejecuta un algoritmo de “diffing”
que identifica lo que ha cambiado.
● El segundo paso es la reconciliación, donde se actualiza el DOM con los resultados de diff.

React se encarga de todo esto, nosotros solo aprenderemos a ayudarlo
*/

//--- ¿QUÉ ES NODE? ---//
/*
Node.js es un entorno de ejecución de JavaScript, que le permite al código en js ser ejecutado en nuestra computadora.

Podemos darle a node un archivo de js y éste puede ejecutarlo, y darle acceso a recursos de nuestra computadora (IO, Network, Etc).

El “Node” de java es conocido como la JVM

Recientemente ha nacido un nuevo entorno de ejecución que no es node sino Deno (no-de = de-no)

Creado por uno de los padres de node.js -Ryan Dahl- también permite ejecución de código js y typescript pero con una nueva perspectiva en seguridad.
*/

//--- NODE JS ¿QUÉ ES NPM? ---//
/*
NODE PACKAGER MANAGER / NPM

Cuando usamos Node.js, rápidamente tenemos que instalar módulos nuevos (librerías), ya que al ser un sistema fuertemente modular viene prácticamente “vacío”. 
Por lo tanto, para utilizar una funcionalidad de alguna librería publicada, deberemos instalar módulos adicionales. 
Esta operación se realiza de forma muy sencilla con la herramienta npm 
(Node Package Manager).
*/

//--- ESTA HERRAMIENTA FUNCIONA DE DOS FORMAS: ---//
/*
Como un repositorio ampliamente utilizado para la publicación de proyectos Node.js de código abierto.

Como una herramienta de línea de comandos. Esta utilidad ayuda a instalar y desinstalar paquetes, gestionar versiones y gestionar dependencias necesarias para ejecutar un proyecto.
*/


//--- INSTALACIÓN DE NODE JS ---//
/*
Para poder instalar una aplicación de React JS desde el CLI, debemos previamente instalar Node.js.
1-Ingresar a: https://nodejs.org/en
2-Descargar la última versión de Node.js
3-Ejecutar el archivo descargado y ejecutar los siguientes pasos
*/

//--- CREAR UNA APLICACIÓN UTILIZANDO EL CLI ---//
/*
¿QUÉ ES CLI?
La interfaz de línea de comandos o interfaz de línea de órdenes, es un método que permite a los usuarios dar instrucciones a algún programa informático por medio de una línea de texto simple.

React tiene su propia CLI, pero actualmente solo admite la creación de una aplicación (create-react-app).

*/