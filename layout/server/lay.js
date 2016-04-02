if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    process.env.MAIL_URL="smtp://codehardd%40gmail.com:" + encodeURIComponent("tnfjwkhqpdzofsrv") + "@smtp.gmail.com:465"
  });
}
Meteor.methods({
  sendEmail001: function (to, from, subject, text) {
    // check([to, from, subject, text], [String]);
    //
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});
