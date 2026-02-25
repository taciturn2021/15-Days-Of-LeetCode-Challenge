function longestCommonPrefix(strs: string[]): string {
    let prefix = ""
    let currentLetter = ""
    let i =0;
    while(true) {
        let equal = true;
        let letter = strs[0][i];
        for (let word of strs) {
            if (i > word.length-1 || word[i] !== letter ) {
                equal = false;
                console.log(`False found for word ${word} and its letter ${word[i]}`)
                break;
            }
        }
        if (!equal) {
            break;
        }
        prefix += letter;
        i++;
    }
    return prefix
};