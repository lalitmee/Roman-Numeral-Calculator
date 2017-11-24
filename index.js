// input taking process
var stdin = process.openStdin();

// defining the variables
var num1;
var operand;
var num2;


// init function for taking inputs from user
(function() {

    // 
    console.log("Enter the num1 operand num2 if form of (num1 + num2)");
    stdin.addListener("data", function(d) {

        num = d.toString().split(' ');
        num1 = num[0];
        operand = num[1];
        num2 = num[2].trim();
        //
        // console.log("you entered: [" + 
        // num1 +"  "
        // + operand +" " 
        // +num2 +"]");
        // console.log(num2);

        // operation according to operands
        if (operand === "+") {

            // addition 
            a = add(num1, num2);
            console.log("Addition of numerals = " + a.toString());
        }

        if (operand === '-') {

            // subtraction
            b = subtract(num1, num2);
            console.log("Subtraction of numerals = " + b.toString());
        }

        if (operand === '/') {

            // division
            c = divide(num1, num2);
            console.log("Division of numerals = " + c.toString());
        }

        if (operand === '*') {

            //multiplication
            d = multiply(num1, num2);
            console.log("Multiplication of numerals = " + d.toString());
        }
        console.log("\n");
        console.log("Enter the num1 operand num2 if form of (num1 + num2)");
    });
})();


module.exports = {

    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply
}

// add function to add numerals
function add(num1, num2) {
    // console.log(num1);
    // console.log(num2);
    // var a = convertRomanToInt(num1);
    // var b = convertRomanToInt(num2);
    // console.log(typeof b);
    // console.log(a);
    // console.log(b);
    // console.log(a+b);
    // returning the result after adding the numerals
    // console.log(convertIntToRoman(convertRomanToInt(num1) + convertRomanToInt(num2)))
    return convertIntToRoman(convertRomanToInt(num1) + convertRomanToInt(num2));

}

// subtract function to subtract numerals
function subtract(num1, num2) {

    // returning the result after subtracting the numerals
    return convertIntToRoman(convertRomanToInt(num1) - convertRomanToInt(num2));

}

// multiply function to multipy numerals
function multiply(num1, num2) {

    // returning the result after multiplying the numerals
    return convertIntToRoman(convertRomanToInt(num1) * convertRomanToInt(num2));

}

// divide function to divide numerals
function divide(num1, num2) {

    // returning the result after dividing the numerals
    return convertIntToRoman(convertRomanToInt(num1) / convertRomanToInt(num2));

}



// function to convert Roman numerals to Integer
function convertRomanToInt(num) {
    var val = 0;
    // console.log("sdhkvbsdhvbksdbvskvb");
    // console.log(num);
    var valMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    var lastValue = 0;

    for (var i = num.length - 1; i >= 0; i--) {
        var char = num[i];

        if (lastValue > valMap[char]) {
            val -= valMap[char];
        } else {
            val += valMap[char];
        }
        lastValue = valMap[char];
    }
    // console.log(val);
    return val;

}


// function to convert Integer to Roman numerals
function convertIntToRoman(num) {
    var val = "";

    var charValues = [
        { char: "M", value: 1000 },
        { char: "D", value: 500 },
        { char: "C", value: 100 },
        { char: "L", value: 50 },
        { char: "X", value: 10 },
        { char: "V", value: 5 },
        { char: "I", value: 1 }
    ];


    while (num > 0) {
        for (var i = 0; i < charValues.length; i++) {
            var obj = charValues[i];
            if (num - obj.value >= 0) {
                val = val.concat(obj.char);
                num -= obj.value;
                break;
            }
        }
        val = val.replace('IIII', 'IV');
        val = val.replace('XXXX', 'XL');
        val = val.replace('CCCC', 'CD');
        val = val.replace('VIV', 'IX');
        val = val.replace('LXL', 'XC');
        val = val.replace('DCD', 'CM');
    }

    return val;
}
