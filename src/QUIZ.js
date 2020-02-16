import React from 'react';



const QUIZ = [{
    question: "Which iterative method returns a new array with ALL values of the example array greater than 6?", 
    codeBox: "const numbers = [5,6,7,8,9,10]",
    answers: ["numbers.filter(num => num > 6);", "numbers.find(num => num > 6);", "numbers.reduce(num => num > 6);", "numbers.map(num => num > 6);"], 
    correctAnswer: "numbers.filter(num => num > 6);", 
    documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
    topic: "Array.prototype.filter()"
    },
    
    {question: "Which method will NOT mutate the example array?", 
    codeBox: "const numbers = [11,12,13,14,15]",
    answers: ["numbers.pop();", "numbers.shift();", "numbers.push(16);", "numbers.concat(16);"], 
    correctAnswer: "numbers.concat(16);",
    documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat",
    topic: "Array.prototype.concat()"
  },
  
    {question: "Which method can I use to add an element to the front of an array?", 
    
    codeBox: "const numbers = [5,6,7,8,9,10]",
    answers: ["push", "shift", "pop", "unshift"], 
    correctAnswer: "unshift",
    documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift",
    topic: "Array.prototype.unshift()"
  },

    {question: "Find the expression which evaluates to true.", 
    
    codeBox: "const numbers = [1,2,3,4,5]",
    answers: [
        "numbers.filter(num => num < 6);", 
        "numbers.forEach(num => num === 5);", 
        "numbers.some(num => num > 2);", 
        "numbers.every(num => num > 2);"
      ], 
    correctAnswer: "numbers.some(num => num > 2);",
    documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
    topic: "Array.prototype.some()"
  },

    {question: "What array method can I use to add a last name to each family member?", 
    
    codeBox: "const family = ['Bill','Mary','John','Susie']",
    answers: [
            "family.reduce(firstName => firstName + ' Williams')",
            "family.map(firstName => firstName + ' Williams')",
            "family.sort(firstName => firstName + ' Williams')",
            "family.append(firstName => firstName + ' Williams')",
            
      ], 
    correctAnswer:"family.map(firstName => firstName + ' Williams')",
    documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    topic: "Array.prototype.map()"},
    {question: "Which array method has the highest runtime complexity?", 
    

    answers: [
        "push", 
        "pop",  
        "shift", 
        "They are all the same", 
      ], 
    correctAnswer: "shift",
    documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
    topic: "forEach"}
  
    

  
  
  
  ];
  export default QUIZ;