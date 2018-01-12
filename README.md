# SagaMovie :movie_camera:
### Un sitio dedicado a las sagas de películas basadas en libros de ayer y hoy


#### ¿Qué es "SagaMovie"?
Es una aplicación web (responsive) que permite a los usuarios encontrar información sobre películas que forman parte de una saga y que, a la vez, se basan en libros. Es, entonces, una solución rápida para revisar toda la información sobre este tipo de sagas. Entendemos que la existencia de la discusión sobre qué es mejor si el libro o la película está lejos de terminar, por eso hemos unido la posibilidad de enlaces directos para comprar los libros en que se basan las películas. 
El site se plantea simple y limpio, sin llegar a ser minimalista pero lejos del abuso visual. Nos hemos centrado, sobre todo, en que sea una página apta para personas de todas las edades y con diversas habilidades en la navegación.  


#### ¿Por qué películas que son saga y que se basan en libros? (Problema) 

Partamos por el inicio y veamos unas cifras simples pero esclarecedoras: en el año 2017 fueron **estrenadas 412 películas**, en el mundo occidental, según el *"Instituto de la cinematografía y de las artes escénicas de España"*, las que tomarían cerca de 139 horas cronológicas a quien quisiera verlas todas, un 38% de su tiempo anual. Ello sin importar su género, idioma o país de procedencia, mucho menos la temática o trama de la historia en cuestión.    
  
Para el 2018 ya han sido anunciados 59 estrenos. Lo que corresponde a aproximadamente 60 días continuos. Aún no siendo la cifra definitiva en cantidad de estrenos para el año en curso.  
  
Si nos detenemos a pensar en ¿cómo categorizar las películas? o aun más importante ¿Cómo me entero de los próximos estrenos? La respuesta es fácil: según Google, existen alrededor de 6.750.000 sites con información sobre películas de distinta índole, algunos más actualizados que otros. Toda la información está recopilada, clasificada y dispuesta a quien desee conocerla. 
  
Específicamente, para aquellos que prefieren las películas con continuación (o sagas), existen numerosos rankings que guardan información para que el visitante pueda enterarse de aquello que busca. Y, en último caso, Google ofrece cerca de 473.000 resultados al hacer una búsqueda rápida de "películas+sagas". 
  
Entonces, ¿Cuál es el problema? Que ningún site, ningún ranking responde a la pregunta ¿Qué sagas basadas en libros o cómics existen?...  Y, es un tópico poco abordado, aun cuando se encuentra presente en distintos foros en páginas especializadas sobre película o libros. Es decir, existe un grupo de personas a quienes los rankings más tradicionales no satisfacen por completo. 
  
En ese contexto, nace "SagaMovie", que pretende organizar y categorizar todas aquellas películas que forman parte de un conjunto de producciones relacionadas de forma sucesiva y, que comparten un mundo en común y con personajes que evolucionan según pasa el tiempo.

Teniendo presente esto, se ha establecido que un target de usuarios que: 
* Tiene entre un rango de edad entre 17 y 35 años. 
* Son personas que tienen una inclinación hacia la lectura. 
* Personas que disfrutan del cine. 
* Personas que quieren saber sobre aquello que les atrae. 
  
Con esos elementos en mente se ha considerado que: 
* Al establecer un rango etario, nos ha permitido configurar un formato tipográfico y el tamaño de cada sección dentro del site. 
* Que tengan cierta inclinación nos ha invitado a incorporar un enlace para que puedan acceder a la compra de estos. Además, nos plantea la importancia de crear un site con un tópico tan específico como es sagas literarias llevadas a la gran pantalla. 
* Conocer que disfrutan del cine, nos permite configurar la información de manera dinámica, incorporando información variada sobre cada producción. 
* Entender que las personas quieren saber sobre aquello que les atrae, nos permite imaginar que también quieren compartir lo que ya conocen a otras personas, por eso hemos establecido la opción de "comentarios" en cada resultado de película. 
 

___


#### Equipo:
![Equipo](https://image.ibb.co/gRitZ6/team.png)


##### ¿Quiénes somos?

En SagaMovie somos un grupo de chicas apasionadas por el cine y la literatura, que piensamos que si bien la lectura nos muestra mundos imaginarios, el cine nos enseña la vida tal como es. Es por eso que nos mantenemos al margen de la discusión: "¿Qué es mejor si el libro o la película?", Porque sabemos que cada uno tiene su riqueza y su encanto ... ¡¡Y nosotras los amamos por igual!!

Además, estamos obsesionados con la evolución de nuestros personajes favoritos. No podemos dejar de pensar en ellos y disfrutar de verlos crecer, madurar, cambiar, simplemente vivir. Es por eso que disfrutamos ver la continuación de una película o "saga". Básicamente, estamos dedicadas a lo que nos encantan las películas de la saga y este site así lo comprueba.

##### ¿Cómo hemos trabajado?
El equipo en conjunto ha discutido largamente sobre el producto, valorando ideas y porqués basado en experiencias propias y de amigos, además de información de conocimiento público (internet). Una vez que decidimos la temática sobre la que trataría el site dimos paso a un design sprint (express), en que discutimos los elementos que eran necesarios que nuestra página tuviese para facilitar o mejorar la experiencia del user. Cada integrante genero un scketch de las distintas vistas, sobre las que votamos dividiendo el voto en "vista general" y en "elemento específico". Luego rehicimos el scketch seleccionando todos los detalles con mayor votación, lo que dio como resultado las siguientes imágenes:

###### Pantalla Principal:
![Pantalla Principal](https://image.ibb.co/cRaQe6/1_pantalla_principal.jpg)

###### Pantalla Secundaria:
![Pantalla Secundaria](https://image.ibb.co/kPRYZ6/IMG_20180111_080457.jpg)

El equipo de Front-End Developer ha estado a cargo de investigar, aprender y poner en uso la Api de OMDB para implementarla en la página, una página responsive, que ha sido diseña y maqueteada en conjunto por el equipo de UX Design. A la que se le ha incorporado una base de datos, a través la API de OMDB, vinculada a través de AJax y de cuyas funcionalidades están dadas desde jQuery. 
Cabe señalar que la organización de cada paso ha sido registrada en un trello, para que estuviese siempre accesible a todas, además de permitir que cada una fuese agregando y quitando elementos, según se avanzase.
![trello](https://image.ibb.co/eynwnR/trello.png)

##### Actualmente: 
Tenemos un producto mínimo viable que permite comprender las funcionalidades básicas del site y conocer visualmente la tipología y paleta de colores elegidos. Además de, en términos prácticos, revisar las funcionalidades con una selección de películas que cumplen con ambos requisitos: ser saga de películas y basarse en sagas de libros.

Sin duda, este no es el final del camino, sino el inicio. Esperamos tener, prontamente, el feedback de nuestros usuarios a través de testeos, lo que nos permitirá incorporar nuevas funcionalidades y elementos que den vida a cada rincón del site, siendo una invitación constante a visitarnos una y otra vez, una sugerencia permanente en reuniones sociales... pero sobre todo y ante todo, el site que en SagaMovie, soñamos tener...
  
    

___


        
          
![LogoSaga](https://image.ibb.co/j8KLE6/sagamovieblack.png)
