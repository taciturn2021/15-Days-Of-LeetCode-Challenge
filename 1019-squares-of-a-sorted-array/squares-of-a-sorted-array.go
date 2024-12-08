func sortedSquares(nums []int) []int {
	left, right := 0, len(nums)-1
	var resultant []int
	for left <= right {
		if math.Abs(float64(nums[left])) >= float64(nums[right]) {
			resultant = append([]int{nums[left] * nums[left]}, resultant...)
			left++
		} else {
			resultant = append([]int{nums[right] * nums[right]}, resultant...)
			right--
		}
	}
	return resultant
}