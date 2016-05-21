import { Meteor } from 'meteor/meteor';
import { movies } from './seeds.js';

var Admin = new Meteor.Collection('admin');
var Movie = new Meteor.Collection('movie');
var Voters = new Meteor.Collection('voters');


Meteor.startup(() => {
  Admin.remove({});
  Admin.insert({
    'username': 'root',
    'password': 'root'
  });

  if(Movie.find().count() == 0){
    movies.forEach(function(movie){
      Movie.insert(movie);
    });
  }
});
