var chai = require('chai');
var app = require('../app/app');

describe('Max Function', function(){

	var expect = chai.expect;

	it('should return 3 when 1 and 3 are given', function(){
		var max = app.maxValue(1, 3);
		expect(max).to.equal(3);
	});

	it('should return 5 when 5 and 2 are given', function(){
		var max = app.maxValue(5, 2);
		expect(max).to.equal(5);
	});

});