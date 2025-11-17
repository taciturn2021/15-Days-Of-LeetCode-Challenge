function maxProfit(prices: number[]): number {
    let minPrice = prices[0];
    let max = 0;
    for (let i of prices) {
        if (i < minPrice) {
            minPrice = i;
        }
        else if (i - minPrice > max) {
            max = i - minPrice;
        }
    }
    return max;
};