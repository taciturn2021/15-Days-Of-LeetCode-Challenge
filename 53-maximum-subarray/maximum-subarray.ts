function maxSubArray(nums: number[]): number {
    let prevMax: number = Number.MIN_SAFE_INTEGER;
    let sum: number = 0;
    for (let i of nums) {
        if (i > i + sum) {
            sum = i;
        }else {
            sum += i;
        }
        if (sum > prevMax) {
            prevMax = sum;
        }

    }

    return prevMax
};