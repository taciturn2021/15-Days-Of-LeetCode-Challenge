class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        first = 0
        for i in range(len(nums)):
            if nums[first] != nums[i]:
                first += 1
                nums[first] = nums[i]
        return first+1



