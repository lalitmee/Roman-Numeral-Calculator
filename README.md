# Roman-Numeral-Calculator

- - - -

## Introduction ##

This repository is for a program of _Roman Numeral Calculator_ with unit testing of all _mathematical operations_ like addition, subtraction, multiplication and division. _Unit testing_ is done by using [mocha](https://mochajs.org/) and [chai](http://chaijs.com/). 


## Problem ##
The problem was to do mathematical operation with roman numerals (I, V, X, L....). .. For example , it should be able to do the operations  like these.

    XL + X = L

    C - I  = XCIX

    C / X  = X

    X * X  = C

The program should take 3 arguments like the above and give the result( two operands and the operator and perform the operation and print the output ). There should be a unit test for the program (using any unit testing framework).


## Approach ##
As described in the problem statement that we are dealing with our _input_ and output as _Roman Numerals_. So first I tried to convert roman numerals to integer so that I can perform mathematical operations on the inputs.

For converting roman to integer I have created a function _convertRomanToInt_ in [index.js](https://github.com/lalitmee/Roman-Numeral-Calculator/blob/master/index.js) file
