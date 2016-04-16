
	Meteor.startup(function () {
			Meteor.subscribe('videos');
	});


	Template.youtube.events({
	  "click .playVideo": function(evt){
			evt.preventDefault();
			evt.stopPropagation();
			var target = $(evt.target);
			MaterializeModal.display({
				bodyTemplate: "ytpopup",
				id: target.attr("id"),
			});
	  },
	  "click .addComment": function(evt){
	  	var target = $(evt.target);
	    $(".comment-"+target.attr("id")).hide();
	    $("#form-"+target.attr("id")).show();
	  },
	  "click .cancelComment": function(evt){
	  		var target = $(evt.target);
	  		$(".comment-"+target.attr("id")).show();
			  $("#form-"+target.attr("id")).hide();
	  },
	  "click .saveComment": function(evt){
	  	var target = $(evt.target);
	    var frm = $("#comment-form-"+target.attr("id")).serializeObject();
	    var v =  Videos.findOne({videoId:target.attr("id") });
	    Videos.update({_id: v._id }, {$push:{comments: frm}});
	    $("#form-"+target.attr("id")).hide();
		  $(".comment-"+target.attr("id")).show();
	    $(".alert-success-comment-"+target.attr("id")).show();
	  }
	})

	Template.ytpopup.onRendered(function(){
		var id = Template.instance().data.id;
		onYouTubeIframeAPIReady = function () {
			 player = new YT.Player("player", {
					 height: "330",
					 width: "800",
					 videoId: id,
					 events: {

							 onReady: function (event) {
									 event.target.playVideo();
							 }
					 }
			 });
	 };
	 YT.load();
	})
	Template.youtube.helpers({
	  videosYoutube:function(){
				onYouTubeIframeAPIReady = function () {
						var videos = Videos.find().fetch();
						for (var i = 0; i < videos.length; i++) {
							var id = videos[i].videoId
							player = new YT.Player(id, {
								height: "200",
								width: "400",
								videoId: id,
								events: {
								 onClick: function (event) {
									console.log("clicked");
								 }

						 }
							});
						}
						console.log("yputube frame loded render ");
				};
			Session.set("done", true);
	   var videos = Videos.find().fetch();
	   for (var i = 0; i < videos.length; i++) {
	     $.ajax({
	        url: "https://www.googleapis.com/youtube/v3/videos?id="+videos[i].videoId+"&key=AIzaSyD_zHq6uILLrcAAhqHOAKNrivTw3_t5Fak&part=snippet,contentDetails,statistics,status",
	        dataType: 'json',
	        async: false,
	        success: function(data) {
	        videos[i].viewCount = ((data.items[0]|| {}).statistics|| {}).viewCount|| 0;
	        videos[i].likeCount = ((data.items[0]|| {}).statistics|| {}).likeCount|| 0;
	        videos[i].favoriteCount = ((data.items[0]|| {}).statistics|| {}).favoriteCount|| 0;
	        videos[i].dislikeCount = ((data.items[0]|| {}).statistics|| {}).dislikeCount|| 0;
	        videos[i].commentCount = ((data.items[0]|| {}).statistics|| {}).commentCount|| 0;
	        videos[i].title = ((data.items[0]|| {}).snippet|| {}).title|| "";
	      }
	    });
	   }
		 YT.load();
		 console.log("retrning vifeos ");
	    return videos;
	  },
		done: function(){
			return Session.get("done");
		}
	})
