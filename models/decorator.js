const Decorator = function(){
  this.paintPotStock = [];
}

Decorator.prototype.addStock = function (pot) {
  this.paintPotStock.push(pot);
};

Decorator.prototype.stockLitres = function () {
  let total = 0;
  this.paintPotStock.forEach(pot => total += pot.litres);
  return total;
};

Decorator.prototype.jobCheck = function (theRoom) {
  return this.stockLitres() >= theRoom.size
};

Decorator.prototype.paintRoom = function (theRoom) {
  if (this.jobCheck(theRoom) === false){ return false};
  let stillToPaint = theRoom.size;
  while (stillToPaint > 0){
    currentPot=this.paintPotStock.shift();
    if (stillToPaint >= currentPot.litres) {
      stillToPaint -= currentPot.litres;
      currentPot.empty();
    } else {
      currentPot.litres -= stillToPaint;
      stillToPaint = 0;
    };
    this.paintPotStock.push(currentPot);
  }
  return true;
};

Decorator.prototype.binEmptyPots = function () {
  this.paintPotStock = this.paintPotStock.filter(pot => !pot.isEmpty)
};

module.exports = Decorator;
