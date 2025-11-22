function isValid(s: string): boolean {
    let list = s.split("");
    let o = ["(","[","{"];
    let c = [")","]","}"];
    let stack = [];
    for (let i of list) {
        if (o.includes(i)) {
            stack.push(i);
        }
        else{
            let current = stack.pop();
            if ( c.indexOf(i) !== o.indexOf(current) ) {
                return false;
            }
        }
    }

    return (stack.length === 0) ? true: false;
};