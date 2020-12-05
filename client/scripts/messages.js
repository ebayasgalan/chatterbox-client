var Messages = {

};

Messages.getAllMessages = function() {
  Parse.readAll(function(payload) {
    // console.log('payload: ', payload.results);
    Messages.allMessages = payload.results;
  // Trigger View from here
  }, null, '/classes/messages');
};

Messages.deleteMessage = function() {

};