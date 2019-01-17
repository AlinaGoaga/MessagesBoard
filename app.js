let messageboard = new MessageBoard();

    var button = document.getElementById("button");
    var messages = document.getElementById("messages");
    var textbox = document.getElementById("textbox");
    var div = document.getElementById("message_board");

  button.addEventListener("click", function() {
      div.innerHTML = ""
      let message = new Message(textbox.value);
      messageboard.add(message);
      messageboard.convertToHtml;
      div.appendChild(messageboard.convertToHtml());
  });
