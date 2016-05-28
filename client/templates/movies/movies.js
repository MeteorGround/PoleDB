import * as db from "../../../lib/collections";

Template.movies.helpers({
    movies(){
        return db.Movies.find();
    }
});