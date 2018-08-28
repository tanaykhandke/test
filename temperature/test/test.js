/* Now all that’s left to do is require our app.js file in test.js and change the function names used in our tests to include the convert object*/
let convert=require('../app.js')
var assert = require('assert');

describe('Temperature Conversion',function() {
    describe('cToF',function(){
        //tests
        it('should convert -40 C to -40F',function() {
            assert.equal(-40,cToF(-40));
        });
        it('it should equal to 0C to 32F',function() {
            assert.equal(32,cToF(0));
        });

        it('should return undefined if no temperature is input', function(){
            assert.equal(undefined, cToF(''));
          });
    });
    describe('fToC',function() {
        //tests
        it('should convert -40 fahrenheit to -40 celsius', function() {
            assert.equal(-40, fToC(-40));
          });
          it('should convert 32 fahrenheit to 0 celsius', function() {
            assert.equal(0, fToC(32));
          });
          it('should return undefined if no temperature is input', function(){
            assert.equal(undefined, fToC(''));
          });
    });
});

