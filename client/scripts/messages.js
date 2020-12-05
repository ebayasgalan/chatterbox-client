var Messages = {

};

var getAllMessages = function() {
  Parse.readAll(function(payload) {
    // console.log('payload: ', payload.results);
    Messages.allMessages = payload.results;
    console.log(Messages);
  // Trigger View from here
  }, null, '/classes/messages');
};

var createMessage = function() {

};

var deleteMessage = function() {

};