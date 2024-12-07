func sortColors(nums []int) {
	start, end := 0, len(nums)-1
	i := start
	for i <= end {
		if nums[i] == 0 {
			nums[i], nums[start] = nums[start], nums[i]
			start++
			i++
		} else if nums[i] == 2 {
			nums[i], nums[end] = nums[end], nums[i]
			end--
		} else {
			i++
		}
	}
}