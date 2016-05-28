import * as db from "../../../lib/collections";

Template.home.helpers({
    movies(){
        return db.Movies.find();
    }
});

Template.home.events({
  'click .up'(event){
    vote('up',this._id)
  },
  'click .down'(event){
    vote('down',this._id)
  }
});

function vote(type,movieID){
  var user = Meteor.user();
  if(user){
    if(db.Voters.findOne({'userID' : user._id,'movieID' : movieID})){
      bootbox.alert('You already voted in this movie.')
    }else{
      bootbox.alert('You voted')
      db.Voters.insert({'userID' : user._id,'movieID':movieID})
    }
  }else{
    bootbox.alert('Log in first');
  }
}
