function isAnagram(s: string, t: string): boolean {
    
    return JSON.stringify(s.split("").toSorted()) === JSON.stringify(t.split("").toSorted())
};