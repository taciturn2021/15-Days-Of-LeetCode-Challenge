class Solution {
public:
  char findTheDifference(string s, string t) {
    int sum1 = 0,sum2 = 0;
    for(int i = 0; i < t.length(); i++ ){
        sum1 += s[i];
        sum2 += t[i];
    }
    if(sum1 == sum2) return t[t.length() - 1];
    return sum2 - sum1;
}
};