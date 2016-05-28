import * as db from "../../../lib/collections";

Template.home.helpers({
    movies(){
        return db.Movies.find();
    }
});

Template.home.events({
    'click .up'(){
        vote('up', this._id)
    },
    'click .down'(){
        vote('down', this._id)
    }
});

function vote(type, movieID) {
    var user = Meteor.user();
    if (user) {
        if (db.Voters.findOne({'userID': user._id, 'movieID': movieID})) {
            bootbox.alert('You already voted on this movie.')
        } else {
            bootbox.alert('Vote considered.');
            db.Voters.insert({'userID': user._id, 'movieID': movieID, 'type': type})
        }
    } else {
        bootbox.alert('Log in first');
    }
}
