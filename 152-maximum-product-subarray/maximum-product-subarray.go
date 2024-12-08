func maxProduct(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	maxProd := nums[0]
	minProd := nums[0]
	result := nums[0]

	for i := 1; i < len(nums); i++ {
		if nums[i] < 0 {
			maxProd, minProd = minProd, maxProd
		}
        if nums[i] > maxProd*nums[i]{
            maxProd = nums[i]
        }else{
            maxProd = maxProd*nums[i]
        }
		if nums[i] < minProd*nums[i]{
            minProd = nums[i]
        }else{
            minProd = minProd*nums[i]
        }
        if maxProd > result{
            result = maxProd
        }
	}
	return result
}
