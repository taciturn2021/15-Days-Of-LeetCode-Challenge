function groupAnagrams(strs: string[]): string[][] {
    let sorted = strs.map(str => str.split("").toSorted().join(""));
    let answer: string[][] = [];
    for (let i = 0; i < strs.length; i++) {
        let indexes = []
        if (sorted[i] === "-1") continue;
        sorted = sorted.map((str,index) => {
            if (str === sorted[i]){
                indexes.push(index);
                return "-1";
            }
            return str
        });
        let answer1 = []
        for (let i of indexes) {
            answer1.push(strs[i]);
        }
        answer.push(answer1);
    }
    
    return answer;
};