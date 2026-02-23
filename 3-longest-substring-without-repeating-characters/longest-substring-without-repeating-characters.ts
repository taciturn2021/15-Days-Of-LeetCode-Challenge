function lengthOfLongestSubstring(s: string): number {
    if (s.length == 0 || s.length == 1) return s.length;
    let queue = []
    let maxLength = 0;
    // abcdef
    for (let i of s) {
        if (queue.includes(i)) {
            maxLength = maxLength > queue.length ? maxLength : queue.length;
            while(queue[0] != i) {
                queue.splice(0,1);
            }
            queue.splice(0,1)
        }

        queue.push(i);
    }

    maxLength = maxLength > queue.length ? maxLength : queue.length;
    return maxLength;


};