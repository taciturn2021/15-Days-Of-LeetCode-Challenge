class Solution(object):
    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        #calculate the minimum jumps needed from each step
        if len(nums) == 1:
            return 0

        dp = [10**5 for i in range(len(nums))]
        goal = len(nums)-1
        for i in range(len(nums)-2, -1 , -1):
            minJumps = 10**5
            if i + nums[i] >= goal:
                minJumps = 1
            else:
                for jumpCost in dp[i:i+nums[i]+1]:
                    minJumps = jumpCost+1 if jumpCost < minJumps else minJumps
            dp[i] = minJumps
        print(dp)
        return dp[0]
                 
            


        