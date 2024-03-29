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
// ❓ Factorialul unui număr este produsul tuturor numerelor întregi pozitive mai mici sau egale cu acel număr.

const factorial = function (num) {
  if (num < 0) return "Factorial is not defined for negative numbers.";
  let result = 1;

  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
};

console.log("Exercise 7 result:", factorial(8));

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

const extractPropertyValues = function (obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Input is not a valid object.";
  }
  const values = [];

  for (let i = 0; i < Object.keys(obj).length; i++) {
    const key = Object.keys(obj)[i];
    values.push(obj[key]);
  }

  return values;
};

console.log(
  "Exercise 18 result:",
  extractPropertyValues({
    name: "John",
    age: 25,
    city: "New York"
  })
);

// 19. Develop a constructor function named "Book" that takes parameters "title" and "author" and creates an object with these properties.

function Book(title, author) {
  this.title = title;
  this.author = author;
}

const myBook = new Book("Atomic Habits", "James Clear");

console.log("Exercise 19 result:", myBook);

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

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Căști", price: 100 },
  { name: "Aparat foto", price: 500 }
];

const sortProducts = arr => products.sort((a, b) => a.price - b.price);

console.log("Exercise 21 result:", sortProducts(products));

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

const calculateArraySum = arr => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (Array.isArray(element)) {
      sum += calculateArraySum(element);
    } else if (typeof element === "object" && element !== null) {
      sum += calculateArraySum(Object.values(element));
    } else if (typeof element === "number") {
      sum += element;
    }
  }

  return sum;
};

console.log("Exercise 24 result:", calculateArraySum([1, 2, { a: 3, b: [4, 5, { c: 6 }], d: 7 }, 8]));

// 25. Implement a function that sorts an array of objects based on a specific property.

const sortByProperty = (arr, property) => arr.sort((a, b) => a[property] - b[property]);

console.log("Exercise 25 result:", sortByProperty(products, "price"));

// 26. Create a JavaScript function to find and return the most frequently occurring element in an array.

const findMostFrequentElement = arr => {
  if (!arr.length === 0) return;

  const frequencyElements = {};

  arr.forEach(el => {
    if (frequencyElements.hasOwnProperty(el)) {
      frequencyElements[el] = frequencyElements[el] + 1;
    } else {
      frequencyElements[el] = 1;
    }
  });

  let mostFrequentElement = null;
  let maxFrequency = 0;

  Object.keys(frequencyElements).forEach(key => {
    if (frequencyElements[key] > maxFrequency) {
      mostFrequentElement = key;
      maxFrequency = frequencyElements[key];
    }
  });

  return mostFrequentElement;
};

console.log("Exercise 26 result:", findMostFrequentElement([1, 2, 3, 4, 1, 2, 2, 3, 4, 4, 4]));

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

const longestWord = function (str) {
  const toArray = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < toArray.length; i++) {
    if (toArray[i].length > longestWord.length) {
      longestWord = toArray[i];
    }
  }

  return `"${longestWord}" este cel mai lung cuvant.`;
};

console.log("Exercise 28 result:", longestWord("Finde the longest word from this string."));

// 29. Create a function that takes an array of numbers and finds the largest prime number in it.

function isPrime2(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

const largestPrimeNum = function (arr) {
  let primeNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (isPrime2(arr[i])) {
      primeNumbers.push(arr[i]);
    }
  }

  return primeNumbers.length > 0 ? primeNumbers.sort((a, b) => a - b).pop() : null;
};

