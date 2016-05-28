import * as db from "../../../lib/collections";
import { Session } from 'meteor/session';

Template.admin.helpers({
    data(){
        return db.Movies.find();
    },
    isAdmin(){
      if(Meteor.user() && Meteor.user().username === "root"){
        return true;
      }
      return false;
    }
});

Template.admin.events({
    'click #addMovie': function () {
        // Get input values // TODO : needs improvement
        let title = $('#title').val();
        let type = $('#type').val();
        let prod = $('#prod').val();
        let year = $('#year').val();
        let rating = $('#rating').val();
        // Build the movie obj
        let newMovie = {title, type, prod, year};
        // Persist it
        db.Movies.insert(newMovie);

        clearinputs();
    },
    'click #updateMovie': function () {
        if (Session.get('id')) {
            // Get input values // TODO : needs improvement
            let title = $('#title').val();
            let type = $('#type').val();
            let prod = $('#prod').val();
            let year = $('#year').val();
            let rating = $('#rating').val();

            // Save Changes
            db.Movies.update(Session.get('id'), {
                $set: {
                    title: title,
                    type: type,
                    prod: prod,
                    year: year,
                    rating: rating
                }
            });

            clearinputs();
        }
    },
    'click .deleteMovie': function () {
        db.Movies.remove(this._id);
    },
    'click .editMovie': function () {
        // Register the fetch record in the session
        Session.set('id', this._id);
        let movie = db.Movies.findOne(this._id);
        // append the record to the input
        $('#title').val(movie.title);
        $('#type').val(movie.type);
        $('#prod').val(movie.prod);
        $('#year').val(movie.year);
        $('#rating').val(movie.rating);
        // Change the ID attr of the button and it's expressive icon
        $('#addMovie').attr('id', 'updateMovie');
        $('#updateMovie').find('span').removeClass('glyphicon-plus').addClass('glyphicon-ok-sign');
    },
    'click #clear': function () {
        // Clear Session and inputs
        if (Session.get('id')) {
            Session.get('id', null);
        }
        clearinputs();
    }

    // TODO : needs some expressive alert here
});


function clearinputs() {
    $('#title').val('');
    $('#type').val('');
    $('#prod').val('');
    $('#year').val('');
    $('#rating').val('');
    $('.btn-success').find('span').removeClass('glyphicon-ok-sign').addClass('glyphicon-plus');
}
