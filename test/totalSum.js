const expect = require('chai').expect

// first describe module or method being tested. Group things together
// 
describe('#totalSum()', () => {
	describe('the user will provide 2 numbers', () => {
		it ('calculate the sum of the 2 numbers', () => {
			expect(totalSum(2,5)).to.eql(7); 
		}); 
	}); 
}); 


const totalSum = (num1, num2) => {
	return num1 + num2; 
}