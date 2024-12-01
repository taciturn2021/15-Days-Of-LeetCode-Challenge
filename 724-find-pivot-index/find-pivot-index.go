func pivotIndex(nums []int) int {
	sum := 0
	for i := 0; i < len(nums); i++ {
		sum = sum + nums[i]
	}
	currentSum := 0
	for i := 0; i < len(nums); i++ {
		if sum - currentSum - nums[i] == currentSum {
			return i
		}
		currentSum = currentSum + nums[i]
	}
	return -1
}