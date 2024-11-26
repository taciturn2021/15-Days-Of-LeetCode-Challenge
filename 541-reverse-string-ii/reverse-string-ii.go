func reverseStr(s string, k int) string {
	runes := []rune(s)
	n := len(runes)
	for i := 0; i < n; i += 2 * k {
		end := i + k
		if end > n {
			end = n
		}
		reverse(runes[i:end])
	}
	return string(runes)
}

func reverse(runes []rune) {
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
}