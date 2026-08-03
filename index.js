function opposite(number) {
  return -number;
}

//===============================================================================

function greet() {
  return "hello world!";
}

//===============================================================================

function removeSmallest(n) {
  let min = Math.min(...n);
  let res = [];
  let active = true;

  for (let value of n) {
    if (value == min && active) {
      active = false;
      continue;
    }
    res.push(value);
  }

  return res;
}

//===============================================================================

function findSmallestInt(arr) {
  return Math.min(...arr);
}

//===============================================================================

function positiveSum(arr) {
  return arr.filter(value => value > 0).reduce((sum, value) => sum + value, 0);
}

//===============================================================================

function solution(str) {
  return str.split('').reverse().join('');
}

//===============================================================================

function removeChar(str) {
  return str.slice(1, -1);
}

//===============================================================================

function repeatStr(n, s) {
  return s.repeat(n);
}

//===============================================================================

function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

//===============================================================================

function numberToString(num) {
  return num + "";
}

//===============================================================================

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

//===============================================================================

function multiply(a, b) {
  return a * b;
}

//===============================================================================

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}