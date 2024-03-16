// Step One: Simplifying Expressions

// 1. O(n+10)
// You want to ignored the Constant 10, and rewrite it as O(n).

// 2. O(100*n)
// It is multiplied by 100, but you can simplify it to O(n)

// 3. O(25)
// It is a constant-time complexities, so it can be simplified to O(1).

// 4. O(n^2 + n^3)
// We want the fastest term growth as n increase, so we would pick O(n^3).

// 5. O(n+n+n+n)
// This expression cane be simplified to O(4n), which gives you a constant and it doesn't affect
// the growth rate so we can drop the constant and rewrite it as O(n).

// 6. O(1000*log(n)+n)
// The dominate term of the expression is 1000(log(n)), when n becomes large.

// 7. O(1000*n*log(n)+n)
// The dominate term of the expression is (1000 * n * log(n)), the alorithm grows as n increases.

// 8. O(2^n + n^2)
// Time complexity is O(2^n), as the growth will be at large when n becomes greater.

// 9. O(5 + 3 + 1)
// The constant adds up to O(9), which the constant doesn't affect the growth rate, so it's 
// simplified to O(1).

// 10. O(n + n^(1/2) + n^2 + n * log(n)^10)
// The time complexity is O(n*log(n)^10), as it grows the fastest with it's exponent.


// Step Two: Calculating Time Complexity

function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
//   The time complexity of this function is O(n)

  function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }
// The time complexity of this function is O(max(n,10)), because the function iterate at least 10 times

  function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }
//   The time complexity of this function is O(min(n,10))

  function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
//   The time complexity of this function is O(n) as it iterates through each element of the input.


  function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }
//   The time complexity of this function is O(n^2), as it iterate subtotalArray and then iterate over subtotal


  function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }
//   The time complexity of this function is O(n)


// Part 3 - Short Answer

// 1. True or False: n^2 + n is O(n^2).
// True

// 2. True or false: n^2 * n is O(n^3).
// True

// 3. True or false: n^2 + n is O(n).
// False

// 4. What’s the time complexity of the .indexOf array method?
// O(n)

// 5. What’s the time complexity of the .includes array method?
// O(n)

// 6. What’s the time complexity of the .forEach array method?
// O(n)

// 7. What’s the time complexity of the .sort array method?
// O(n log n)

// 8. What’s the time complexity of the .unshift array method?
// O(n)

// 9. What’s the time complexity of the .push array method?
// O(1)

// 10. What’s the time complexity of the .splice array method?
// O(n)

// 11. What’s the time complexity of the .pop array method?
// O(1)

// 12. What’s the time complexity of the Object.keys() function?
// O(n)

// Bonus

// 13. What's the space complexity of the Object.keys() function?
// O(n)