import { seeds } from './seeds.js';
import * as db from "../collections/collections";

Meteor.startup(() => {

    // Accounts.createUser({username: "root", password: "root", profile: {createUserKey: "Agent 404"}});

    var moviesDB = db.Movies;

    if (moviesDB.find().count() == 0) {
        seeds.forEach((seed)  => moviesDB.insert(seed));
    }

    // DEV :  moviesDB.find().forEach((movie) => console.log(movie));

    /*Accounts.config({
     forbidClientAccountCreation: true,
     });*/

});
