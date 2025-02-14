// //RETURN NEGATIVE
//
// // function makeNegative(num) {
// //     let check = Math.sign(num)
// //     return check === 1 ? (num * -1) : num
// // }
// //
// // console.log(makeNegative(4))
//
//
// //FIX CODE
//
// // function multiply(a, b){
// //     return (a * b)
// // }
// //
// // console.log(multiply(2, 3))
//
//
// //EVEN OR ODD
//
// // function evenOrOdd(number) {
// //     return (number % 2 === 0) ? "Even" : "Odd";
// // }
//
//
// // FILTER
//
// // function gooseFilter(birds) {
// //     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// //
// //     // original
// //     // const newFilteredArray = birds.filter((b) => b !== geese[0] && b !== geese[1] && b !== geese[2]
// //     //     && b !== geese[3] && b !== geese[4])
// //     //
// //     // return newFilteredArray
// //
// //     // refactored
// //
// //     console.log(birds.filter(b => !geese.includes(b)))
// // }
// // gooseFilter(["Mallard", "Hook Bill", "African", "Roman Tufted", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
//
//
// //SUM OF POSITIVE
//
// // function positiveSum(arr) {
// //     let positiveNumbers = arr.filter(function (el) {
// //         if (el >= 0) {
// //             return true;
// //         } else return false;
// //     });
// //
// //     let positiveSum = 0
// //     for(let i = 0; i < positiveNumbers.length; i++) {
// //         positiveSum += positiveNumbers[i];
// //     }
// //
// //     return positiveSum
// // }
//
// //REVERSED STRINGS
//
// // function solution(str) {
// //     return str.split('').reverse().join('')
// // }
// //
// // let str = 'world'
// // console.log(solution(str))
//
// //NUMBER TO A STRING
//
// // function numberToString(num) {
// //     // Return a string of the number here!
// //     return num.toString()
// // }
// //
// // let num = 7
// // let numberString = (numberToString(num))
// // console.log(typeof numberString)
//
// //BOOLEAN TO A STRING
//
// // function boolToWord(bool){
// //     return bool === true ? 'Yes' : 'No'
// // }
// //
// // console.log(boolToWord(false))
//
// //OPPOSITE NUMBER
//
// // function opposite(number) {
// //     return -number
// // }
//
// //REMOVE FIRST AND LAST CHARACTER
//
// // function removeChar(str){
// //     return str.slice(1, -1)
// // }
// //
// // console.log(removeChar("Yana"))
//
// //SQUARE SUM
// //
// // function squareSum(numbers){
// //     let result = 0;
// //     debugger
// //     for (let i = 0; i < numbers.length; i++) {
// //         result += (numbers[i] * numbers[i]);
// //     }
// //     return result;
// // }
//
// // console.log(squareSum([1, 2, 3]))
//
// //First Iteration: When i = 0, numbers[i] is 1, so result becomes 0 + (1 * 1) = 1.
// //Second Iteration: When i = 1, numbers[i] is 2, so result becomes 1 + (2 * 2) = 5.
// //Third Iteration: When i = 2, numbers[i] is 3, so result becomes 5 + (3 * 3) = 14.
//
// //STRING REPEAT
//
// // function repeatStr (n, s) {
// //     return s.repeat(n);
// // }
// //
// // console.log(repeatStr(3, 'hello'))
//
// //SUMMATION
//
// // const summation = function(num) {
// //     let result = 0
// //     debugger
// //     for(let i = 1; i <= num ; i++) {
// //         result += i
// //     }
// //
// //     return result
// // }
// //
// // console.log(summation(10))
//
//
// //SMALLEST INTEGER IN AN ARRAY
//
//
// // function findSmallestInt(arr) {
// //     return Math.min(...arr)
// // }
// //
// // console.log(findSmallestInt([1, 2, 3, -9]))
//
// //REMOVE STRING SPACES
//
// // function noSpace(string) {
// //     return string.split(" ").join("")
// // }
// //
// // console.log(noSpace('  no    yes   '))
//
//
// //COUNT SHEEP (TRUE VALUES)
//
// // function countSheeps(sheep) {
// //     return sheep.filter(Boolean).length
// // }
// //
// // console.log(countSheeps([true,  true,  true,  false,
// //     true,  true,  true,  true ,
// //     true,  false, true,  false,
// //     true,  false, false, true ,
// //     true,  true,  true,  true ,
// //     false, false, true,  true]))
//
// //BASIC MATH. OPERATIONS
//
// // function basicOp(operation, value1, value2) {
// //     return operation === '+'
// //         ? value1 + value2
// //         : operation === '-'
// //             ? value1 - value2
// //             : operation === '*'
// //                 ? value1 * value2
// //                 : operation === '/'
// //                     ? value1 / value2
// //                     : undefined
// // }
// //
// //
// // console.log(basicOp('-', 2, 3))
//
// //STRING TO A NUMBER
//
// // const stringToNumber = function(str){
// //    return Number(str)
// //     // return +str
// //     // return parseInt(str)
// // }
//
//
// //CONVERT A NAME INTO INITIALS
//
// // function abbrevName(name) {
// //     const result = (name.split(" ")[0][0] + "." + name.split(" ")[1][0]).toUpperCase()
// //     // return result
// //     console.log(result)
// // }
// //
// // abbrevName("sam harris")
//
// //SORT AND STAR
//
// // You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII
// // values of the chars) and then return the first value.
// // The returned value must be a string, and have "***" between each of its letters.
// // You should not remove or add elements from/to the array.
//
// // let array = ["bitcoin", "Take", "Over", "the", "world", "maybe", "who", "knows", "perhaps"]
// //
// // function twoSort(array) {
// //     let res = array.sort()[0].split('').join("***")
// //     return res
// // }
//
// //CENTURY FROM YEAR
//
// // function century(year) {
// //     const divisionRemainder = (year % 100)
// //
// //     return divisionRemainder > 0
// //         ? Math.floor(year / 100) + 1
// //         : (year / 100)
// // }
// //
// // console.log(century(1200))
// //
// // function century(year) {
// //     return Math.ceil(year/100);
// // }
//
// //HOW MANY LITERS IN TOTAL (0.5 litres of water per hour of cycling)
//
// // function litres(time) {
// //     return Math.floor(time * 0.5)
// // }
// //
// // console.log(litres(1.6))
//
// //CONVERT NUMBER TO A REVERSED ARRAY OF DIGITS
//
// // Option 1
//
// // function digitize(n) {
// //     return String(n).split('').reverse().map(el => Number(el))
// // }
//
// // Option 2
//
// // function digitize(n) {
// //     return String(n).split('').map(Number).reverse()
// // }
//
// // console.log(digitize(235345))
//
// //Make a function that will return a greeting statement that uses an input;
// // your program should return, "Hello, <name> how are you doing today?".
//
// // function greet(name){
// //     return `Hello, ${name} how are you doing today?`
// // }
// //
// // console.log(greet('Yana'))
//
//
// //A NEEDLE IN A HAYSTACK
// //Write a function findNeedle() that takes an array full of junk but containing one "needle"
// // After your function finds the needle it should return a message (as a string) that says:
// // "found the needle at position " plus the index it found the needle
//
// // function findNeedle(haystack) {
// //     const index = haystack.indexOf("needle")
// //     return `found the needle at position ${index}`
// // }
// //
// // console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))
//
// //Given a non-empty array of integers, return the result of multiplying the values together in order
//
// // function grow(x) {
// //     return x.reduce((acc, currValue) => {
// //         return acc * currValue
// //     })
// // }
// //
// // console.log(grow([4, 1, 1, 1, 4]))
//
// //Given an array of integers, return a new array with each value doubled.
//
// // function maps(x) {
// //     return x.map((n) => n * 2)
// // }
// //
// // console.log(maps([1, 2, 3]))
//
// //Write a function that takes an array of numbers and returns the sum of the numbers.
// // The numbers can be negative or non-integer. If the array does not contain any
// // numbers then you should return 0.
//
// // function sum(numbers) {
// //     return numbers.reduce((acc, prevValue) => {
// //         return acc + prevValue
// //     }, 0)
// // }
// //
// // console.log(sum([]))
//
// // function greet() {
// //     return 'hello world!'
// // }
// //
// // greet()
//
// //REVERSED WORDS
//
// // function reverseWords(str){
// //     return str.split(' ').reverse().join(' ')
// // }
// //
// // console.log(reverseWords("The greatest victory is that which requires no battle"))
//
// //Find numbers which are divisible by given number
//
// // function divisibleBy(numbers, divisor) {
// //     return numbers.filter(n => n % divisor === 0)
// // }
// //
// // console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))
//
// //LOVE FUNC
//
// /* function lovefunc(flower1, flower2){
//      return (flower1 + flower2) % 2 !== 0
//  }
//
//  console.log(lovefunc(2, 7))*/
//
// // Create a function that checks if a number n is divisible by two numbers x AND y.
//
// /* function isDivisible(n, x, y) {
//      return ((n % x === 0) && (n % y === 0))
//  }
//
//  console.log(isDivisible(100, 3, 4))*/
//
// // OOP
// // Object Oriented Piracy
//
// // class Ship {
// //     constructor(draft, crew) {
// //         this.draft = draft
// //         this.crew = crew
// //     }
// //
// //     isWorthIt() {
// //         const goldDraft =  this.draft - (this.crew * 1.5)
// //         return goldDraft > 20
// //     }
// // }
// //
// // const titanic = new Ship(100, 10)
// // console.log(titanic.draft - (titanic.crew * 1.5))
// // console.log(titanic.isWorthIt())
//
// // Classy Classes
//
// // class Person {
// //     constructor(name, age) {
// //         this.name = name
// //         this.age = age
// //     }
// //
// //     getInfo() {
// //         return `${this.name}s age is ${this.age}`
// //     }
// //
// //     get info() {
// //         return this.getInfo()
// //     }
// // }
// //
// // const person = new Person('Yana', 35)
// // console.log(person.getInfo())
//
// // Basic subclasses - Adam and Eve
//
// // class God {
// //     static create(){
// //         const adam = new Man()
// //         const eve = new Woman()
// //         return [adam, eve]
// //     }
// // }
// //
// // class Human {
// //     constructor(name) {
// //         this.name = name
// //     }
// // }
// //
// // class Man extends Human {
// //     constructor(name = 'Adam') {
// //         super(name);
// //     }
// // }
// //
// // class Woman extends Human {
// //     constructor(name = 'Eve') {
// //         super(name);
// //     }
// // }
//
// // Color Ghost
//
// // class Ghost {
// //     constructor() {
// //         const colors = ['white', 'yellow', 'purple" or "red"]
// //         this.color = Math.floor(Math.random() * 10)
// //     }
// // }
// //
// // const ghost = new Ghost()
// // ghost.color
//
// // let array = [-1, -3, -2000000]
// //
// // function solution(A) {
// //     const filteredIntegers = A.filter((int) => int > 0)
// //
// //     let smallestMissing = 1;
// //     while (filteredIntegers.includes(smallestMissing)) {
// //         smallestMissing++;
// //     }
// //
// //     return smallestMissing;
// // }
// //
// // console.log(solution(array))
//
// let S = '77'
//
// function solution(S) {
//     let splitString = (S.split(""))
//     let numbers = splitString.map(str => Number(str))
//     let filteredNumbers = numbers.filter(n => n > 0 && n < 10)
//     console.log(filteredNumbers)
//
//     if (filteredNumbers.length > 0 && filteredNumbers.length < 21) {
//
//         const firstNumbers = new Set()
//         const secondNumbers = new Set()
//
//         for (let number of filteredNumbers) {
//             const newNumber = parseInt(number)
//
//             if (newNumber !== 0) {
//                 firstNumbers.add(newNumber)
//             }
//
//             if (newNumber % 2 === 1) {
//                 secondNumbers.add(newNumber)
//             }
//         }
//
//         console.log(firstNumbers)
//         console.log(secondNumbers)
//
//
//         const firstNumbersCount = firstNumbers.size
//         const secondNumbersCount = secondNumbers.size
//
//         return Math.min(firstNumbersCount, secondNumbersCount)
//     }
// }
//
//
// console.log(solution(S))
//
//
//
//
//
//
//
//
//