console.log("Exercise 29 result:", largestPrimeNum([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

// 30. Design a function that removes all duplicate elements from an array, keeping only the first occurrence of each element.

const removeDuplicateButFirst = arr => [...new Set(arr)];

console.log("Exercise 30 result:", removeDuplicateButFirst([1, 2, 3, 3, 4, 5, 6, 6, 7, 5, 5, 8, 9, 10, 11, 11]));

// 31. Implement a function to check if a given number is a Fibonacci number.

// ❓ Un număr Fibonacci este un număr într-o secvență numerică numită "șirul lui Fibonacci". În această secvență, fiecare număr este suma celor două numere anterioare.

const fibonacciNum = function (arr, num) {
  if (!arr.includes(num)) return `${num} nu este inclus în șirul: [${arr}]`;
  const indexOfNum = arr.findIndex(el => el === num);

  for (let i = 0; i < arr.length; i++) {
    const sum = arr.at(indexOfNum - 1) + arr.at(indexOfNum - 2);

    if (sum === num) {
      return `${num} este un număr Fibonacci.`;
    } else {
      return `${num} nu este un număr Fibonacci.`;
    }
  }
};

// ______________________ Folosind .slice() + .reduce() ______________________

// function fibonacciNum(arr, num) {
//   if (num < 2) {
//     return "Numărul ar trebui sa fie mai mare decât doi.";
//   }

//   const lastTwoNumbers = arr.slice(num - 2, num);
//   const sum = lastTwoNumbers.reduce((acc, num) => acc + num, 0);

//   return sum;
// }

console.log("Exercise 31 result:", fibonacciNum([0, 1, 1, 2, 3, 5, 7, 8, 13, 21, 34], 8));

// 32. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const sumOfNum = function (num) {
  if (num <= 1) return `${num} trebuie să fie mai mare decât 1.`;

  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }

  return `Suma numerelor de la 1 la ${num} este ${sum}`;
};

console.log("Exercise 32 result:", sumOfNum(35));

// 33. You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

const findMiddleCharacter = function (word) {
  const middle = Math.floor(word.length / 2);

  if (word.length < 2) return;

  return word.length % 2 === 0 ? word[middle - 1] + word[middle] + "" : word[middle];
};

console.log("Exercise 33 result:", findMiddleCharacter("abcdef1234"));

// 34. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

const sumOfIntegers = (a, b) => {
  if (a === b) return a;

  let sum = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) sum += i;

  return sum;
};

console.log("Exercise 34 result:", sumOfIntegers(-3, 4));

// 35. Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

const uniqueCharacters = str => [...new Set(str.toLowerCase().split(""))].join("");

console.log("Exercise 35 result:", uniqueCharacters("This is an example."));

// 36. Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.

const sumArrayValues = arr => arr.reduce((acc, current) => acc + +current, 0);

console.log("Exercise 36 result:", sumArrayValues([1, "2", "3", 4, "5"]));

// 37. Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

const sumOfTwoNum = (arr, num) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return [arr.indexOf(arr[i]), arr.indexOf(arr[j])];
      }
    }
  }
};

console.log("Exercise 37 result:", sumOfTwoNum([11, 16, 35, 7, 24, 5, 14, 9], 18));

// 38. The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const convertToNewStr = str => {
  let uniqueCharacters = [];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (uniqueCharacters.includes(str[i])) {
      result.push(")");
    } else {
      uniqueCharacters.push(str[i]);
      result.push("(");
    }
  }

  return result.join("");
};
console.log("Exercise 38 result:", convertToNewStr("This is an example."));

// 39. Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

// 40. You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number.

const findeDiferentNum = function (arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const l = sorted.length;

  return sorted[0] !== sorted[1] ? sorted[0] : sorted[l - 1];
};

console.log("Exercise 40 result:", findeDiferentNum([1, 1, 1, 1, 1, 12, 1, 1, 1, 1]));

// 41. You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortOddNumbers(arr) {
  let oddNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
  }

  oddNumbers.sort((a, b) => a - b);
  let oddNumbersi = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i] = oddNumbers[oddNumbersi++];
    }
  }

  return arr;
}

console.log("Exercise 41 result:", sortOddNumbers([5, 2, 8, 3, 1, 7]));

// 42. Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const calcWordScore = word => {
  let points = 0;

  word.split("").forEach(letter => {
    const index = alphabet.indexOf(letter);
    points += index + 1;
  });

  return points;
};

const highestScoringWord = str => {
  let scores = [];

  const wordAndScorePair = str.split(" ").forEach(word => scores.push([calcWordScore(word), word]));

  const sortScores = scores.sort((a, b) => a[0] - b[0]);
  return sortScores[sortScores.length - 1][1];
};

console.log("Exercise 42 result:", highestScoringWord("This is an example"));
