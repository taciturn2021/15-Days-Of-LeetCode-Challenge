func strStr(haystack string, needle string) int {
	lengthNeedle := len(needle)
	lengthHaystack := len(haystack)
	for index := range haystack {
		if haystack[index] == needle[0] {
			if index+lengthNeedle <= lengthHaystack{
				if haystack[index:index+lengthNeedle] == needle {
					return index
				}
			}
		}
	}

	return -1
}