// 1. Create a JavaScript function that takes an array of numbers and returns their sum.

// ______________________ Folosind for clasic ______________________

// const calcSum = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// };

// ______________________ Folosind .forEach() ______________________

// const calcSum = function (arr) {
//   let sum = 0;
//   arr.forEach(nr => (sum += nr));

//   return sum;
// };

// ______________________ Folosind .reduce() ______________________

const calcSum = arr => arr.reduce((acc, cur) => acc + cur, 0);

console.log("Exercise 1 result:", calcSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 2. Write a JavaScript function that receives an array of numbers and determines the smallest and largest numbers in it.

// const minOrMax = function (arr) {
//   let minNum = 0;
//   let maxNum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNum) {
//       maxNum = arr[i];
//     }
//     if (arr[i] < minNum) {
//       minNum = arr[i];
//     }
//   }

//   return `The smallest number is ${minNum}, and the largest is ${maxNum}.`;
// };

// ______________________ Folosind .forEach() + Turnary Operator ______________________

const minOrMax = function (arr) {
  if (arr.lenght === 0) {
    return "Array is empty.";
  }

  let result = "";
  let minNum = arr[0];
  let maxNum = arr[0];

  arr.forEach(el => {
    maxNum = el > maxNum ? el : maxNum;
    minNum = el < minNum ? el : minNum;
  });

  return `The smallest number is ${minNum}, and the largest is ${maxNum}.`;
};

console.log("Exercise 2 result:", minOrMax([-3, 4, 0, -375, 17, 5, 47, 9]));

// 3. Implement a JavaScript function that takes a string and checks if it is a palindrome.
// ❓ Palindrom - a sequence of characters that reads the same forwards and backward

const isPalindrom = str =>
  str.split("").reverse().join("") === str ? `${str} is a Palindrom.` : `${str} is not a Palindrom.`;
isPalindrom("exemplu");

console.log("Exercise 3 result:", isPalindrom("radar"));

// 4. Develop a JavaScript function that takes a string and counts the vowels in it.

// const countVowels = function (word) {
//   const vowels = ["a", "e", "i", "o", "u", "ă", "î", "â"];

//   let counts = 0;
//   const wordToLowerCase = word.toLowerCase();

//   for (let i = 0; i < wordToLowerCase.length; i++) {
//     if (vowels.includes(wordToLowerCase[i])) {
//       counts++;
//     }
//   }

//   return `${word} contains ${counts} vowels in it.`;
// };

// ______________________ Folosind .forEach() + Turnary Operator ______________________

const countVowels = function (word) {
  const vowels = ["a", "e", "i", "o", "u", "ă", "î", "â"];

  let counts = 0;
  wordToLowerCase = word
    .toLowerCase()
    .split("")
    .forEach(letter => {
      if (vowels.includes(letter)) {
        counts++;
      }
    });

  return `${word} contains ${counts} vowels in it.`;
};

console.log("Exercise 4 result:", countVowels("example"));

// 5. Build a JavaScript function that takes a number and determines whether it is prime or not.

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("Exercise 5 result:", isPrime(7));

// 6. Construct a JavaScript function that takes a number and an array of numbers, and checks if the number is present in the array.

// const checkNum = function (num, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return `${num} is present in [${arr}]`;
//     } else {
//       return `${num} is not present in [${arr}]`;
//     }
//   }
// };

// ______________________ Refactored Code ______________________

const checkNum = (num, arr) =>
  arr.includes(num) ? `${num} is present in [${arr}]` : `${num} is not present in [${arr}]`;

console.log("Exercise 6 result:", checkNum(1, [1, 2, 3, 4, 5, 6, 7]));

// 7. Create a JavaScript function that takes a number and returns its factorial.

// 8. Design a JavaScript function that takes an array of numbers and returns the first duplicate element. If no duplicate exists, return null.

const firstDuplicate = function (arr) {
  if (!arr.length) return;

  let uniqueNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueNumbers.includes(arr[i])) {
      return `First duplicate element is ${arr[i]}`;
    } else {
      uniqueNumbers.push(arr[i]);
    }
  }
};

console.log("Exercise 8 result:", firstDuplicate([1, 2, 3, 4, 5, 6, 7, 5, 8, 9, 9, 7]));

// 9. Develop a JavaScript function that takes an array of numbers and returns the reversed array.

// const reverseArr = function (arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }

//   return result;
// };

// ______________________ Folosind .reverse() ______________________

const reverseArr = arr => arr.reverse();

