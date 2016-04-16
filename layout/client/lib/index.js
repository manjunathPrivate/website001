Template.mainNav.events({
	"click a.dropdown-toggle": function(){
		console.log("ever");
		$('.dropdown-menu ').show();
		$('.dropdown-menu li ').toggle()
		
	},
	"click .dropdown-menu li": function(){
		$('.dropdown-menu li ').toggle()
	},
})
