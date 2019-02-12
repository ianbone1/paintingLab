const PaintPot = function(litres){
  this.litres = litres
  this.isEmpty = false
}

PaintPot.prototype.reduceBy = function (volume) {
  this.litres -= volume
  this.litres <= 0 ? this.isEmpty = true : this.isEmpty = false
};


module.exports = PaintPot;
