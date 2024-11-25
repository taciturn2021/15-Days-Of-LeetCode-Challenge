class Solution {
public:
int removeDuplicates(vector<int>& nums) {
    if(nums.empty()) return 0;
    if(nums.begin() == nums.end()) return 1;
    map<int,int> unique;
    for (auto it = nums.begin(); it != nums.end() ; it++) {
        unique[*it] = 1;
    }
    int i = 0;
    for (auto it = unique.begin(); it != unique.end(); ++it) {
        nums[i] = it->first;
        i++;
    }
    return unique.size();
}
};