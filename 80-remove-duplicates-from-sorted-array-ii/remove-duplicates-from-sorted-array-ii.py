class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        first = 0
        count = 0
        for i in range(1,len(nums)):
            if nums[i] == nums[first] and count !=1:
                nums[first+1] = nums[first]
                first = first+1
                count = 1
            elif nums[i] != nums[first]:
                first = first+1
                nums[first] = nums[i]
                count = 0
        nums[:] = nums[:first+1]