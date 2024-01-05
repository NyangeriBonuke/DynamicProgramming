const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0 ) return []
    if(targetSum < 0) return null

    for(let num of numbers){
        const rem = targetSum - num
        const remresult = howSum(rem, numbers, memo)
        if(remresult !== null){
            memo[targetSum] = [...remresult, num]
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null
}

console.log(howSum(7, [2, 3]))