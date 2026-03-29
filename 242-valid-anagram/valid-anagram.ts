function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const map1 = new Map<string, number>();
    const map2 = new Map<string, number>();
    for(let i = 0; i < s.length; i++){
        map1.set(s[i], (map1.get(s[i]) || 0) +1);
        map2.set(t[i], (map2.get(t[i]) || 0) +1);
    }
    for (let key of map1.keys()) {
        if (map1.get(key) !== map2.get(key)) return false;
    }
    return true;
};