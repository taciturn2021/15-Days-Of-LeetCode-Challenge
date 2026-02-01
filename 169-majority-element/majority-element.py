class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count = 0
        selectedNum = None

        for num in nums:
            if count == 0:
                selectedNum = num
            count += 1 if num == selectedNum else -1

        return selectedNum
        