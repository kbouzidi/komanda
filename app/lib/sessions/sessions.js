define([
  "marionette",
  "backbone-plugins",
  "lib/sessions/session"
], function(Marionette, Backbone, session) {

  var settings = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage("komanda.sessions"),
    store : "sessions",
    model: session,

    onRender: function() {
    }

  });

  return settings;
});
