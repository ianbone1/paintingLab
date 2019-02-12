const assert = require('assert');
const PaintPot = require('../paintpot.js');
const Room = require('../room.js');

describe('Painter', function(){

  describe('Paintpot', function(){

    let pot;

    beforeEach(function(){
      pot = new PaintPot(5);
    })

    it('should have 5 litres when created', function(){
      assert.strictEqual(5, pot.litres)
    })

    it('should reduce volume by x amount', function(){
      pot.reduceBy(3)
      assert.strictEqual(2, pot.litres)
    })

    it('should show pot is empty', function(){
      pot.reduceBy(5)
      assert.strictEqual(true, pot.isEmpty)
    })
  })

  describe('Room', function(){

    let room;

    beforeEach(function(){
      room = new Room(48)
    })

    it('should have a size of x', function(){
      assert.strictEqual(48, room.size)
    })

    it('should start with no paint on walls', function(){
      assert.strictEqual(false, room.isPainted)
    })

    it('can change is painted to true', function(){
      room.setPainted(true)
      assert.strictEqual(true, room.isPainted)
    })

  })
})
