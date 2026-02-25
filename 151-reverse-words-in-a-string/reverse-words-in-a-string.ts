function reverseWords(s: string): string {
    let words = s.split(" "); //["one", "two", "three", "four"]
    
    words = words.filter(item => {
        return item !== '';
    });
    let end = words.length - 1;
    let start = 0;
    while (start < end) {
        let temp = words[start];
        words[start] = words[end];
        words[end] = temp;
        start++;
        end--;
    }
    
    return words.join(" ");
};