var Messages = {

};

Messages.getAllMessages = function() {
  Parse.readAll(function(payload) {
    // console.log('payload: ', payload.results);
    Messages.allMessages = payload.results;
  // Trigger View from here
  }, null, '/classes/messages');
};

<<<<<<< HEAD
var createMessage = function() {
=======
Messages.createMessage = function() {
>>>>>>> 414dd5f9ffab7935b83da7bd941693c097da0f1c

};

Messages.deleteMessage = function() {

};