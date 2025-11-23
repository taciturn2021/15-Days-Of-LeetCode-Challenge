class MinStack {
    private Stack:number[][]
    private capacity:number;
    constructor() {
        this.Stack = []
        this.capacity = 0;
    }

    push(val: number): void {
        if (this.capacity === 0) {
            this.Stack[this.capacity] = [val,val];
            this.capacity += 1;
            console.log(this.Stack);
            return;
        }
        this.Stack[this.capacity] = [val, (val < this.Stack[this.capacity - 1][1]) ? val : this.Stack[this.capacity - 1][1] ];
        this.capacity += 1;
        console.log(this.Stack);
    }

    pop(): void {
        this.Stack.splice(this.capacity-1,1);
        this.capacity -= 1;
    }

    top(): number {
        return this.Stack[this.capacity-1][0];
    }

    getMin(): number {
        return this.Stack[this.capacity-1][1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */