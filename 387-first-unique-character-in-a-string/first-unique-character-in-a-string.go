func firstUniqChar(s string) int {
	appear := make(map[rune]int)
	for i := 0; i < len(s); i++{
		appear[rune(s[i])]++
	}
	for i := 0; i < len(s); i++{
		if appear[rune(s[i])] == 1{
			return i
		}
	}
	return -1
}