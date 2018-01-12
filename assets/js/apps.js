$(document).ready(function () {
  // Inicialización menú hamburguesa
  $(".button-collapse").sideNav();

  // Inicialización código carrusel media
  $('.slider').slider();

  //carrusel
  $('.carousel').carousel();

  //modal
  $('.modal').modal();

  pasteMoreSeen();
  printFantasyMovies();
  printActionMovies();
  printSciFiMovies();

  // Estrellas de valoración
  $('#star-rating').starrating();
  $( '#star-rating' ).starrating({
    clearable : true,
    initialText: "Click to Rate",
    onClick : null,
    showText : true,
  });
});

var titleFld = $('.search');

/*función para acceder a la información de la api tomando el valor del
* texto ingresado en el input (búsqueda)
*/
titleFld.keyup(function searchMovie(e) {
  if(e.keyCode == 13){
    var titleText = titleFld.val();
    var url = "http://www.omdbapi.com/?apikey=276881c0&s=" + titleText;
    console.log(url);
    $.ajax({
      type: 'GET',
      url: url,
      success: renderMovies,
      error: renderError
    });
  }
});

//accediendo a data
console.log(data);


/*funciones para filtrar peliculas de la data segun categoria y mostrar en index.html
*agregando contenido dinamico en categorías
*
* primera funcion categoria fantasia
*/
function printFantasyMovies() {
  var imgCategory = $('#movieImgs1');
  var movies = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].genero === 'Fantasía, Familiar' || data[i].genero === 'Fantasía, Drama') {
      var id = data[i].id;
      imgCategory.append('<div class="center images col s3 m3 l3 xl3" style="height:20em; padding-top:1em;"> <img src="' + data[i].poster
                        + '" style="width:100%"> <h6 class="name" style="font-weight:bold; font-size:1em;">' + data[i].nombre +'</h6> <span style="font-size:1em;">'
                        + data[i].año + '</span> </div>');
    }
  }
  $('#categoria1').append('<h3>Fantasy</h3>');
  // funcion para redireccionar a pagina con info detallada
  $('.images').click(function () {
    window.location.href="inicial.html"
    //url que cambiará según el elemento al que se le haga click
    var newUrl = 'http://www.omdbapi.com/?i=' + id+ '&apikey=276881c0';

    console.log(newUrl);

    $.ajax({
      type: 'GET',
      url: newUrl,
      success: movieInfo,
      error: renderError
    });

  //imprimiendo información de la api en pantalla (inicial.html)
    function movieInfo(paste) {
      var poster= $('#poster');
      var datos= $('#datos');
      poster.append('<img src="' + paste.Poster + '" alt="poster">');
      datos.append('<h3>' + paste.Title + '</h3> <h4>Año:</h4><p>'
                  + paste.Year + '</p><h4>Duración: </h4><p>' + paste.Runtime
                  + '</p><h4>Director:</h4><p>' + paste.Director
                  + '</p><h4>Escritor: </h4><p>' + paste.Writer
                  + '</p><h4>Actores: </h4><p>' + paste.Actors
                  + '</p><a href="' + paste.Website + '">Website Oficial</a>');
    }
  });
}

//funcion categoria accion
function printActionMovies() {
  var imgCategory = $('#movieImgs2');
  for(var j = 0; j < data.length; j++) {
    if (data[j].genero === 'Fantasía, Acción') {
      var id = data[j].id;
      imgCategory.append('<div class="images col s3 m3 l3 xl3" style="height:20em; padding-top:1em;"> <img src="' + data[j].poster
                        + '" style="width:100%"> <h6 class="name" style="font-weight:bold; font-size:1em;">' + data[j].nombre +'</h6> <p style="font-size:1em;">'
                        + data[j].año + '</p> </div>');
    }
  }
  $('#categoria2').append('<h3>Action</h3>');
  // funcion para redireccionar a pagina con info detallada
  $('.images').click(function () {
    window.location.href="inicial.html"
    //url que cambiará según el elemento al que se le haga click
    var newUrl = 'http://www.omdbapi.com/?i=' + id+ '&apikey=276881c0';

    console.log(newUrl);

    $.ajax({
      type: 'GET',
      url: newUrl,
      success: movieInfo,
      error: renderError
    });

  //imprimiendo información de la api en pantalla (inicial.html)
    function movieInfo(paste) {
      var poster= $('#poster');
      var datos= $('#datos');
      poster.append('<img src="' + paste.Poster + '" alt="poster">');
      datos.append('<h3>' + paste.Title + '</h3> <h4>Año:</h4><p>'
                  + paste.Year + '</p><h4>Duración: </h4><p>' + paste.Runtime
                  + '</p><h4>Director:</h4><p>' + paste.Director
                  + '</p><h4>Escritor: </h4><p>' + paste.Writer
                  + '</p><h4>Actores: </h4><p>' + paste.Actors
                  + '</p><a href="' + paste.Website + '">Website Oficial</a>');
    }
  });
}

