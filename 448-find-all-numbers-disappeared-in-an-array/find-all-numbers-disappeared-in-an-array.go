func findDisappearedNumbers(nums []int) []int {

	for i := 0; i < len(nums); i++ {
		if nums[i] < 1 {
			if nums[(-nums[i])-1] > 0 {
				nums[(-nums[i])-1] = -nums[(-nums[i])-1]
			}
		} else {
			if nums[nums[i]-1] > 0 {
				nums[nums[i]-1] = -nums[nums[i]-1]
			}

		}
	}

	var result []int
	var index int = 0
	for i := 0; i < len(nums); i++ {
		if nums[i] > 0 {
			result = append(result, i+1)
			index++
		}
	}
	return result
}