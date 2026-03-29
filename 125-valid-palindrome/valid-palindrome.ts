function isPalindrome(s: string): boolean {
    let string = s.split(" ").join("").toLowerCase(); // building the string
    let alphanums = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
    let newString = string.split("").filter((letter) => alphanums.includes(letter)).join(""); // keep only alphanumeric characters
    let start = 0;
    let end = newString.length - 1;
    while (start < end) {
        if (newString[start] === newString[end]) {
            start++;
            end--;
        } else {
            return false;

        }
    }
    return true;
};