// function solution(T) {
//     // Implement your solution here
//     this.id = id;
//     this.left = null;
//     this.right = null;
//
//     if (TreeNode === null) {
//         return null
//     }
//
//     let result = {};
//
//     result.x = TreeNode.id
//     result.l = convert(TreeNode.left)
//     result.r = convert(TreeNode.right)
//
//     return result;
// }
//
// return convert(T)
//
// }
//
// let root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.right = new TreeNode(3)
// root.left.left = new TreeNode(4)
// root.right.right = new TreeNode(5)
//
// let result = solution(root)
// console.log(JSON.stringify(result, null, 2))

// Vowel Count
// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// function getCount(str) {
//     const vowels = [
//         'a', 'e', 'i', 'o', 'u'
//     ]
//     const lowerCaseString = str.toLowerCase()
//     const stringArray = lowerCaseString.split('')
//
//     let count = 0;
//     stringArray.forEach((char) => {
//         if(vowels.includes(char)) {
//             count++
//         }
//     })
//
//     return count
// }

// console.log(getCount('YanaBarhatauuuu'))

// Find the unique number

// function stray(numbers) {
//     return numbers.reduce((acc, num) =>
//         numbers.indexOf(num) === numbers.lastIndexOf(num) ? num : acc
//     )
// }
//
//
// console.log(stray([17, 17, 3, 17, 17, 17, 17]))

