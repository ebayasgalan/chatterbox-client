var Rooms = {
  // Get all rooms
};

var getAllRooms = function() {
  Parse.readAll(function(payload) {
    // console.log('payload: ', payload.results);
    Rooms.allRooms = payload.results;
  // Trigger View from here
  // var filteredRoom = payload.results.filter(msg => { msg.roomname && msg.roomname.length !== 0 && !msg.roomname.includes('script'); });
  // console.log(filteredRoom);
  }, null, '/classes/rooms');
};

var createRoom = function(roomname) {
  // POST to rooms endpoint (Parse.create)
  // (payload, successCB, errorCB = null, endpoint = '/classes/messages')
  Parse.create(roomname, function(payload) {
    console.log(payload);
  }, null, '/classes/rooms');
};

getAllRooms();
console.log('allRooms: ', Rooms);