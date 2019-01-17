describe("MessageBoard", function() {
  var messageboard;
  var message;

  beforeEach(function() {
    messageboard = new MessageBoard();
    message1 = 'hello';
    message2 = 'aloha';
  });

  it("is able to add messages to the board", function() {
    messageboard.add(message1);
    expect(messageboard.messagesList).toContain(message1);
  });

  it("holds a list of messages", function() {
    messageboard.add(message1);
    messageboard.add(message2);
    expect(messageboard.getList()).toEqual(['hello','aloha']);
  });

});
