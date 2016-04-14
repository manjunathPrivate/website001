Router.route('/', function () {
  this.render('homeTemplate');
	this.layout("mainNav");
});


Router.configure({
 // the default layout
 layoutTemplate: 'mainNav'
});

Router.route("/admin", {
	template: "adminTemplate",
	onStop: function() {
			Session.set("showForm", false);
	}
});
Router.route("/blog", {
	template: "blogTemplate",
	onStop: function() {
			Session.set("showForm", false);
	}
});
Router.route("/aboutus", {
	template: "aboutUs",
	onStop: function() {
			Session.set("showForm", false);
	}
});
Router.route("/paricipate", {
	template: "paricipateform",
	onStop: function() {
			Session.set("showForm", false);
	}
});
