const expect = require('chai').expect

describe('Greeting function', () => {
    it ('user will provide a name get greeting from a function', () => {
        expect(greeting('Boss')).to.eql('Hello Boss'); 
    }); 
}); 


const greeting = (name) => {
	return 'Hello ' + name;
}