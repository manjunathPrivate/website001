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
