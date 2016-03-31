Router.route('/', function () {
  this.render('homeTemplate');
});

Router.route("/admin", {
	template: "adminTemplate",
	onStop: function() {
			Session.set("showForm", false);
	}
});
