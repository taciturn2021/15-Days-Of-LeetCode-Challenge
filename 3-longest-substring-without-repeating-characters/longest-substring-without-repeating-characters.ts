function lengthOfLongestSubstring(s: string): number {
    let queue: string[] = []
    let maxLength: number = 0;

   for (let i of s) {
    if (queue.includes(i)){
        maxLength = (queue.length > maxLength) ? queue.length : maxLength;
        while (queue[0] != i) {
            queue.splice(0 , 1);
        }
        queue.splice(0,1);
    }
    queue.push(i);
   }

   return (maxLength > queue.length) ? maxLength : queue.length;
};


