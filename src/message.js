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
  return li;
};
