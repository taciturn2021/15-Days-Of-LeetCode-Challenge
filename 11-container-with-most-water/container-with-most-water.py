class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        left, right = 0, len(height)-1
        area = 0
        while left < right:
            currArea = min(height[left],height[right]) * (right-left)
            area = currArea if currArea > area else area
            if height[left] > height[right]:
                right -= 1
            elif height[right] > height[left]:
                left += 1
            else:
                right -=1
                left += 1
            
        
        return area

