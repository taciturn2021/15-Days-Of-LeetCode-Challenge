func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	str := strs[0]
	for i := 1; i < len(strs); i++ {
		Max := 0
		maxLen := len(str)
		if len(strs[i]) < maxLen {
			maxLen = len(strs[i])
		}
		for j := 0; j < maxLen; j++ {
			if strs[i][j] == str[j] {
				Max++
			} else {
				break
			}
		}
		if Max == 0 {
			return ""
		}
		str = str[0:Max]
	}
	return str
}