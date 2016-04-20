Template.mainNav.events({
	"click .dropdown": function(evt,tmpl){
		evt.preventDefault()
		evt.stopPropagation()
		tmpl.$('.dropdown-menu').toggle();
	},
	"click .dropdown-menu li a": function(evt){
		evt.stopPropagation()
		$('.dropdown-menu ').toggle()
	},
})


Template.blogTemplate.onRendered(function(){
$('.parallax').parallax();
})
