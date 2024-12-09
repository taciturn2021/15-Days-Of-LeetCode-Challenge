class Solution {
public:
   int compress(vector<char>& chars) {
    int size = chars.size();
    if (size == 1) {
        return 1;
    }
    int curr = 0;
    int count = 0;
    int newArr = 0;
    for (int i = 0; i < size; ++i) {
        if (chars[i] == chars[curr]) {
            count++;
        } else {
            chars[newArr++] = chars[curr];
            if (count > 1) {
                string s = to_string(count);
                for (char c : s) {
                    chars[newArr++] = c;
                }
            }
            curr = i;
            count = 1;
        }
    }
    chars[newArr++] = chars[curr];
    if (count > 1) {
        string s = to_string(count);
        for (char c : s) {
            chars[newArr++] = c;
        }
    }
    return newArr;
}
};