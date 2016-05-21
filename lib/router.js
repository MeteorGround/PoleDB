Router.configure({
  layoutTemplate: 'layout'
});


Router.route('/', function() {
  var movies = Movie.find().fetch();
  movies.forEach(function(movie,index){
    movie.index = index+1;
  });
  this.render('home', {
    data: function(){
      return {movies: movies}
    }
  });
});
Router.route('/movie/:_id', function () {
  this.render('movie', {
    data: function(){
      return {movie: Movie.findOne(this.params._id)}
    }
  })
});
