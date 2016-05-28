FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render('layout', {content: 'home'});
    }
});

FlowRouter.route('/movies', {
    action: function () {
        BlazeLayout.render('layout', {content: 'movies'});
    }
});

FlowRouter.route('/movie/:movieID', {
    action: function (params, query) {
        console.log(params.movieID); // TODO : maybe call
        BlazeLayout.render('layout', {content: 'movie'});
    }
});

FlowRouter.route('/admin', {
    action: function () {
      if(!Meteor.userId())
        FlowRouter.go('/');
      // console.log(Meteor.user());
      BlazeLayout.render('layout', {content: 'admin'});
    }
});

/*
 Router.configure({
 layoutTemplate: 'layout'
 });


 Router.route('/', function() {
 var movies = Movie.find().fetch(); // Get movies
 // append an index to each movie Object
 movies.map((movie, count) => movie.index = count + 1);
 if(Meteor.userId()){
 Router.go('/profile');
 }
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
 Router.route('/profile', function (){
 if(Meteor.userId()){
 this.render('profile');
 }else{
 Router.go('/');
 }
 });
 Router.route('/addMovie', function(){
 if(Meteor.userId()){
 this.render('addMovie');
 }else{
 Router.go('/');
 }
 })
 */
