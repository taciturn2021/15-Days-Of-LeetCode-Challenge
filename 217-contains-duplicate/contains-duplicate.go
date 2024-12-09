func containsDuplicate(nums []int) bool {
    appears := make(map[int]int)

    for i := 0; i < len(nums); i++{
        appears[nums[i]]++
        if appears[nums[i]] > 1{
            return true
        }
    }
    return false
}