class Solution:
    def hIndex(self, citations: List[int]) -> int:
        citations.sort()
        currCount = 0
        for i in range(len(citations)-1, -1, -1):
            if citations[i] > currCount:
                currCount +=1
            else:
                break
        
        return currCount




        
            

        return h


     