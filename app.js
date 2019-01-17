
function initialize() {

  let messageboard = new MessageBoard();

  var button = document.getElementById("button");
  var messages = document.getElementById("messages");
  var textbox = document.getElementById("textbox");
  var div = document.getElementById("message_board");

  button.addEventListener("click", function() {
    div.innerHTML = "";
    let message = new Message(textbox.value);
    textbox.value = "";
    messageboard.add(message);
    div.appendChild(messageboard.convertToHtml());
  });

}

 document.addEventListener("DOMContentLoaded", initialize);
