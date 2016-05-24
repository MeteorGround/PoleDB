import { Meteor } from 'meteor/meteor';
import { movies } from './seeds.js';

var Movie = new Meteor.Collection('movie');
var Voters = new Meteor.Collection('voters');

Meteor.startup(() => {
  
  // Accounts.createUser({username: "root", password: "root", profile: {createUserKey: "Agent 404"}});

  if(Movie.find().count() == 0){
    movies.forEach(function(movie){
      Movie.insert(movie);
    });
  }
  Accounts.config({
    forbidClientAccountCreation: true,
  });
});