//funcion categoria ciencia ficcion
function printSciFiMovies() {
  var imgCategory = $('#movieImgs3');
  for(var k = 0; k < data.length; k++) {
    if (data[k].genero === 'Sci-Fi') {
      var id = data[k].id;
      imgCategory.append('<div class="images col s3 m3 l3 xl3" style="height:20em; padding-top:1em;"> <img src="' + data[k].poster
                        + '" style="width:100%"> <h6 class="name" style="font-weight:bold; font-size:1em;">' + data[k].nombre +'</h6> <p style="font-size:1em;">'
                        + data[k].año + '</p></div>');
    }
    console.log(id);
  }
  $('#categoria3').append('<h3>Sci Fi</h3>');
  // funcion para redireccionar a pagina con info detallada
  $('.images').click(function () {
    window.location.href="inicial.html"
    //url que cambiará según el elemento al que se le haga click
    var newUrl = 'http://www.omdbapi.com/?i=' + id+ '&apikey=276881c0';

    console.log(newUrl);

    $.ajax({
      type: 'GET',
      url: newUrl,
      success: movieInfo,
      error: renderError
    });

  //imprimiendo información de la api en pantalla (inicial.html)
    function movieInfo(paste) {
      var poster= $('#poster');
      var datos= $('#datos');
      poster.append('<img src="' + paste.Poster + '" alt="poster">');
      datos.append('<h3>' + paste.Title + '</h3> <h4>Año:</h4><p>'
                  + paste.Year + '</p><h4>Duración: </h4><p>' + paste.Runtime
                  + '</p><h4>Director:</h4><p>' + paste.Director
                  + '</p><h4>Escritor: </h4><p>' + paste.Writer
                  + '</p><h4>Actores: </h4><p>' + paste.Actors
                  + '</p><a href="' + paste.Website + '">Website Oficial</a>');
    }
  });
}

//obteniendo resultado de la busqueda imprimiendo en consola y pantalla (index.html)
function renderMovies (response) {
  console.log(response);
  var movies = response.Search;
  var resultsUl = $('#results');
  resultsUl.empty();
  for (var m in movies) {
    var movie = movies[m];
    var title = movie.Title;
    var imdbID = movie.imdbID;
    var poster = movie.Poster;

    console.log([title, imdbID, poster]);

    var moviesList = $('<div class="col l4 resultList"></div>');
    var moviePoster = $('<div style="margin-top:1em;">'
                      +'<img class="col l3" src="' + poster
                      + 'style="width:50%;"/>' + '</div>');
    moviesList.append(moviePoster);
    moviesList.append('<span class="col l9" style="margin-top:2.5em;">'
                      + title + '</span>');
    resultsUl.append(moviesList);
    titleFld.val('');
  }
}

  //obteniendo información (titulo de cada pelicula) para mostrar en inicial.html
  $('.resultList').click(function () {
    window.location.href="inicial.html"
    var str = $('.name').text();
    var replacedStr = str.split(' ').join('+');

    console.log(replacedStr);

    //url que cambiará según el elemento al que se le haga click
    var newUrl = 'http://www.omdbapi.com/?t=' + replacedStr + '&apikey=276881c0';

    console.log(newUrl);

    $.ajax({
      type: 'GET',
      url: newUrl,
      success: movieInfo,
      error: renderError
    });

  //imprimiendo información de la api en pantalla (inicial.html)
    function movieInfo(paste) {
      var poster= $('#poster');
      var datos= $('#datos');
      poster.append('<img src="' + paste.Poster + '" alt="poster">');
      datos.append('<h3>' + paste.Title + '</h3> <h4>Año:</h4><p>'
                  + paste.Year + '</p><h4>Duración: </h4><p>' + paste.Runtime
                  + '</p><h4>Director:</h4><p>' + paste.Director
                  + '</p><h4>Escritor: </h4><p>' + paste.Writer
                  + '</p><h4>Actores: </h4><p>' + paste.Actors
                  + '</p><a href="' + paste.Website + '">Website Oficial</a>');
    }
  });

//imprimir error en la consola
function renderError (error) {
  console.log(error);
}


/* agregando comentarios
* Primera función para click en boton enviar
*/
$('#adds').click(function addCommentClick() {
  var newComments = $('#saveComment').val();
  $('#containerPosts').prepend('<div class="newComment">'
        + '<p class="">' + newComments + '</p>'
        +'</div>')
      $('#saveComment').val('');
});

//Funcion para agregar comentario con enter
$('#saveComment').keyup(function addCommentKey(e) {
  if(e.keyCode == 13){
    var newComment = $(this).val();
    $('#containerPosts').prepend('<div class="newComment">'
        + '<p>' + newComment + '</p>'
        +'</div>')
      $(this).val('');
  }
});

// Agregar sección lo más visto.

function pasteMoreSeen() {
  var cont = $('#moreSeen');
  cont.append('<img width="50%" src="https://goo.gl/FUkwk2"><h6 style="font-weight:bold;">X-Men: Days of Future Past</h6><p>Director: Bryan Singer</p><p>2014</p><p>Rating: 8.0</p> <hr class="dottedline"><img width="50%" src="https://goo.gl/VkumSP"><h5>The Hunger Games</h5><p>Director: Gary Ross</p><p>2012</p><p>Rating: 7.2</p> <hr class="dottedline"><img width="50%" src="https://goo.gl/RwNNXK"><h5>The Lord of the Rings: The Two Towers</h5><p>Director: Peter Jackson</p><p>2002</p><p>Rating: 8.7</p>');
}
