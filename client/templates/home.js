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
})


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
// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
