function twoSum(nums: number[], target: number): number[] {
   const seenNums = new Map<number,number>();

    for (let i = 0; i < nums.length ; i++) {
        let needed = target - nums[i];

        if (seenNums.has(needed)) {
            return [i, seenNums.get(needed)];
        }
        seenNums.set(nums[i], i);
    }
};