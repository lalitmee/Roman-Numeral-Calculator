module.exports = {

    // add function to add numerals
    add: function(num1, num2) {

    // returning the result after adding the numerals
    return convertIntToRoman(convertRomanToInt(num1) + convertRomanToInt(num2));
      
},

    // subtract function to subtract numerals
    subtract: function(num1, num2) {
    
    // returning the result after subtracting the numerals
   return convertIntToRoman(convertRomanToInt(num1) - convertRomanToInt(num2));
      
},
    
    // multiply function to multipy numerals
    multiply: function(num1, num2) {
    
    // returning the result after multiplying the numerals
    return convertIntToRoman(convertRomanToInt(num1) * convertRomanToInt(num2));

},
    
    // divide function to divide numerals
    divide: function(num1, num2) {
    
    // returning the result after dividing the numerals
    return convertIntToRoman(convertRomanToInt(num1) /  convertRomanToInt(num2));
    
}

}


// function to convert Roman numerals to Integer
function convertRomanToInt(num) {
    var val = 0;

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
    
    for(var i = num.length-1; i >=0; i--) {
        var char = num[i];
  
        if(lastValue > valMap[char]) {
            val -= valMap[char];
        }
        else {
            val += valMap[char];  
        }
        lastValue = valMap[char];
    }
    
    return val;
    
}


// function to convert Integer to Roman numerals
function convertIntToRoman(num) {
    var val = "";
    
    var charValues = [
      {char: "M", value: 1000},
      {char: "D", value: 500},
      {char: "C", value: 100},    
      {char: "L", value: 50},  
      {char: "X", value: 10},
      {char: "V", value: 5},
      {char: "I", value: 1}    
    ];
    
    
    while(num > 0) {
        for(var i = 0; i < charValues.length; i++) {
            var obj = charValues[i];
            if(num - obj.value >= 0) {
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



