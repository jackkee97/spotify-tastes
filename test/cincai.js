process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
const expect = require('chai').expect
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Specific Number', () => {
    it('validate the range of the number', (done) => {
        const value = {
            minValue: 0,
            maxValue: 10
        }
        const evenResult = [0, 2, 4, 6, 8, 10];
        chai.request(server)
            .post('/cincai/validateRange')
            .send(value)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.be.eql("valid");
                describe('Even Number', () => {
                    it ('function will provide even number from a range', () => {
                        expect(evenFilter(value.minValue, value.maxValue)).to.eql(evenResult); 
                    }); 
                    done();
                }); 
            
            });
    });
}); 

const evenFilter = (minValue, maxValue) => {
    const evenList = [];
    for (let i = minValue; i <= maxValue; i++){
        if (i%2 === 0){
            evenList.push(i);
        }
    }
	return evenList;
}
