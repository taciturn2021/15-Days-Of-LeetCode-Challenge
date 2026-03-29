function groupAnagrams(strs: string[]): string[][] {
    if (strs.length == 1) return [[strs[0]]];
    const map1 = new Map<string, string[]>();
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] === "-1") continue;
        let sorted = strs[i].split("").toSorted().join("");
        if (map1.has(sorted)) {
            map1.get(sorted).push(strs[i]);
        } else {
            map1.set(sorted, [strs[i]]);
        }
        strs[i] = "-1";
    }
    let answer = [ ]
    for (let key of map1.keys()) {
        answer.push(map1.get(key));
    }
    return answer;
};