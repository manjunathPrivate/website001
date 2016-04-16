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


Template.feedback.onRendered(function(){
	$(".pull_feedback").toggle(function(){
				$("#feedback").animate({left:"0px"});
				return false;
			},
			function(){
				$("#feedback").animate({left:"-362px"});
				return false;
			}
		); //toggle
})
