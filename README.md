# Pokemon Go. Pokedex-Kanto

  

## Contexto

  
  

El inicio de este trabajo se desarrolla en el contexto del Bootcamp de [Laboratoria](https://www.laboratoria.la/). Desafío Data Lovers.

  

**Cuándo:** La duración para el desarrollo del proyecto fue de 3 semanas, con fecha de entrega el Viernes 11 de enero del 2019.

  

**Problema/meta general:** Construir una página web para visualizar un conjunto (set) de datos que se adecúe a lo que descubramos que el usuario necesita. Un pokedex.


  <p align="center">
  <img src='https://lh4.googleusercontent.com/P39bT9H3odkUtECZ1hC-52LyrzXiQTsgOxbnaOgyz-KbcBw5qn_wJRI7aU4G4iX26g8Y_VFw-ribwu9RdClov2-RFgrC0zvlpLu656FYV8zacfnAyvA3e4ZDJaMYG2WgecRveaC-'  />
</p>

El Pokédex en el mundo ficticio de Pokémon, es una enciclopedia portátil de alta tecnología que los Entrenadores Pokémon llevan consigo para registrar las fichas de todas las diversas especies Pokémon con las que se encuentran durante su viaje como entrenadores (Fuente: [Wikipedia).](https://es.wikipedia.org/wiki/Pok%C3%A9dex)

  

**Equipo:** Este proyecto se basa en el trabajo en equipos conformados por duplas, en nuestro caso, sin conocer el juego Pokemon Go, sin embargo nos decidimos por este proyecto, porque nos pareció poder comprender mejor quién iba a ser el usuario de nuestro futuro producto, lo cual nos pareció lo más relevante en ese momento.

  

**Herramientas utilizadas:**

  
<p align="center">
  <img src='http://subirimagen.me/uploads/20190108122651.png'  />
</p>


**Resultados y entregas:**

- Un reporte con las conclusiones clave respecto al trabajo con los usuarios y los patrones de interacción.

- Una página web que permita visualizar la data, filtrarla, ordenarla y hacer algún cálculo agregado.

  

**Status:** En proceso.

  

  

## Etapa 1 - Definición del usuario.

  
  

Comenzamos con una búsqueda online para conocer lo que hay disponible para los usuarios respecto a aplicaciones que den información sobre Pokemon Go. Encontramos dos sitios principales [Pokedex.com](https://www.pokemon.com/es/pokedex/) y [Pokedex.org](https://pokedex.org/).

  <p align="center">
  <img src='https://lh3.googleusercontent.com/btYuPIJ4hYYTh8Cqc30RjUT9_IyM4eWZd1A5mXrEv3DkOy1C9UJWsD9J2Yahg7qoAS5zi53tyce8'  />
</p>


  

Ambos proporcionan una idea de nuestro objetivo en cuanto al modo de presentar la información, de realizar búsquedas y filtros de los distintos pokémon.

  

A partir de esta búsqueda inicial, pasamos a acercamos a varias compañeras que son jugadoras de Pokémon Go, para conocer de qué manera nuestra aplicación les podría servir. Conversamos con 3 compañeras, y realizamos preguntas como:

  

2.- **¿Qué información es relevante conocer para ti?** (peso, altura, debilidad, eggs, etc. respecto a lo disponible en la base de datos proporcionada para el desafío).

  

3.- **¿Para qué necesitarías esta información?** (cuándo, cómo, por qué)

  

  

Nos dimos cuenta que en solo esta pequeña muestra de entrevistadas habían algunas diferencias, ya que por ejemplo para algunas era relevante tener información de las debilidades de los Pokemones que aparecen en la modalidad "Excursiones" para ir mejor preparadas a dicho evento, otras sin embargo al ser jugadoras con experiencia y mas avanzadas no le es tan relevante dicha información y esto lo atribuimos a que por el tiempo que llevan jugando la mayoría de sus Pokémones poseen gran nivel, es decir aquellas con más experiencia y conocimiento del juego, parecen requerir menos información de los pokemones, que sería provista por nuestra aplicación, lo que ayudó a definir mejor a nuestro usuario:

  

***Definición del usuario***

  

> Un jugador novato de Pokemon Go, que quiera conocer/ informarse de los pokemones de la Región de Kanto para mejorar como entrenador y convertirse en MAESTRO POKÉMON,

  

********

## Historias de Usuario

  

### Definitions of done

Aqui desarrollamos las historias de usuario de nuestro producto.

  

1. Enunciado: "Yo como usuario de la aplicación"

  

Quiero filtrar el listado de Pokemones por elemento, para que sea más fácil y rápido encontrar el pokemon que busco

  

Criterios de Aceptación:

  

- [ ] Quiero que el filtrado se muestre en una lista desplegable

- [ ] Quiero que en la búsqueda aparezca el nombre y la foto del pokemon

- [ ] Quiero que el listado tenga colores relacionados al tipo de elemento del pokemon

- [ ] Quiero que la página sea visible en el móvil y en mi computador.

- [ ] Quiero poder darle clic a la tarjeta del Pokémon y ver un modal con más información.

  
  

  

2. Enunciado: "Yo como usuario de la aplicación"

  

Quiero ordenar el listado de pokemones: Alfabéticamente (A-Z, y/o Z-A) y por número de ID (Mayor a menor , y/o menor a mayor). Para que sea más fácil y rápido encontrar el pokemon que busco.

  

Criterios de Aceptación:

  

- [ ] Quiero elegir la opción de orden en una lista desplegable

- [ ] Quiero ordenar de la A a la Z

- [ ] Quiero ordenar de la Z a la A

- [ ] Quiero ordenar el id número de forma ascendente

- [ ] Quiero ordenar el id número de forma descendente

- [ ] Quiero poder darle clic a la tarjeta del Pokémon y ver un modal con más información.

  

3. Enunciado: "Yo como usuario de la aplicación"

Quiero ver la información detallada del pokemon para estar más informado de sus características.

  

Criterios de Aceptación:

  

- [ ] Quiero que se abra una ventana emergente con información detallada del pokemon

- [ ] Quiero poder cerrar la ventana al hacer clic fuera de ella

- [ ] Quiero poder cerrar la ventana al hacer clic en una X

  

4.Enunciado: "Yo como usuario de la aplicación"

Quiero saber la cantidad de Pokemones que existe de cada elemento para saber qué cantidad existe de cada uno y cuantos me faltan por atrapar.

  

Criterios de Aceptación:

- [ ] Quiero poder ver información estadística adicional del Pokemon que seleccione.

  

  

#### User Flowchart

  

Luego de tener más claro quién sería nuestro usuario, comenzamos el proceso de pensar en el flujo del usuario al usar la aplicación. Así creamos un prototipo del flujo básico del usuario, el flujo de filtrado, de ordenado (alfabeto o numérico), búsqueda, y estadísticas.

  
  

Flujo de Usuario

  

![](http://subirimagen.me/uploads/20190108105647.jpg)

  

  

## Stage 2 - Prototipado baja definición

  

El paso siguiente corresponde al prototipado de baja definición, aquí comenzamos ideando e iterando sobre cómo debería verse la aplicación, y qué elementos debería contener para llegar a nuestra meta.

  
  

### Workflow y Wireframes

Primeras ideas
   <p align="center"> 
   <img src='http://subirimagen.me/uploads/20190108130140.png'  /> 

Organizando ideas
   </p> 
 <p align="center">
  <img src='http://subirimagen.me/uploads/20190108131741.png'  />
</p> 



  

  

En esta etapa del trabajo tuvimos un espacio dentro del Bootcamp para compartir el trabajo entre las parejas de alumnas, así tuvimos la oportunidad de recibir feedback del prototipo inicial, así como de ver los trabajos de otras alumnas, de tal manera de mejorar la calidad de los trabajos e incorporar ideas.

  

- Centrarnos en lo más relevante de este desafío (filtrar, ordenar y manipular la data) para que nuestra aplicación sea un MVP (Producto Mínimo Viable), por esa razón y gracias al feedback inmediato de nuestras compañeras dejamos la casilla de búsqueda como una tarea a futuro.

De este modo, este insumo nos sirvió para modificar nuestro prototipo inicial y convertirlo en el prototipo de alta fidelidad,

  

  

En esta etapa también decidimos incorporar la herramienta de Boostrap, como plantilla para la página, esto fue un desafío personal, para aprender una nueva herramienta, así como una mejor presentación de la información. Para esto nos decidimos por el template [La Casa](http://pixelhint.com/demo/la_casa/), ya que era la que más cercana estaba al prototipado de baja definición que nos habíamos propuesto en esta etapa. De este modo modificamos la plantilla (HTML y CSS). Sin embargo, avanzando en el proyecto nos dimos cuenta que en realidad este template entorpecía nuestro trabajo más que aligerarlo, ya que habían muchos elementos que no utilizamos, y otros que nos demoraba tiempo en comprender, por lo que a la segunda semana decidimos eliminarlo, y trabajar nuestra propia plantilla.

  

## Planificación

  

Realizamos una planificación al comienzo del proyecto y volvimos a él cada dos o tres días. Utilizamos algunas herramientas digitales como [Trello](https://trello.com/b/1uJrFw7s/proyecto-2), y [Project](https://github.com/Paulinacm/scl-2018-12-bc-core-data-lovers/projects) de github.

Y analógicamente en el tablero proporcionado en Laboratoria.

  
  

aqui fotos de los tableros

  
  

  

## Stage 3 - Prototipado alta definición

  

Esta es la segunda Iteración, la primera no fue guardada previo al cambio, pero era bastante similar, únicamente modificamos los colores, desde tonos oscuros (de azul marino para el fondo, a blanco y azulino).

  

Aquí comenzamos a definir más claramente lo que queríamos lograr, esta vez cambiando los colores por unos más claros.

  

  

Versión Computador Escritorio

  
 <p align="center"> 
   <img src='https://lh3.googleusercontent.com/NClgGDo6Mqmhaua3efY1pRADbPQ5qZJJ02ASL6TsOMwW5Xi4uMQYNu9Axk9CAZsauhdd2it_Q0t9b1y_c_GEr6nKWy5WDubTkxjv2xaQvSQYNFHOy54x5HMjEKFMN8WQ7ElfpeVa'  /> 


  

Versión Celular

   <p align="center"> 
   <img src='https://lh3.googleusercontent.com/ZZEcpKtOdRGPOJOBWVD5pVmR6SXf5Vq1KzOsB9ZwTdmsKBuvIic61irG2PPfD6oduVreZg8EIxv5rW5Nt31LRZULUjroDCUEgz2SOtMCAmiv7lYLZX1Df1ANLN4op36PXSG0zPQX'  /> 


   <p align="center"> 
   <img src='https://lh3.googleusercontent.com/tyUR1n_qPKQocYbX8JlqsxDQFC2kNciOdHfd-lryo5KnkXW95Q6lowOoGxw9wbSp0il15cNrD5Fv'  /> 



## Stage 4 - Testeos con usuarios

  ![enter image description here](https://lh3.googleusercontent.com/JJcGwZqoqdK4Z0ouCgqyvDoHejbjhsyiaXFIqi3F-tJ08sEiLmfiVsVmNY3JZyIe9thYgmAK-eZZ  "UserTesting")

  

**Momentos de testeo con usuarios**

Para testear el demo de la aplicación, a los usuarios se les indico una tarea a realizar interactuando con el prototipo y luego una pequeña entrevista para recopilar información.

La tarea otorgada a los usuarios fue la siguiente:

>Imagina que Necesitas conocer las características de cierto Pokémon de la Región de Kanto, Sabes que el Pokémon es de tipo Grass y su número de identificación es el # 001, para buscarlo vas a usar la siguiente aplicación.
Filtraras por ELEMENTO de tipo GRASS
Y cuando veas el listado buscaras el Pokémon # 001 y lo seleccionaras para ver sus características y evoluciones.

**Entrevistas**

Finalmente, se les hicieron algunas preguntas acerca de su satisfacción, usabilidad y utilidad (cómo fue la experiencia, que cambiarian, sacarían, mejorarían).

Estas fueron algunas de las respuestas que usamos para ir mejorando el prototipo:

- Pude Encontrar el Pokémon, pero no me había dado cuenta que uno podía bajar y ver un listado de Pokémon, es tan grande la imagen del inicio que solo se ve ella y el menú de filtrar.

- Se ven muy grandes los pokemones en pantalla escritorio y pienso que para ir cargando mas pokemones con el boton "Cargar más" seria muy tedioso ya que solo va mostrando de seis en seis.

- La pagina no indica en ningun lado que los pokemones son de la Region de Kanto.

- La portada se me hace muy simple solo tiene el logo Pokemón y una imagen de fondo. Quizás podrían colocar una  imagen de algún Pokemon.



A partir de lo anterior salieron nuevas ideas para hacer modificaciones:

  

- Creación de una portada con imagen y lugar de la región.

- Reducir el largo de la portada o agregar un indicador (Botón o flecha) que indique que abajo hay mas información.

- Sacar el botón "Cargar más" y que los Pokemones se muestren todos automáticamente y en un menor tamaño.

Estas son algunas imágenes de los cambios realizados:
![](http://subirimagen.me/uploads/20190108141228.jpg)
A la imagen de fondo se le aplico un mayor desenfoque para que la mirada del usuario se centre en el logo. Se creó la imagen de "KANTO" simulando el logo principal y añadimos un Pokémon para llamar la atención y una imagen png de pasto para simular que el Pokémon y el logo estuvieran en un plano principal.
_____________

![](http://subirimagen.me/uploads/20190108143136.jpg)
Se le agrego un conteo de la cantidad de pokemones que existe de cada elemento.
 _____________________




  




  

### Storyboard  —  Usando la App

  

Creamos un storyboard para describir la experiencia de un usuario de la aplicación Pokedex. Mediante esta estrategia se puede explorar el producto en un contexto amplio, como si fuera parte de una narrativa mayor. Es una forma económica y efectiva de capturar, relacionar y explorar la aplicación en el mundo real.

  

insertar aqui storyboard

  

  

### Paleta de Colores

Elegimos estos colores porque están todos asociados a Pokemon Go.

  ![](https://lh3.googleusercontent.com/PGqwjJkvauOfyHzOTiczm65nDvGzVF4O9fHHytEKXrDcQyawJlbUlXK86dryfI4LumXierdq2qcuOsDWcRjrT0IOgIn-DaM6jHiuXPTHPmKTgKgfsSIhLsUWPvwIK8MPp1wAnSIl)

  

### Tipografía

La tipografía elegida fue... debido a que

  

### Iconos & Ilustraciones

  
  

### Nombre & Logo

  

  

## Etapa 5 - El Diseño final

  
  

La meta del la aplicación web es crear un proceso rápido de resolución de búsqueda de un pokemon. La versión final esta disponible en versión [demo.](https://paulinacm.github.io/scl-2018-12-bc-core-data-lovers/)

  

**Pantalla inicio**

**Filtro**

**Ordenar**

**Estadisticas**

La experiencia del usuario esta basada en algunos pasos, donde cada pantalla aparece suficiente información para poder realizar un selección, búsqueda, ordenamiento de la información de los pokemon disponibles.

A partir de los testeos con usuarios y sus necesidades, se realizaron las decisiones respecto a los diseños finales de la aplicación.

  

## Conclusiones

  
  
  
  
  

### Aspectos a mejorar:

  

  

- List item

-

  

  

*********

  

  

[https://uxdesign.cc/ui-ux-case-study-a-step-by-step-guide-to-the-process-of-designing-a-pet-diet-app-d635b911b648](https://uxdesign.cc/ui-ux-case-study-a-step-by-step-guide-to-the-process-of-designing-a-pet-diet-app-d635b911b648)