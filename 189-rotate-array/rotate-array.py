class Solution(object):
    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        rotatedList = [0 for i in range(len(nums))]
        print(rotatedList)
        for i in range(len(nums)):
            newIndex = (i + k) % len(nums)
            print(newIndex)
            rotatedList[newIndex] = nums[i]
        nums[:] = rotatedList
        

