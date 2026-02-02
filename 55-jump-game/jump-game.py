class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        if len(nums) == 1:
            return True
        
        track = len(nums)-1
        for i in range(len(nums)-2, -1, -1):
            if nums[i] + i >= track:
                track = i
                

        
        return track == 0


            
            

