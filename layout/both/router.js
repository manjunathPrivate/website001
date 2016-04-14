

Router.configure({
 // the default layout
 layoutTemplate: 'mainNav'
});

//home
Router.route('/', function () {
	this.render('homeTemplate');
	this.layout("mainNav");
});
//admin
Router.route("/admin", {
	template: "adminTemplate",
	onStop: function() {
			Session.set("showForm", false);
	}
});

//services
Router.route('/web-dev', function () {
	this.render('webDevlopemnt');
	this.layout("mainNav");
});
Router.route('mob-dev', function () {
	this.render('mobileDevlopment');
	this.layout("mainNav");
});
Router.route('bd-dev', function () {
	this.render('databaseDevlopment');
	this.layout("mainNav");
});
Router.route('software-testing', function () {
	this.render('softwareTesting');
	this.layout("mainNav");
});
Router.route('content-management', function () {
	this.render('contentManagement');
	this.layout("mainNav");
});

//blog
Router.route("/blog", {
	template: "blogTemplate",
	onStop: function() {
			Session.set("showForm", false);
	}
});

//about us
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
