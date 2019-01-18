function Message(text, time = Date()) {
  this.text = text;
  this.time = time;
}

Message.prototype.listMessage = function() {
  return this.text;
};

Message.prototype.listTime = function() {
  return this.time;
};

Message.prototype.convertMessage = function() {

  const li = document.createElement('li');
  const node = document.createTextNode(`${this.text} at ${this.time}`);
  li.appendChild(node);
  li.appendChild(this.createDeleteButton());
  return li;
};

Message.prototype.createDeleteButton =  function() {

  var delete_button = document.createElement("button");
  delete_button.innerHTML = "Delete message";
  delete_button.addEventListener('click', this.createEventListener);
  return delete_button;
}

Message.prototype.createEventListener = function() {
  var event = new CustomEvent('delete_element', { detail: this} );
  document.dispatchEvent(event);
};
