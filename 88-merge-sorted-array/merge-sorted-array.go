func merge(nums1 []int, m int, nums2 []int, n int) {
	if n == 0 {
		return
	}
	if m == 0 {
		for i := 0; i < n; i++ {
			nums1[i] = nums2[i]
		}
		return
	}
	arr1 := m - 1
	arr2 := n - 1
	curr := m + n - 1

	for arr2 >= 0 {
		if arr1 >= 0 && nums1[arr1] > nums2[arr2] {
			nums1[curr] = nums1[arr1]
			arr1--
		} else {
			nums1[curr] = nums2[arr2]
			arr2--
		}
		curr--
	}
}