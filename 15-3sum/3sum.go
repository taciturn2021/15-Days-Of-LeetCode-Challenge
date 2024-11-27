import "sort"


func threeSum(nums []int) [][]int {
	sort.Ints(nums) 
	var result [][]int

	for current := 0; current < len(nums)-2; current++ {
		if current > 0 && nums[current] == nums[current-1] {
			continue
		}
		left, right := current+1, len(nums)-1
		for left < right {
			total := nums[current] + nums[left] + nums[right]
			if total == 0 {
				result = append(result, []int{nums[current], nums[left], nums[right]})
				for left < right && nums[left] == nums[left+1] {
					left++
				}
				for left < right && nums[right] == nums[right-1] {
					right--
				}
				left++
				right--
			} else if total > 0 {
				right-- 
			} else {
				left++ 
			}
		}
	}

	return result
}