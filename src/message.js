function Message(text) {
  this.text = text;
  this.time = Date();
}

Message.prototype.listMessage = function() {
  return this.text;
};

Message.prototype.convertMessage = function() {
  const li = document.createElement('li');
  const node = document.createTextNode(`${this.text} at ${this.time}`);
  li.appendChild(node);
  return li;
};
