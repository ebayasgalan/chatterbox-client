var MessageView = {

  render: _.template(`
      <div class="chat">
<<<<<<< HEAD
        <div class="username"></div>
        <div></div>
=======
        <div class="username"><%- username %></div>
        <div><%- text %></div>
>>>>>>> 414dd5f9ffab7935b83da7bd941693c097da0f1c
      </div>
    `),

  renderMessage: function(message) {
    // render message to DOM in chats section
    return MessageView.render(message);
  }
};

/*
var message = {
  username: 'shawndrost',
  text: 'trololo',
  roomname: '4chan'
};
*/