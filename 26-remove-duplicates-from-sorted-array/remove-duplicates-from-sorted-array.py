class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        rem = set(nums)
        nums[:] = rem
        nums.sort()

        