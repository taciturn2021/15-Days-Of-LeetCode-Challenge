function letterCombinations(digits: string): string[] {
    let mappings = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
};
    let answer = [];
    if (digits.length == 1) return mappings[digits];
 

    const combine = (arr1,arr2) => {
      
        let combined = []
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                combined.push(arr1[i]+arr2[j]);
            }
        }
   
        return combined;
    }

       const makePairs = (letter) => {
        if (letter.length === 1) {
           
            return mappings[letter];
        }
        return combine( makePairs(letter.substring(0,letter.length / 2)) , makePairs(letter.substring(letter.length /2, letter.length)) ); 
    }
    answer = makePairs(digits);
    return answer;
    

};