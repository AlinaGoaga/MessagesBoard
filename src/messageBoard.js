function MessageBoard() {
  this.messagesList = [];
}

MessageBoard.prototype.add = function(message) {
  this.messagesList.push(message);
};

MessageBoard.prototype.getList = function() {
  return this.messagesList;
};

MessageBoard.prototype.convertToHtml = function() {
   var ul = document.createElement('ul');
   var listLength = this.messagesList.length;
   for (var i = 0; i < listLength; i++) {
    ul.prepend(this.messagesList[i].convertMessage());
   };

   return ul;
};
