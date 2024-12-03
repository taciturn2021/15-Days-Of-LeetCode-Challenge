func majorityElement(nums []int) int {
	appearence, majority := 0, 0
	for _, val := range nums {
		if appearence == 0 {
			majority = val
		}
		if majority == val {
			appearence += 1
		} else {
			appearence -= 1
		}
	}
	return majority
}