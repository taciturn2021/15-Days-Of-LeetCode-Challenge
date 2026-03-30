function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0]-b[0]);
    let answer = [];

    for (let interval of intervals) {
        // no overlap between the current interval and the last interval in the answer list or if the list is empty just push the first time
        if (answer.length === 0 || answer[answer.length-1][1] < interval[0]) 
        {
                answer.push(interval);
        } 
        // else if the intervals overlap then merge them:
        else {
            answer[answer.length-1][1] = Math.max(interval[1], answer[answer.length-1][1]);
        }
    }
    return answer;
};