function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    let array = [];
    for (let i = 0; i < numRows; i++){
        array.push([]);
    }
    let index = 0;
    let backwards = false;
    for (let i of s) {
        array[index].push(i);
        if (index == array.length -1) {
            backwards = true;
        } else if ( index == 0) backwards = false;
        if (backwards) index--;
        else index++;
    }
    let ans = ""
    for (let i of array) {
        let curr = i.join("");
        ans += curr;
    }

    return ans;
};