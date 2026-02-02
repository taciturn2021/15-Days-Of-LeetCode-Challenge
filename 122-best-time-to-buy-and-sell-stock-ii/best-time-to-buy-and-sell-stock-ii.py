class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """

        minPrice = prices[0]
        profitSoFar = 0
        for price in prices:
            if price < minPrice:
                minPrice = price
            if price > minPrice:
                profitSoFar = profitSoFar + (price - minPrice)
                minPrice = price
        return profitSoFar


