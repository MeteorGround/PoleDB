import { seeds } from './seeds.js';
import * as db from "../lib/collections";

Meteor.startup(() => {

    //

    // Populate Movies
    var moviesDB = db.Movies;
    moviesDB.remove({});
    if (moviesDB.find().count() === 0) {
        seeds.forEach((seed)  => moviesDB.insert(seed));
    }

    // Populate Users
    Meteor.users.remove({});
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({username: "root", password: "root", profile: {createUserKey: "Agent 404"}});
    }

    /* Disallow SignIn */
    Accounts.config({
        forbidClientAccountCreation: true
    });
});
