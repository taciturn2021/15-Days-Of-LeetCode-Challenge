import(
    "strconv"
)
func isPalindrome(x int) bool {
    if x < 0 {
        return false
    }
    str := strconv.Itoa(x)
    start , end := 0 , len(str) - 1
    for start < end{
        if str[start] != str[end]{
            return false
        }
        start++
        end--
    }
    return true

}