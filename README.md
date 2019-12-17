## To write a unit test
1. create a .js file in the test folder

2. require the expect module at the top like so: 
const expect = require('chai').expect

3. An example of a test
describe('#totalSum()', () => {
	describe('the user will provide 2 numbers', () => {
		it ('calculate the sum of the 2 numbers', () => {
			expect(totalSum(2,5)).to.eql(7); 
		}); 
	}); 
}); 

4. describe() is simply a way to group our tests in Mocha. We can nest our tests in groups as deep as we deem necessary. describe() takes two arguments, the first is the name of the test group, and the second is a callback function.

5. it() is used for an individual test case. it() should be written as if you were saying it out loud: “It should equal zero”, “It should log the user in”, etc. it() takes two arguments, a string explaining what the test should do, and a callback function which contains our actual test:


## Chai HTTP Assertions
https://www.chaijs.com/plugins/chai-http/


## Common Chai Examples
Reference = https://www.chaijs.com/api/bdd/

expect(2).to.equal(2); // test result is 2

expect([1, 2, 3]).to.have.lengthOf(3);

expect('foo').to.have.lengthOf(3);

expect({a: 1}).to.have.own.property('a');

expect({a: 1}).to.have.property('b');

expect([1, 2, 3]).to.not.be.empty; 

### .any
Causes all .keys assertions that follow in the chain to only require that the target have at least one of the given keys. This is the opposite of .all, which requires that the target have all of the given keys.

expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
