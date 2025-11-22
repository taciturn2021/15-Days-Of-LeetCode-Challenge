function productExceptSelf(nums: number[]): number[] {
    let answer: number[] = []
    let memoLeft: number[] = []
    let memoRight: number[] = []
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            memoLeft[i] = 1
        }else if (i == 1) {
            memoLeft[i] = nums[i-1]
        }else {
            memoLeft[i] = nums[i-1] * memoLeft[i-1];
        }
    }
    memoLeft.push(nums[nums.length-1] * memoLeft[nums.length-1])
    console.log(memoLeft)
    
    for (let i = nums.length - 1; i >= 0 ; i--) {
        if (i == nums.length - 1) {
            memoRight[i] = 1
        }else if (i == nums.length - 2) {
            memoRight[i] = nums[i+1]
        }else {
            memoRight[i] = nums[i+1] * memoRight[i+1];
        }
    }
    console.log(memoRight);
    
    for (let i = 0; i < nums.length; i++) {
        answer[i] = memoLeft[i] * memoRight[i]
    }
    
    



    return answer;
};