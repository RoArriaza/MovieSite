$(document).ready(function () {
  // Inicialización menú hamburguesa
  $(".button-collapse").sideNav();

  // Inicialización código carrusel media
  $('.slider').slider();

  //carrusel
  $('.carousel').carousel();

  //modal
  $('.modal').modal();
  
});

var searchBtn = $('#searchBtn');
var titleFld = $('#title');

/*función para acceder a la información de la api tomando el valor del
* texto ingresado en el input (búsqueda)
*/
searchBtn.click(function searchMovie() {
  var titleText = titleFld.val();
  alert('listo');
  var url = "http://www.omdbapi.com/?apikey=276881c0&s=" + titleText;
  console.log(url);
  $.ajax({
    type: 'GET',
    url: url,
    success: renderMovies,
    error: renderError
  });
});

//obteniendo resultado de la busqueda imprimiendo en consola y pantalla
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

    var moviesList = $('<li class="list-group-item result"></li>');
    var moviePoster = $('<img src="' + poster + '"width=50px"/>');
    moviesList.append(moviePoster);
    moviesList.append('<span>' + title + '</span>');
    resultsUl.append(moviesList);
  }

  //obteniendo titulo de cada pelicula
  $('.result').click(function () {
    var str = $(this).text();
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

  //imprimiendo información de la api en pantalla
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
     