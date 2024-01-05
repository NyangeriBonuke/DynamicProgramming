//Time Complexity O(2^n+m)
//Space Complexity O(n+m)

/*
const gridTraveller = (m, n) => {
    if(m === 1 && n === 1) return 1
    if(m === 0 || n === 0) return 0
    return gridTraveller(m-1, n) + gridTraveller(m, n-1)
}
*/

//Memoization of Grid Traveller

//Time Complexity O(m*n)
//Space Complexity O(m+n)

const gridTraveller = (m, n, memo={}) => {
    const key = m + ',' + n
    if(key in memo) return memo[key]
    if(m === 1 && n === 1) return 1
    if(m === 0 || n === 0) return 0
    memo[key] = gridTraveller(m-1, n, memo) + gridTraveller(m, n-1, memo)
    return memo[key]
}

console.log(gridTraveller(18, 18))