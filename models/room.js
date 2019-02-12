const Room = function(size){
  this.size = size
  this.isPainted = false
}

Room.prototype.setPainted = function (painted) {
  this.isPainted = painted
};

module.exports = Room;
