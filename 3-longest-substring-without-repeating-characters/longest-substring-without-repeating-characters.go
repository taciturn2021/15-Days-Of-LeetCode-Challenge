func lengthOfLongestSubstring(s string) int {
	charSet := make(map[rune]bool)
	left := 0
	maxLength := 0

	for i, r := range s {
		for charSet[r] {
			delete(charSet, rune(s[left]))
			left++
		}
		charSet[r] = true

		if i-left+1 > maxLength {
			maxLength = i - left + 1
		}
	}

	return maxLength
}