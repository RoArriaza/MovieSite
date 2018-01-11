   $(document).ready(function(){
  	$('.carousel').carousel();

   });

   $.getJSON('http://www.omdbapi.com/?t=Harry+Potter+and+the+Chamber+of+Secrets&apikey=276881c0').then(function(paste) {
     var poster = $('#poster');
     var titulo = $('#titulo');
     var datos = $('#datos');
     var rating = $('#rating');

     poster.append('<img src="' + paste.Poster + '" alt="poster">');
     titulo.append('<h4 style="font-weight: bold;">' + paste.Title + '</h4>');
     datos.append('<h6 class="h6bigger">Año:</h6><p>' + paste.Year + '</p><h6 class="h6bigger">Duración: </h6><p>' + paste.Runtime + '</p><h6 class="h6bigger">Director:</h6><p>' + paste.Director + '</p><h6 class="h6bigger">Escritor: </h6><p>' + paste.Writer + '</p><h6 class="h6bigger">Actores: </h6><p>' + paste.Actors + '</p><a class=center-align href="' + paste.Website + '">Website Oficial</a>');

     rating.append('<div style="background-color:#ffbf00; border-radius: 20px; width:8em; padding:0.3em; text-align:center; margin-top: 1em; display: inline-block;"> <h6 class="h6bigger">Rating:</h6><p style="font-size:1em;"><strong>'+ paste.imdbRating +'</strong> </p></div>');

   });

   /*$(function () {

        //initialize all modals
        $('.modal').modal();

        //now you can open modal from code
        $('#modal1').modal('open');

        //or by click on trigger
        $('.trigger-modal').modal();

    });*/

    /* Categorías

    var titleCategory= $('#categoria');

    titleCategory.append(paste.Title);

    var imgCategory= $('#movieImgs');
    imgCategory.append('  <div class="images"> <img src="' + paste.Poster + '"> <h5>'+ paste.Title +'</h5> <p style="font-weight=bold">' + paste.Year + '</p> </div>')
    */
