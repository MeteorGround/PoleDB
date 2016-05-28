import * as db from "../../../lib/collections";

Template.movie.helpers({
    movie(){
        var id = FlowRouter.getParam('movieID');
        return db.Movies.findOne({_id: id});
    }
});
