if (Meteor.isClient) {
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
  YT.load();
}
Template.youtube.events({
  "click .addComment": function(evt){
    	var target = $(evt.target);
      $("#form-"+target.attr("id")).show();
  },
  "click .saveComment": function(evt){
    	var target = $(evt.target);
      console.log(target.attr("id"));
      var frm = $("#comment-form").serializeObject();
      console.log(frm);
    var video =  Videos.findOne({videoId:target.attr("id") });
    if(!video.comments) video.comments = [];
    video.comments.push(frm);
    video.save()
  }
})
Template.youtube.helpers({
  videos:function(){
   var videos = Videos.find().fetch();
   for (var i = 0; i < videos.length; i++) {
     $.ajax({
        url: "https://www.googleapis.com/youtube/v3/videos?id="+videos[i].videoId+"&key=AIzaSyD_zHq6uILLrcAAhqHOAKNrivTw3_t5Fak&part=snippet,contentDetails,statistics,status",
        dataType: 'json',
        async: false,
        success: function(data) {
          console.log(data);
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
    return videos;
  },
})


// commentCount
// :
// "1"
// dislikeCount
// :
// "2"
// favoriteCount
// :
// "0"
// likeCount
// :
// "129"
// viewCount
// :
// "48302"
