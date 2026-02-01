class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        hmap = {}

        for i in range(len(nums)):
            hmap[nums[i]] = hmap.get(nums[i],0) + 1
        
        return max(hmap,key=hmap.get)

        