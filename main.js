// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){

    if (num1 > num2) {
        return num1 ;
    }
    else if (num2 > num1) {
        return num2 ;
    }
};


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){

    if (num1 > num2 && num1 > num3) {
        return num1 + " is largest of the three numbers";
    }
    else if (num2 > num1 && num2 > num3) {
        return num2 + " is largest of the three numbers";
    }
    else if (num3 > num1 && num3 > num2) {
        return num3  + " is largest of the three numbers";
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
// || = is used to signify "or"

function isVowel(char) {
   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
       return true;
   } else
       return false;
};

// Justin's variation says that any character that does not equal (a consonant) to "a" where the index number is 0 in that string so on until "u", the
// the returned answer will be false.
// function isVowel(char){
//     return ("aeiou".indexOf(char)) >= 0;
//     }

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

var myArray = [];

function rovarspraket(phrase){
    var x = phrase.split('');
    console.log(x);

    x.forEach(function(letter) {
        if ("aeiou ".indexOf(letter) < 0) {
            myArray.push(letter + 'o' + letter);
        }
        else if ("aeiou ".indexOf(letter) >= 0) {
            myArray.push(letter);
        }
    })
    console.log(myArray.join(''));
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numArray){
    var answer = numArray.reduce(function(a,b) {
        return a + b;
    })
return answer;
}

function multiply(numArray2){
    var answer = numArray2.reduce(function(a,b) {
        return a * b;
    })
 return answer;
};

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(y){
    return y.split('').reverse().join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
// sort function only sorts values as string in alphabetical and ascending order
function findLongestWord(words){
    var longest = words.reduce(function(a,b) {
        if (a.length > b.length)
            return a;
        else
            return b;
    })
   return longest.length;
};

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    var compareArray = [];
    var compare = words.forEach(function(word) {
        if (word.length > i) {
            compareArray.push(word);}
    })
    return compareArray;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
// {} = new Object();
// charAt() method returns the character at the specified index in a string.
// when you set the frequencyVariables[character] = 1, that

// From Google ---> Disregard!
// function charFreq(string){
//     var frequencyVariables = new Object();
//         for (var i=0; i < string.length; i++) {
//                 var character = string.charAt(i);
//               if (frequencyVariables[character]) {
//                 frequencyVariables[character]++;}

//              else {frequencyVariables[character] = 1}
//              }
//         return frequencyVariables;
//     };

// using [] just incase the variable is a number, has spaces, and if you want to treat the object as a string.
function charFreq(string){
    var frequencyVariables = {};
    string.split('').forEach(function(character){
        if (frequencyVariables[character]) {
            frequencyVariables[character]++;
        } else{
            frequencyVariables[character] = 1;
        }
    });
    return frequencyVariables;
}













