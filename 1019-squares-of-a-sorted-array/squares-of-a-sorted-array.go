func sortedSquares(nums []int) []int {
	n := len(nums)
	resultant := make([]int, n)
	left, right := 0, n-1
	for i := n - 1; i >= 0; i-- {
		if math.Abs(float64(nums[left])) > math.Abs(float64(nums[right])) {
			resultant[i] = nums[left] * nums[left]
			left++
		} else {
			resultant[i] = nums[right] * nums[right]
			right--
		}
	}
	return resultant
}