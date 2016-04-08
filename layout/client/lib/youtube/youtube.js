// Template.youtube.onCreated(function(){
// 	onYouTubeIframeAPIReady = function () {
// 			var videos = Videos.find().fetch();
// 			for (var i = 0; i < videos.length; i++) {
// 				var id = videos[i].videoId
// 				player = new YT.Player(id, {
// 					height: "200",
// 					width: "400",
// 					videoId: id,
// 				});
// 			}
// 	};
// YT.load();
// Session.set("done", true);
// })
Meteor.startup(function () {
		Meteor.subscribe('videos');
		onYouTubeIframeAPIReady = function () {
				var videos = Videos.find().fetch();
				for (var i = 0; i < videos.length; i++) {
					var id = videos[i].videoId
					player = new YT.Player(id, {
						height: "200",
						width: "400",
						videoId: id,
					});
				}
		};
});

Template.youtube.onRendered(function(){
// 	onYouTubeIframeAPIReady = function () {
// 			var videos = Videos.find().fetch();
// 			for (var i = 0; i < videos.length; i++) {
// 				var id = videos[i].videoId
// 				player = new YT.Player(id, {
// 					height: "200",
// 					width: "400",
// 					videoId: id,
// 				});
// 			}
// 			console.log("yputube frame loded render ");
// 	};
// YT.load();
// Session.set("done", true);
})
Template.youtube.events({
  "click .addComment": function(evt){
  	var target = $(evt.target);
    $("#form-"+target.attr("id")).show();
  },
  "click .saveComment": function(evt){
  	var target = $(evt.target);
    var frm = $("#comment-form-"+target.attr("id")).serializeObject();
    var v =  Videos.findOne({videoId:target.attr("id") });
    Videos.update({_id: v._id }, {$push:{comments: frm}});
    $("#form-"+target.attr("id")).hide();
    $(".alert-success-comment-"+target.attr("id")).show();
  }
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
						});
					}
					console.log("yputube frame loded render ");
			};
		YT.load();
		Session.set("done", true);
   var videos = Videos.find().fetch();
   for (var i = 0; i < videos.length; i++) {
     $.ajax({
        url: "https://www.googleapis.com/youtube/v3/videos?id="+videos[i].videoId+"&key=AIzaSyD_zHq6uILLrcAAhqHOAKNrivTw3_t5Fak&part=snippet,contentDetails,statistics,status",
        dataType: 'json',
        async: false,
        success: function(data) {
          //ajax call async
        videos[i].viewCount = ((data.items[0]|| {}).statistics|| {}).viewCount|| 0;
        videos[i].likeCount = ((data.items[0]|| {}).statistics|| {}).likeCount|| 0;
        videos[i].favoriteCount = ((data.items[0]|| {}).statistics|| {}).favoriteCount|| 0;
        videos[i].dislikeCount = ((data.items[0]|| {}).statistics|| {}).dislikeCount|| 0;
        videos[i].commentCount = ((data.items[0]|| {}).statistics|| {}).commentCount|| 0;
        videos[i].title = ((data.items[0]|| {}).snippet|| {}).title|| "";
      }
    });
   }
	 console.log("retrning vifeos ");
    return videos;
  },
	done: function(){
		return Session.get("done");
	}
})
