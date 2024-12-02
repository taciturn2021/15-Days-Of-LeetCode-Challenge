func romanToInt(s string) int {
	romanNums := map[rune]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
	sum := 0
	for i := 0; i < len(s); i++ {
		if i < len(s)-1 {
			if s[i] == 'I' && (s[i+1] == 'V' || s[i+1] == 'X') {
				sum += romanNums[rune(s[i+1])] - romanNums[rune(s[i])]
				i += 1
				continue
			} else if s[i] == 'X' && (s[i+1] == 'L' || s[i+1] == 'C') {
				sum += romanNums[rune(s[i+1])] - romanNums[rune(s[i])]
				i += 1
				continue
			} else if s[i] == 'C' && (s[i+1] == 'D' || s[i+1] == 'M') {
				sum += romanNums[rune(s[i+1])] - romanNums[rune(s[i])]
				i += 1
				continue
			}

		}
		sum += romanNums[rune(s[i])]

	}
	return sum
}