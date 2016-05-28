import * as db from "../../../lib/collections";

Template.home.helpers({
    movies(){
        return db.Movies.find();
    }
});
