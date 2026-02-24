function myAtoi(s: string): number {
    let chars = []
    for (let i of s) {
        chars.push(i);
    }
   
    // remove white spaces from the start
    let index = 0;
    while (index < chars.length) {
        if (chars[index] !== " ") break;
        chars.splice(index,1);
        
    }


    // extract sign
    let sign = "+"
    if (chars[0] == "+" || chars[0] == "-") {
        sign = chars[0];
        chars.shift();
    }
   

    // extract number
    let num = "";
    index = 0;
    let digits = ["0","1","2","3","4","5","6", "7", "8", "9"];
    while (index < chars.length) {
        if (digits.includes(chars[index])) {
            num = num + chars[index];
            index++;
        } else {
            break;
        }
    }
 
    let upperMax = 2 ** 31 -1;
    let lowerMax = 2 ** 31 * -1;
    let ans = 0
    if (num.length !== 0 ) {
        ans = parseInt(num);
    }

    if(sign === "-") {
        ans = ans * -1;
        if (ans < lowerMax) {
            ans = lowerMax;
        }
    } else {
        if (ans > upperMax) {
            ans = upperMax;
        }
    }


    return ans;
};