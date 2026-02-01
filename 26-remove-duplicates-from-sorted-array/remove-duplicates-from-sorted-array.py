class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) == 1:
            return
        lastDigit = -101
        currIndex = 0
        i = 0
        while i < len(nums):
            if nums[i] == lastDigit:
                nums[i:] = nums[i+1:]
            else:
                i += 1
            lastDigit = nums[i-1]
            

    


        