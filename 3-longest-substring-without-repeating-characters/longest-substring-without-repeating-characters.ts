function lengthOfLongestSubstring(s: string): number {
   let left = 0;
   let right = 0;
   let maxLength = 0;
   let track = new Set();
   while (right < s.length) {
    if (track.has(s[right])) {
        maxLength = maxLength > track.size ? maxLength : track.size;
        while( track.has(s[right]) ) {
            track.delete(s[left]);
            left++;
        }
    } 
    track.add(s[right]);
    right++
   }

    maxLength = maxLength > track.size ? maxLength : track.size;
    return maxLength;
};

