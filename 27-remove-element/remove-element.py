class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        valCount = 0
        length = len(nums)
    
        for i in range(len(nums)):
            if nums[i] == val:
                nums[i] = '_'
                valCount += 1
        
        index = 0
        while index < len(nums):
            if nums[index] == '_':
                nums.pop(index)
            else:
                index += 1
        
        k = length - valCount

        return k