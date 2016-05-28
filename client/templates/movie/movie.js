import * as db from "../../../lib/collections";

Template.movie.helpers({
    movie(){
        return db.Movies.findOne({_id: FlowRouter.getParam('movieID')});
    }
});
