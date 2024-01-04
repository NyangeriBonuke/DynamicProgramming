/**
const fib = (n) => {
    if(n <= 2) return 1
    return fib(n-1) + fib(n-2)
}

//Time complexity O(2^n)

*/

//Memoization of Fibonacci

//Time complexity O(n)
//Space complexity O(n)

const fib = (n, memo = {}) => {
    if(n in memo) return memo[n]
    if(n <= 2) return 1
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

console.log(fib(56))