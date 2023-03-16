# QUIZ - PROYECTO JAVASCRIPT

En este sitio web podrás encontrar un Quiz realizado con JavaScript. En la primera página tenemos un mensaje de bienvenida que te permite acceder al Quiz con el botón inferior. También podrás encontrar un gráfico que representa un historial de los últimos diez Quiz realizados.
El Quiz está formado por diez preguntas totalmente aleatorias cada vez, extraídas de un API relacionado con el tema de videojuegos. Cada pregunta tiene cuatro posibles respuestas de las cuales una solo es la verdadera. El Quiz está automatizado, tras responder a una pregunta te mostrará las respuestas para saber si has acertado, seguidamente pasará a la siguiente pregunta. Tras finalizar el Quiz podrás consultar el número de preguntas que has acertado.

## Comenzando 🚀

Para poder desplegar el proyecto correctamente, desde GitHub y con el acceso correspondiente al repositorio de la web, clonar el repositorio en su ordenador.

## Ejecutando Bootstrap ⌨️

Para poder ejecutar Bootstrap, debemos instalarlo en nuestro HTML dentro del <head>.
jsDelivr es un CDN (red de distribución de contenidos). Es un grupo de servidores distribuidos en muchas ubicaciones. Estos servidores almacenan copias duplicadas de datos para que los servidores puedan cumplir con las solicitudes de datos en función de qué servidores están más cerca de los respectivos usuarios finales.

Omita la descarga con jsDelivr para entregar la versión en caché de CSS y JS compilados de Bootstrap a su proyecto.

Si está utilizando JavaScript compilado, no olvide incluir versiones CDN de jQuery y Popper js antes.

Nosotros hemos utilizado:

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossorigin="anonymous" defer></script>

Es importante destacar, que la etiqueta "defer" permite colocar los script en el head sin que cree conflicto con la lectura de Javascript y todo el contenido del body, permite crear una asincronía que hará que sea lo último que se lea independientemente de su posición en el head.

## Ejecutando JavaScript ⌨️

Dentro del <head> del HTML introducimos <script src="scripts/......js"></script>
Con la etiqueta "defer" podemos colocarlo en el head por lo ya explicado anteriormente y vinculamos el archivo .js al archivo .html.

En los códigos JavaScript encontramos funciones del tipo:

- const response = await axios.get(API_URL); --- (Llamamos una API que nos permite utilizar información almacenada en el servidor)

- homeLink.addEventListener("click", showQuiz); --- (Un evento que nos permite navegar entre páginas con el modelo SPA).

- De condición (if, else if, else) --- (Se realizan ciertas acciones cuando se cumplen las condiciones o no se cumplen).

- localStorage.setItem("scores", JSON.stringify(totalScores)); --- (Subir el score del Quiz al Local Storage haya o no contenido previo en la array de scores, para crear un historial y posteriormente utilizarla en combinación con el código inferior).

- totalScores = JSON.parse(localStorage.getItem("scores")) || []; --- (Acceder a la información del local storage y consultar el histórico de scores).

- setTimeout(function ()) {}; --- (Realizar acciones una vez transcurrido el tiempo definido, automatiza el test para pasar a la siguiente pregunta).

- button.disabled = true; --- (Bloquea los botones de respuesta una vez se ha seleccionado una de las opciones).

- function shuffleArray(array) {}; --- (Función que coge las cuatro posibles respuestas, las mezcla, y las devuelve en un array con posición aleatoria).

- const myGrafic = new Chart(grafic, {}); --- (Variable que se utiliza para dibujar un gráfico).

## Ejecutando Axios ⌨️

<script src="https://unpkg.com/axios/dist/axios.min.js" defer></script> --- (Código que utilizamos para instalar Axios).
Axios es una librería JavaScript que puede ejecutarse en el navegador y que nos permite hacer sencillas las operaciones como cliente HTTP.

## Ejecutando ChartJS - Gráfico ⌨️

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js" defer></script> --- (Código que utilizamos para instalar ChartJs). ChartJs es una libreria que proporciona un modelo de graficos, el cual podemos implementar en nuestros proyectos de web.

<canvas id="grafica" class="mt-3" height="300" width="300"></canvas> --- (En el código HTML especificaremos donde aparecerá la gráfica dentro de la etiqueta <canvas>).

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [*VISUAL STUDIO CODE*](https://code.visualstudio.com/) - Code editor used (Version: 1.75.1)
* [*Live Server*](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Manejador de dependencias
* [*GitHub*](https://github.com/) - Almacenamiento de repositorios
* [*Bootstrap*](https://getbootstrap.com/) - framework front end CSS y Javascript (Usada esta web para sus componentes)
* [*Axios*](https://axios-http.com/es/docs/intro) - librería JavaScript (Usada para poder acceder a la API de https://opentdb.com/)
* [*ChartJS*](https://www.chartjs.org/) - biblioteca JavaScript (Usada para la visualización de datos.)


## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/GuilleSoler87/Quiz_JavaScript.git).

## Autores ✒️

* **Guillermo Soler Fernández** - *Proyecto Quiz - JavaScript* - [GuilleSoler87](https://github.com/GuilleSoler87)

* **Volodymyr Kolomiiets** - *Proyecto Quiz - JavaScript* - [VolodymyrKolomiets](https://github.com/VolodymyrKolomiets)


## Licencia 📄

Este proyecto actualmente no tiene licencia. Puede usarse todo su contenido sin el requisito de la misma.


