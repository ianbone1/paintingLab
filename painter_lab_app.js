const PaintPot = require('./models/paintpot.js');
const Room = require('./models/room.js');


let paintPots = []
let pot = 0
while (pot < 20){
  paintPots.push(new PaintPot(5))
  pot += 1;
}
console.log(paintPots);

let room = new Room(48)
