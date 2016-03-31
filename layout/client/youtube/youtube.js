if (Meteor.isClient) {
    onYouTubeIframeAPIReady = function () {
        var videos = Videos.find().fetch();
        for (var i = 0; i < videos.length; i++) {
          var id = videos[i].videoId
          player = new YT.Player(id, {
            height: "200",
            width: "300",
            videoId: id,
          });
        }
    };
  YT.load();
}
Template.youtube.helpers({
  videos:function(){
    return Videos.find().fetch();
  }
})
