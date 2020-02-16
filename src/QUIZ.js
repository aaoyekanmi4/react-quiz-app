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

    {question: "How can I console.log() the name of each cow?", 
    
    codeBox: "const milkcows = ['Daisy','Mary','Bertha','Sue']",
    answers: [
      <span>  <pre>for (let cow in milkcows) {'{'} </pre><pre>  console.log(cow)</pre><pre>{'}'} </pre></span>, 
      <span>  <pre>for (let cow on milkcows) {'{'} </pre><pre>  console.log(cow)</pre><pre>{'}'} </pre></span>, 
      <span> <pre>for (let milkcow of farm){'{'} </pre><pre>console.log(cow)</pre><pre>{'}'} </pre></span>, 
        <span><pre>for (let cow of milkcows){'{'} </pre><pre>console.log(cow)</pre><pre>{'}'} </pre></span> 
      ], 
    correctAnswer: <span><pre>for (let cow of milkcows){'{'} </pre><pre>console.log(cow)</pre><pre>{'}'} </pre></span> ,
    documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",
    topic: "for ...of"},
    {question: "Which array method's implementation is closest to the code below?", 
    
    codeBox: <><pre>function unknown(arr, callback){'{'}</pre>
      <pre>  {`for (var i = 0; i < arr.length; i++)`}{'{'}</pre>
      <pre>  callback(arr[i],i, arr)</pre>
    <pre>{'}'};</pre>
    <pre>}</pre></>,
    answers: [
        "map", 
        "reduce",  
        "all", 
        "forEach", 
      ], 
    correctAnswer: "forEach",
    documentation:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
    topic: "forEach"}
  
    

  
  
  
  ];
  export default QUIZ;