// remove vowels
// a, e, i, o, u

// option 1
// function disemvowel(str) {
//     const vowels = [
//         'a', 'e', 'i', 'o', 'u',
//         'A', 'E', 'I', 'O', 'U'
//     ]
//
//     const strArray = str.split('')
//     const newArray = strArray.filter(letter => !vowels.includes(letter))
//     const res = newArray.join('')
//     return res
// }
//
// // option 2
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
// }
//
// console.log(disemvowel('HELLOuueiIIu'))

// SQUARE EVERY DIGIT
// function squareDigits(num){
//     let res = ''
//     for (let i = 0; i < num.toString().length; i++) {
//         let digit = Number(num.toString()[i])
//         res += digit * digit
//     }
//
//     return Number(res)
//
// }
//
// console.log(squareDigits(23))

// HIGHEST AND LOWEST
// function highAndLow(numbers) {
//     let arrayOfStrings = numbers.split(" ")
//     const arrayOfNumbers = arrayOfStrings.map(number => {
//         return parseInt(number)
//     })
//     const highNumber = Math.max(...arrayOfNumbers)
//     const lowNumber = Math.min(...arrayOfNumbers)
//     return `${highNumber} ${lowNumber}`
// }
//
// console.log(highAndLow("1 2 3 4 5"))

// function highAndLow(numbers) {
//     let arrayOfStrings = numbers.split(" ")
//     const arrayOfNumbers = arrayOfStrings.map(Number)
//     const highNumber = Math.max(...arrayOfNumbers)
//     const lowNumber = Math.min(...arrayOfNumbers)
//     return `${highNumber} ${lowNumber}`
// }
//
// console.log(highAndLow("1 2 3 4 5"))

// Replace With Alphabet Position

// function alphabetPosition(text) {
//     const upperText = text.toUpperCase()
//     const regex = /[^a-zA-Z]/
//
//     //check if there is any character that is NOT a letter
//
//     let result = []
//     for(let i = 0; i < upperText.length; i++) {
//         if(!(regex.test(upperText[i]))) {
//             result.push(upperText[i].charCodeAt(0) - 64)
//         }
//     }
//
//     const res = result.join(' ')
//     return res
// }
//
// console.log(alphabetPosition('ABcDICI ,.>'))