console.log("Exercise 9 result:", reverseArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 10. Write a JavaScript function that takes an array of numbers and returns the element that appears most frequently in the array.

// 11. Create a JavaScript function that takes a number as an argument and returns an array with all its divisors.
// ❓ Divizor - un numar care impartit la alt numar da restul zero (PS: orice numar are divizor pe el insusi)

const allDivisors = function (num) {
  let divisors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return `Toti divizorii lui ${num} sunt ${[...divisors]}`;
};

console.log("Exercise 11 result:", allDivisors(18));

// 12. Develop a JavaScript function that takes an array as an argument and returns a new array with duplicate elements removed.

// const removeDuplicates = function (arr) {
//   let uniqueValues = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueValues.includes(arr[i])) {
//       uniqueValues.push(arr[i]);
//     }
//   }

//   return uniqueValues;
// };

// ______________________ Folosind .map() + Turnary Operator ______________________

// const removeDuplicates = arr => {
//   let uniqueValues = [];
//   arr.map(el => (uniqueValues.includes(el) ? uniqueValues : uniqueValues.push(el)));
//   return uniqueValues;
// };

// ______________________ Folosind new Set() + Array.from ______________________

const removeDuplicates = arr => Array.from(new Set(arr));

console.log("Exercise 12 result:", removeDuplicates([1, 2, 3, 3, 4, 5, 6, 6, 6, 7, 8, 4, 7, 5, 8, 9, 10]));

// 13. Write a JavaScript function that takes an array of numbers and transforms it into a string with elements separated by commas.

const toString = arr => arr.slice(" ").join(",");

console.log("Exercise 13 result:", toString([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 14. Create a JavaScript function that takes an array of numbers and sorts it in ascending or descending order.

const sortNumbers = function (arr, order) {
  if (order === "asc") {
    return arr.sort((a, b) => a - b);
  } else if (order === "desc") {
    return arr.sort((a, b) => b - a);
  } else {
    return `Nu ai oferit toate datele`;
  }
};

console.log("Exercise 14 result:", sortNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "desc"));

// 15. Develop a JavaScript function that takes two strings as arguments and returns the number of occurrences of the second string in the first.

const occurrences = function (str1, str2) {
  const occurrence = str1.split(str2);
  const result = occurrence.length - 1;
  return `${str2} appears ${result} times in '${str1}'`;
};

console.log("Exercise 15 result:", occurrences("This is an example for this exercise. This", "This"));

// 16. Design a JavaScript function that takes a string as an argument and returns a new string where uppercase letters are converted to lowercase and vice versa.

// const viceVersa = function (str) {
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === str[i]) {
//       result.push(str[i].toUpperCase());
//     } else if (str[i].toUpperCase() === str[i]) {
//       result.push(str[i].toLowerCase());
//     }
//   }

//   return result.join("");
// };

// ______________________ Folosind .map() + Turnary Operator ______________________

const viceVersa = function (str) {
  return str
    .split("")
    .map(el => (el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()))
    .join("");
};

console.log("Exercise 16 result:", viceVersa("ViCe VerSA"));

// 17. Craft a JavaScript function that takes a string as an argument and returns a new string obtained by reversing the order of words

const reverseWords = str => str.split(" ").reverse().join(" ");

console.log("Exercise 17 result:", reverseWords("This is an Example"));

// 18. Create a function that accesses properties of an object and extracts their values.

// 19. Develop a constructor function named "Book" that takes parameters "title" and "author" and creates an object with these properties.

// 20. Create an object named "grupStudenti" that will contain a list of students represented as objects. Each student object should have two properties: "nume" (representing the student's name) and "note" (a list of numbers representing the student's grades). Implement a method called "calculeazaMedie" within this object that calculates the average grades for each student and displays the results.

const grupStudenti = {
  studenti: [
    {
      nume: "Mihai",
      note: [8, 9, 7, 10]
    },
    {
      nume: "Andrei",
      note: [7, 8, 9, 9]
    },
    {
      nume: "Ioana",
      note: [10, 10, 8, 9]
    }
  ],
  calculeazaMedie() {
    this.studenti.forEach(student => {
      const medie = student.note.reduce((acc, nota) => acc + nota, 0) / student.note.length;
      console.log("Exercise 20 result:", `${student.nume}'s average grade is ${medie.toFixed(2)}.`);
    });
  }
};

grupStudenti.calculeazaMedie();

// 21. Create an array of objects named "products" containing items with properties "name" and "price". Write a JavaScript function to sort these products in ascending order based on their prices.

// 22. Explore the use of async/await in JavaScript to make HTTP requests to an API and handle the received data.

// 23. Create a function that takes two arrays of numbers as arguments and checks if they share at least one common element.

// const checkCommonElement = function (arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return `${arr1[i]} este primul element comun al celor 2 siruri.`;
//       }
//     }
//   }
//   return "Cele 2 siruri nu au nici un element comun";
// };

// ______________________ Folosind .some() + .includes() ______________________

const checkCommonElement = function (arr1, arr2) {
  return arr1.some(el => arr2.includes(el));
};

console.log("Exercise 23 result:", checkCommonElement([1, 2, 3, 4, 5], [5, 6, 7, 8, 9]));

// 24. Develop a function to calculate the sum of elements in an array object. Note that the array can contain other objects.

// 25. Implement a function that sorts an array of objects based on a specific property.

// 26. Create a JavaScript function to find and return the most frequently occurring element in an array.

// 27. Implement a function that takes a number as an argument and returns true if it is a perfect number; otherwise, return false.
// ❓ Numar perfect este atunci cand suma divizorilor (cu excepția sa) este egală cu numărul însuși.

const isItPerfectNum = function (num) {
  let divizori = [];

  for (i = 1; i < num; i++) {
    if (num % i === 0) {
      divizori.push(i);
    }
  }

  const sumaDivizorilor = divizori.reduce((acc, cur) => acc + cur, 0);

  return sumaDivizorilor === num ? `${num} este un numar perfect.` : `${num} nu este un numar perfect.`;
};

console.log("Exercise 27 result:", isItPerfectNum(28));

// 28. Create a JavaScript function that find and return the longest word in a string.

// 29. Create a function that takes an array of numbers and finds the largest prime number in it.

// 30. Design a function that removes all duplicate elements from an array, keeping only the first occurrence of each element.

// 31. Implement a function to check if a given number is a Fibonacci number.

// 32. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// 33. You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// 34. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// 35. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// 36. Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// 37. Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.

// 38. Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// 39. The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// 40. Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// 41. You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number.

// 42. You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// 43. Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.
