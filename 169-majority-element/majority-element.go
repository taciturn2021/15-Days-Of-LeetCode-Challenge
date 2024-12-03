func majorityElement(nums []int) int {
    appearence := make(map[int]int)
    majority := len(nums) / 2
    for i := 0; i < len(nums); i++{
        appearence[nums[i]]++
    } 
    for i := 0; i < len(nums); i++{
        if appearence[nums[i]] > majority{
            return nums[i]
        }
    } 

    return 0
}