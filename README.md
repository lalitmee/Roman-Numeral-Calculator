# Roman-Numeral-Calculator

- - - -


## Introduction ##

This repository is for a program of **_Roman Numeral Calculator_** with unit testing of all **_mathematical operations_** like addition, subtraction, multiplication and division. **_Unit testing_** is done by using [mocha](https://mochajs.org/) and [chai](http://chaijs.com/). 


## Problem ##
The problem was to do mathematical operation with roman numerals (I, V, X, L....). .. For example , it should be able to do the operations  like these.

    XL + X = L

    C - I  = XCIX

    C / X  = X

    X * X  = C

The program should take 3 arguments like the above and give the result( two operands and the operator and perform the operation and print the output ). There should be a unit test for the program (using any unit testing framework).


## Approach ##
As described in the problem statement that we are dealing with our __input__ and output as __Roman Numerals__. So first I tried to convert roman numerals to integer so that I can perform mathematical operations on the inputs.

For converting roman to integer, I have created a function __convertRomanToInt__ in [index.js](https://github.com/lalitmee/Roman-Numeral-Calculator/blob/master/index.js) file and for converting integer to roman, I have created a funtion __convertIntToRoman__ in the same file. Then I have made separate functions __add__, __subtract__, __divide__ and __multiply__ for _addition_, _subtraction_, _division_ and _multiplication_ respectively.

For different operations, I am taking user input in the form of (num1 + num2). User will enter the input in this form and will get the respective output.

## Software Requirements ##
To run this program we are required to have __nodejs__, __mocha__ and __chai__. To execute the roman numeral calculator, we need to install these softwares. 

1. For _nodejs_ on **ubuntu**:
    - `sudo apt-get update`
    - `sudo apt-get install nodejs`
    - `sudo apt-get install npm`

2. For _mocha_ and _chai_:
    - `sudo npm install mocha chai --save-dev`

## Execution ##
To successfully run this program you have to follow some terminal commands after installing the above softwares on your system which are following:
1. Clone the repository and go to the folder Roman-Numeral-Calculator.
    - `git clone https://github.com/lalitmee/Roman-Numeral-Calculator.git`
    - `cd Roman-Numeral-Calculator`

2. For program execution.
    - `node index.js`
    - after this command program will run you can give output in the form of (num1 - num2).

![Program Execution](https://github.com/lalitmee/Roman-Numeral-Calculator/blob/master/program.png?raw=true "Execution of Program in nodejs")

3. For unit testing.
    - `npm run test`
    - after this command, test cases successfully execution will be displayed.

![Unit testing](https://github.com/lalitmee/Roman-Numeral-Calculator/blob/master/unit_testing.png?raw=true "Unit testing")

## Thank You
