$(document).ready(function() {
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
    var movieList = $('UL#list_movies');
    data.results.forEach(function(movie) {
      movieList.append('<li>' + movie.title + '</li>');
    });
  });
});
