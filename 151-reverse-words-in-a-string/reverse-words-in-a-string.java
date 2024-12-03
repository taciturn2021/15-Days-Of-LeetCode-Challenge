class Solution {
    public String reverseWords(String s) {
        s = s.trim();
        String reverse[] = s.split("\\s+");
        reverseArray(reverse);
        return String.join(" ", reverse);
    }
    public static void reverseArray(String[] array) {
        int left = 0, right = array.length - 1;
        while (left < right) {
            String temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
}