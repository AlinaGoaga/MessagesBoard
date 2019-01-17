describe("Message", function() {
  var message;

  beforeEach(function(){
    message = new Message('Hello world!');
  });

  it("it has got a text", function() {
    expect(message.listMessage()).toEqual('Hello world!');
  });

});
