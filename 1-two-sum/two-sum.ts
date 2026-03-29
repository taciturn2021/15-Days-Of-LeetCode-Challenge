function twoSum(nums: number[], target: number): number[] {
    let newNums = nums.map((item, index) => [item, index])
    newNums.sort((a,b) => a[0] - b[0]);
    console.log(newNums);
    let start = 0;
    let end = newNums.length - 1;
    while (start < end) {
        if ( newNums[start][0] + newNums[end][0] === target ) {
            return [newNums[start][1], newNums[end][1]];
        } else if (newNums[start][0] + newNums[end][0] < target) {
            start++
        }else if (newNums[start][0] + newNums[end][0] > target) {
            end--
        }
    }
};