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
var moviesCont = $('#movieImgs');

function printMovies() {

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

  //agregando contenido dinamico en categorías

  //obteniendo información (titulo de cada pelicula) para mostrar en inicial.html
  $('.resultList').click(function () {
    window.location.href="inicial.html"
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

function pasteMoreSeen(){
  var cont= $('#moreSeen');
  cont.append('<img width="50%" src="https://goo.gl/FUkwk2"><h5>X-Men: Days of Future Past</h5><p>Director: Bryan Singer</p><p>2014</p><p>Rating: 8.0</p> <hr class="dottedline"><img width="50%" src="https://goo.gl/VkumSP"><h5>The Hunger Games</h5><p>Director: Gary Ross</p><p>2012</p><p>Rating: 7.2</p> <hr class="dottedline"><img width="50%" src="https://goo.gl/RwNNXK"><h5>The Lord of the Rings: The Two Towers</h5><p>Director: Peter Jackson</p><p>2002</p><p>Rating: 8.7</p>');
}
