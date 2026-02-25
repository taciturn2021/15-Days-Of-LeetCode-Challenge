function strStr(haystack: string, needle: string): number {
    let condition = false;
    if (needle.length > haystack.length) return -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            for (let j = 0 ; j < needle.length; j++) {
                if (i+j > haystack.length-1 || needle[j] !== haystack[i+j]) {
                    break;
                }
                if (j === needle.length-1){
                    condition = true;

                } 
            }
        }
        if (condition === true) return i;
    }

    return -1;
};