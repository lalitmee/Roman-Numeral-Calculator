(function () {
    'use strict';

    describe('Test for Roman Calculator Fuction', function () {
        it('Simple Addition of I', function () {
            expect(romanNumAdd('I','I')).toBe('II');
        });
        
        it('Simple Subtraction of I', function () {
            expect(romanNumSubtract('II','I')).toBe('I');
        });
        
        it('Addition of I to II', function () {
            expect(romanNumAdd('I','II')).toBe('III');
        });
        
        it('III Subtract I', function () {
            expect(romanNumSubtract('III','I')).toBe('II');
        });
        
        it('Addition of I to III', function () {
            expect(romanNumAdd('I','III')).toBe('IV');
        });
        
        it('Addition of I to IV', function () {
            expect(romanNumAdd('I','IV')).toBe('V');
        });
        
        it('Subtract I form IV', function () {
            expect(romanNumSubtract('IV','I')).toBe('III');
        });
        
    });
    
    describe('Convert Roman Numberal to Integer', function () {
        it('Convert I to 1', function () {
            expect(convertRomanToInt('I')).toBe(1);
        });
        
        it('Convert II to 2', function () {
            expect(convertRomanToInt('II')).toBe(2);
        });
        
        it('Convert V to 5', function () {
            expect(convertRomanToInt('V')).toBe(5);
        });
        
        it('Convert IV to 4', function () {
            expect(convertRomanToInt('IV')).toBe(4);
        });
        
        it('Convert VI to 6', function () {
            expect(convertRomanToInt('VI')).toBe(6);
        });
        
        it('Convert VII to 7', function () {
            expect(convertRomanToInt('VII')).toBe(7);
        });
        
        it('Convert XI to 11', function () {
            expect(convertRomanToInt('XI')).toBe(11);
        });
        
        it('Convert XLIV to 44', function () {
            expect(convertRomanToInt('XLIV')).toBe(44);
        });
        
        it('Convert XCVIII to 98', function () {
            expect(convertRomanToInt('XCVIII')).toBe(98);
        });
        
        it('Convert DCCCXC to 890', function () {
            expect(convertRomanToInt('DCCCXC')).toBe(890);
        });
        
        it('Convert MDCCC to 1800', function () {
            expect(convertRomanToInt('MDCCC')).toBe(1800);
        });
        
    });
    
     describe('Convert Integer to Roman Numeral', function () {
         
        it('Convert 1 to I', function () {
            expect(convertIntToRoman(1)).toBe('I');
        });
         
        it('Convert 2 to II', function () {
            expect(convertIntToRoman(2)).toBe('II');
        });
         
        it('Convert 5 to V', function () {
            expect(convertIntToRoman(5)).toBe('V');
        });
         
        it('Convert 6 to VI', function () {
            expect(convertIntToRoman(6)).toBe('VI');
        });
         
        it('Convert 4 to IV', function () {
            expect(convertIntToRoman(4)).toBe('IV');
        });
         
        it('Convert 7 to VII', function () {
            expect(convertIntToRoman(7)).toBe('VII');
        });
         
        it('Convert 10 to X', function () {
            expect(convertIntToRoman(10)).toBe('X');
        });
         
        it('Convert 12 to XII', function () {
            expect(convertIntToRoman(12)).toBe('XII');
        });
        
        it('Convert 14 to XIV', function () {
            expect(convertIntToRoman(14)).toBe('XIV');
        });
         
        it('Convert 24 to XXIV', function () {
            expect(convertIntToRoman(24)).toBe('XXIV');
        });
         
        it('Convert 44 to XLIV', function () {
            expect(convertIntToRoman(44)).toBe('XLIV');
        });
         
        it('Convert 9 to IX', function () {
            expect(convertIntToRoman(9)).toBe('IX');
        });
         
        it('Convert 890 to DCCCXC', function () {
            expect(convertIntToRoman(890)).toBe('DCCCXC');
        });
         
        it('Convert 1800 to MDCCC', function () {
            expect(convertIntToRoman(1800)).toBe('MDCCC');
        });
         
     });
    
    describe('Test mass conversion of all valid roman numerals 1 to 3999', function () {
        it('Load valid roman numberals from JSON and test converison from roman to int', function (done) {
            var allRoman = jQuery.getJSON("spec/roman.json", function (data) {
                data.array.forEach(function (numeralPair) {
                    expect(convertRomanToInt(numeralPair.roman)).toBe(numeralPair.int);
                })
                done();
            });
        });
        
         it('Load valid roman numberals from JSON and test converison from int to roman', function (done) {
            var allRoman = jQuery.getJSON("spec/roman.json", function (data) {
                data.array.forEach(function (numeralPair) {
                    expect(convertIntToRoman(numeralPair.int)).toBe(numeralPair.roman);
                })
                done();
            });
        });
        
    });
    
    describe('Test convering to and from roman numerals between 1 and 3999', function () {
        it('Convert roman numerals 1 to 3999', function () {
            for(var i = 1; i < 4000; i++) {
                expect(convertRomanToInt(convertIntToRoman(i))).toBe(i);
            }
            
        });
        
    });
})();