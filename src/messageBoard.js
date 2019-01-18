function MessageBoard() {
  this.messagesList = [];
}

MessageBoard.prototype.add = function(message) {
  this.messagesList.push(message);
};

MessageBoard.prototype.delete = function(message) {
  var index = this.messagesList.indexOf(message);
  this.messagesList.splice(index,1);
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
