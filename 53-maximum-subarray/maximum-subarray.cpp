class Solution {
public:
   int maxSubArray(vector<int>& nums) {
    int sum = 0;
    int prevMaxSum = INT_MIN;
    // vector<int> sums;
    for (int i = 0; i < nums.size(); i++) {
        if(nums[i] > sum+nums[i]) {
            sum = nums[i];
        }else {
            sum += nums[i];
        }
        if(sum > prevMaxSum) {
            prevMaxSum = sum;
        }
    }

    return prevMaxSum;

}
};