
Template.adminTemplate.helpers({
	videos:function videos() {
		return Videos.find().fetch();
	},
	showForm: function(){
		return Session.get("showForm");
	}
})
Template.adminTemplate.events({
"click .addVideo": function(){
	Session.set("showForm", true);
},
"click .saveVideo":function(){
	var form = $('form').serializeObject();

	if(!form.videoId || !form.videoUrl) return Materialize.toast('please add details properly!', 2000)
	Videos.insert(form);
	Session.set("showForm", false);
},
"click .delete":function(e){
	 var target= $(e.target);

	 if(confirm("remove this video??"))
	 {
		 Videos.remove({_id: target.attr("id")});
	 }
}
})
