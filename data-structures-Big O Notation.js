/* =================1. What is the Big O for this?

1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
You want to find a playmate for your dog, preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden.
Someone yells - "I do, be happy to bring him over"

2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. 
You start with the first person and ask him if he has a golden retriever. 
He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.
=============================================== */

O(1)
O(n)

/* =================2. Even or odd

What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}

=============================================== */
0(1)
time is independent of the input


/* =================3. Are you here?
What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
=============================================== */
O(n^2) 
Nested for loop

/* =================4. Doubler
What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
=============================================== */
Doubler O(n)
One for-loop only iterating through one array.


/* =================5. Naive search
What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
=============================================== */
Naive search O(n)
One for-loop only iterating through one array.

/* =================6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
=============================================== */
O(n^2)
Nested for loops, one array 

/* =================7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
=============================================== */
The function complete takes in one argument, num. 
Runs a for loop and counts odd numbers up to the input number. 
The runtime complexity is O(n). The complexity increases with the size of the number in input.

/* =================8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
=============================================== */
O(log(n))
Sorted array, the function splits the input in half at each iteration.

/* =================9. Random element
What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
=============================================== */

0 (1)
Input remains contant over time. Accepts single array. 

/* =================10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
=============================================== */
0 (n)
Function that accepts a number as a parameter and check the number is prime or not.
Time is dependant on the input.


/* =================11. Tower of Hanoi
The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
Input:

Rod A	Rod B	Rod C
----		
---------		
-------------		
Output:

Rod A	Rod B	Rod C
----
---------
-------------
Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
If you are given 5 disks, how do the rods look like after 7 recursive calls?
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm?
=============================================== */

/* =================12. Iterative version

Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.

=============================================== */


/* ======== 1. Counting Sheep =================
1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence. 
Your program should take a number as input. That number should be the number of sheep you have. 
The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.
=============================================== */
  
console.log('Counting Sheep')
let num = 3;
function sheep(num){
  //base
  if(num == 0){
    console.log("All the sheep jumped over the fence");
  }
  //general
  else{
  console.log(`${num}:Sheep jumped over the fence`);
  sheep(num - 1);
  }
}

sheep(num);

//Big O: O(n)

/* ======== 2. Power Calculator =================
Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
The function returns the value of the base raised to the power of the exponent.
Use only exponents greater than or equal to 0 (positive numbers)
=============================================== */

const powerCalculator = function(base, exponent){
//base
if(exponent < 0){
   return "exponent should be >= 0";
}
if (exponent === 0) {
  return 1;
}

return base * powerCalculator(base, exponent - 1);
};

console.log(`${powerCalculator(10, 2)}`)

//Big O: O(n)


/* ======== 3. Reverse String =================
Write a function that reverses a string. 
Take a string as input, reverse the string, and return the new string.
=============================================== */

function reverseString(str) {
if (str.length === 1) {
  return str;
}
return str.slice(-1) + reverseString(str.slice(0,-1));
};

let str = "Hello";
console.log(reverseString(str));

//Big O: O(n)

/* ======== 4. nth Triangular Number =================
Calculate the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots 
on a side, and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.
=============================================== */

const nthTriangle = function(numDots) {
//base
  if (numDots === 1) {
    return numDots;
  }

return numDots + nthTriangle(numDots-1);
 };

 console.log(nthTriangle(6))

/* ======== 5. String Splitter =================
Write a recursive function that splits a string based on a separator (similar to String.prototype.split).
Don't use JS array's split function to solve this problem.
=============================================== */

console.log('String Splitter')

function stringSplitter(){

}

? //Big O: O(n)
/* ======== 6. Fibonacci =================
=============================================== */

const fibonacciSequence = function(num){
    //base
 if (num <= 0) {
    return "Please enter a number greater than 0";
  }
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }
  return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
};

 console.log(fibonacciSequence(8));

/* ======== 7. Factorial =================
=============================================== */

factorial=(n)=>{
  if(n === 1){
    return 1
  }
  return n * factorial(n-1)
}
console.log(factorial(5))

//Big O: O(n)

/* =================13. Recursive Big O
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.
=============================================== */

Count Sheep: O(n)
Power Calculator: O(n)
Reverse String: O(n)
Triangle: O(n)
Split: O(n) (mostly linear)
Factorial: O(n)
Fibonacci: O(n)

/* =================14. Iterative Big O
Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.
=============================================== */

Count Sheep: O(n)
Power Calculator: O(n)
Reverse String: O(n)
Triangle: O(n)
Split: O(n)
Factorial: O(n)
Fibonacci: O(n)

