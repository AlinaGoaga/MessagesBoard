describe("Message", function() {
  var message;

  beforeEach(function() {
    jasmine.clock().install();
    message = new Message('Hello world!','Fri Jan 18 2019 12:21:43 GMT+0000 (Greenwich Mean Time)');
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("it has got a text", function() {
    expect(message.listMessage()).toEqual('Hello world!');
  });

  it("it has got a time", function() {
    expect(message.listTime()).toEqual('Fri Jan 18 2019 12:21:43 GMT+0000 (Greenwich Mean Time)');
  });

});
