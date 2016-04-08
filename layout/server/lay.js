if (Meteor.isServer) {
  Meteor.startup(function () {
    process.env.MAIL_URL="smtp://codehardd%40gmail.com:" + encodeURIComponent("tnfjwkhqpdzofsrv") + "@smtp.gmail.com:465"
  });
}
Meteor.methods({
  sendEmail001: function (to, from, subject, text) {
    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});

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


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('videos', function tasksPublication() {
    return Videos.find();
  });
}
