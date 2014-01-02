App = Ember.Application.create();

App.Router.map(function() {
  this.resource("news");
  this.resource("talks");
});
