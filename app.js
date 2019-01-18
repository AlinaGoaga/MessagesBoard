
function initialize() {

  let messageboard = new MessageBoard();

  var button = document.getElementById("button");
  var messages = document.getElementById("messages");
  var textbox = document.getElementById("textbox");
  var div = document.getElementById("message_board");
  var buttons = document.getElementsByClassName("delete_button");

  button.addEventListener("click", function() {
    div.innerHTML = "";
    let message = new Message(textbox.value);
    textbox.value = "";
    messageboard.add(message);
    div.appendChild(messageboard.convertToHtml());
  });

  document.addEventListener('delete_element', function(event) {
    messageboard.delete(event.detail);
    div.innerHTML = '';
    div.appendChild(messageboard.convertToHtml());
  })

}

 document.addEventListener("DOMContentLoaded", initialize);
