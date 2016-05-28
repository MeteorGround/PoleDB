FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render('layout', {content: 'home'});
    }
});

FlowRouter.route('/movies', {
    action: function () {
        BlazeLayout.render('layout', {content: 'movies'});
    }
});

FlowRouter.route('/movie/:movieID', {
    action: function () {
        BlazeLayout.render('layout', {content: 'movie'});
    }
});

FlowRouter.route('/admin', {
    action: function () {
      if(!Meteor.userId())
        FlowRouter.go('/');
      BlazeLayout.render('layout', {content: 'admin'});
    }
});
