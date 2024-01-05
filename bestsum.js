const bestSum = (targeSum, numbers) => {
    if(targeSum === 0) return []
    if(targeSum < 0) return null

    let shortestCombination = null
    
    for(let num of numbers){
        const rem = targeSum - num
        const remcombination = bestSum(rem, numbers)
        if(remcombination !== null){
            const combination = [...remcombination, num]
            //If combination is shorter than the shortestone update it
            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination
            }
        }
    }

    return shortestCombination
}