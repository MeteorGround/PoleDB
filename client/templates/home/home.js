import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Movie = new Meteor.Collection('movie');
Voters = new Meteor.Collection('voters');

Template.home.events({
  'click .up'(event){
    vote('up',this._id)
  },
  'click .down'(event){
    vote('down',this._id)
  }
});
Template.home.helpers({

})

/* SignUp With Username */
Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

function vote(type,movieID){
  var user = Meteor.user();
  if(user){
    if(Voters.findOne({'userID' : user._id,'movieID' : movieID})){
      bootbox.alert('You already voted in this movie.')
    }else{
      bootbox.alert('You voted')
      Voters.insert({'userID' : user._id,'movieID':movieID})
    }
  }else{
    bootbox.alert('Log in first');
  }
}
