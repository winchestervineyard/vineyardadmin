App = Ember.Application.create();

App.Router.map(function() {
  this.resource("news", function() {
    this.resource("news-item", { path: ':news_item_id' });
  });
  this.resource("talks");
});

App.NewsRoute = Ember.Route.extend({
  model: function() {
    return EmberFire.Array.create({
      ref: new Firebase("https://winvin.firebaseio.com/news")
    });
  }
});

App.NewsItemRoute = Ember.Route.extend({
  model: function(params) {
    return EmberFire.Object.create({
      ref: new Firebase("https://winvin.firebaseio.com/news/" + params.news_item_id)
    });
  }
});
