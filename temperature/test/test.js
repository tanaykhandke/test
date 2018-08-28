//require the built in 'assertion' library
var assert = require('assert');

//create a group of tests about Arrays
describe('Array',function() {
//A string explanation of what we are testing
    it('should return -1 when the value is not present', function() {
// our actual test : -1 should equal indexof() 
        assert.equal(-1,[1,2,3].indexOf(4));
    });
});


//Create a test group named Math
//Create two tests within the group Math.
//Test one: Should test if 3*3 = 9
//Test two: Should test if (3–4)*8 = -8

describe('Math',function() {
    it('should return 9',function() {
        assert.equal(9,3*3);
    });
    it('should return -8',function(){
        assert.equal(-8,(3-4)*8);
    });
});