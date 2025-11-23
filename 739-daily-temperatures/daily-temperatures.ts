function dailyTemperatures(temperatures: number[]): number[] {
    let answer:number[] = [];
    let stack:number[][] = [[temperatures[0], 0]];
    for (let i = 1; i < temperatures.length; i++){
        let current = temperatures[i];
         while(stack.length !== 0 && current > stack[stack.length-1][0]) {
            let toMark = stack.pop();
            answer[toMark[1]] = i - toMark[1];
         }
         stack.push([temperatures[i], i]);
    
        //  for (let j = i + 1; j < temperatures.length; j++) {
        //     if (temperatures[j] > temperatures[i]) {
        //         answer[i] = j-i;
        //         break;
        //     }
        //  }
        //   if (answer[i] === undefined ) {
        //     answer[i] = 0;
        //   }

    }

    while (stack.length !== 0){
        let element = stack.pop();
        answer[element[1]] = 0;
    }

    return answer;

};