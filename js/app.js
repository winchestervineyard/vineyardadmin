var appUser;

App = Ember.Application.create({
  ready: function() {
    new FirebaseSimpleLogin(new Firebase('https://winvin.firebaseio.com'), function(error, user) {
      if (user && !error) {
        appUser = user;
      }
    });
  }
});

App.Router.map(function() {
  this.resource("news", function() {
    this.resource("news-item", { path: ':news_item_id' });
  });
  this.resource("talks", function() {
    this.resource("talk", { path: ':talk_id' });
  });
  this.resource("login");
});

App.LoginController = Ember.Controller.extend({
  actions: {
    login: function() {
      var self = this;
      new FirebaseSimpleLogin(new Firebase('https://winvin.firebaseio.com'), function(error, user) {
        if (error) {
          alert("Error: " + error);
          self.transitionToRoute('login');
          return;
        } else if (user) {
          appUser = user;
          self.transitionToRoute('news');
        }
      }).login("password", this.getProperties("email", "password"));
    },
    logout: function() {
      new FirebaseSimpleLogin(new Firebase('https://winvin.firebaseio.com'), function() {}).logout();
      appUser = null;
      this.transitionToRoute('/');
    }
  }
});

App.NewsController = Ember.ArrayController.extend({
  actions: {
    new: function() {
      var newItem = this.get("model").ref.push();
      newItem.set({id: newItem.name(), title: "New title"});
      this.transitionToRoute('news-item', newItem.name());
    },
    remove: function(foo) {
      if (confirm("Are you sure?")) {
        this.removeObject(foo);
        this.transitionToRoute('news');
      }
    }
  }
});

App.TalksController = Ember.ArrayController.extend({
  actions: {
    new: function() {
      var newItem = this.get("model").ref.push();
      newItem.set({id: newItem.name(), title: "New talk"});
      this.transitionToRoute('talk', newItem.name());
    },
    remove: function(foo) {
      if (confirm("Are you sure?")) {
        this.removeObject(foo);
        this.transitionToRoute('talks');
      }
    }
  }
});

App.NewsRoute = Ember.Route.extend({
  activate: function() {
    if (!appUser) {
      this.transitionTo('login');
    }
  },
  model: function() {
    return EmberFire.Array.create({
      ref: new Firebase("https://winvin.firebaseio.com/news")
    });
  }
});

App.TalksRoute = Ember.Route.extend({
  activate: function() {
    if (!appUser) {
      this.transitionTo('login');
    }
  },
  model: function() {
    return EmberFire.Array.create({
      ref: new Firebase("https://winvin.firebaseio.com/talks")
    });
  }
});

App.NewsItemRoute = Ember.Route.extend({
  activate: function() {
    if (!appUser) {
      this.transitionTo('login');
    }
  },
  model: function(params) {
    return EmberFire.Object.create({
      ref: new Firebase("https://winvin.firebaseio.com/news/" + params.news_item_id)
    });
  }
});

App.TalkRoute = Ember.Route.extend({
  activate: function() {
    if (!appUser) {
      this.transitionTo('login');
    }
  },
  model: function(params) {
    return EmberFire.Object.create({
      ref: new Firebase("https://winvin.firebaseio.com/talks/" + params.talk_id)
    });
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  date = new Date(date);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  } else {
    return date.strftime("%a %d %b %Y %H:%M%P");
  }
});
