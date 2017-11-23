"use strict";

// getting assert for comparing tests
var assert = require('chai').assert;

// including index.js file to include mathematical operation function
const cal = require('../index');


// defining the tests for unit testing of Roman Calculator
describe('Roman Calculator', function() {

    // unit test for addition
    describe('Addition', function() {
        it('addition of roman numbers "XL + X" should be "L" ', function() {
            
            // adding (XL + X) and comparing to (L)
            assert.equal(cal.add('XL', 'X'), 'L');
        });
    }); 

    // unit test for subtraction
    describe('Subtraction', function() {
        it('subtraction of roman numbers "C - I" should be "XCIX" ', function() {
            
            // subtracting (C - I) and comparing to (XCIV)
            assert.equal(cal.subtract('C', 'I'), 'XCIX');
        });
    });

    // unit test for division
    describe('Division', function() {
        it('division of roman numbers "C / X" should be "X" ', function() {
            
            // dividing (C / X) and comparing to X
            assert.equal(cal.divide('C', 'X'), 'X');
        });
    });

    // unit test for multiplication
    describe('Multiplication', function() {
        it('multiply of roman numbers "X * X" should be "C" ', function() {
            
            // multiplying (X * X) and comparing to (C)
            assert.equal(cal.multiply('X', 'X'), 'C');
        });
    });

});

