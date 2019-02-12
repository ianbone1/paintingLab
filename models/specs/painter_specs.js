const assert = require('assert');
const PaintPot = require('../paintpot.js');
const Room = require('../room.js');
const Decorator = require('../decorator.js');

describe('Painter', function(){

  describe('Paintpot', function(){

    let pot;

    beforeEach(function(){
      pot = new PaintPot(5);
    });

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

    it('should be able to empty itself', function(){
      pot.empty()
      assert.strictEqual(0,pot.litres);
    });
  })

  describe('Room', function(){

    let room;

    beforeEach(function(){
      room = new Room(48);
    });

    it('should have a size of x', function(){
      assert.strictEqual(48, room.size);
    });

    it('should start with no paint on walls', function(){
      assert.strictEqual(false, room.isPainted);
    });

    it('can change is painted to true', function(){
      room.setPainted(true);
      assert.strictEqual(true, room.isPainted);
    });
  });

  describe("Decorator", function(){

    let decorator;
    let pot1;
    let theRoom;

    beforeEach(function(){
      decorator = new Decorator;
      pot1 = new PaintPot(5);
      theRoom = new Room(48);
    });

    it('Should start with an empty paint stock', function(){
      assert.deepStrictEqual([], decorator.paintPotStock);
    });

    it('Should be able to add a can of paint to paint stock', function(){
      decorator.addStock(pot1);
      assert.strictEqual(1, decorator.paintPotStock.length);
    });

    it('Should be able to calculate total litres paint it has in stock', function(){
      for (p=1; p<=20; p++){
        decorator.addStock(new PaintPot(5));
      }
      assert.strictEqual(100, decorator.stockLitres());
    });

    it('Should be able to calculate whether is has enough paint to paint a room', function(){
      for (p=1; p<=20; p++){
        decorator.addStock(new PaintPot(5));
      }
      assert.strictEqual(true, decorator.jobCheck(theRoom));
    });

    it('Should be able to paint room if has enough paint in stock', function(){
      for (p=1; p<=20; p++){
        decorator.addStock(new PaintPot(5));
      }
      assert.strictEqual(true, decorator.paintRoom(theRoom));
    });

    it('Should be able to remove empty paint cans from stock', function(){
      for (p=1; p<=20; p++){
        decorator.addStock(new PaintPot(5));
      }
      decorator.paintRoom(theRoom);
      decorator.binEmptyPots();
      assert.strictEqual(11, decorator.paintPotStock.length)
    });
  });
});
