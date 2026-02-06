class RandomizedSet:

    def __init__(self):
        self.map = {}

    def insert(self, val: int) -> bool:
        if self.map.get(val, False):
            return False
        self.map[val] = True
        return True

    def remove(self, val: int) -> bool:
        if self.map.get(val, False):
            self.map.pop(val)
            return True
        return False

    def getRandom(self) -> int:
        tempList = list(self.map.keys())
        randomIndex = random.randrange(0,len(tempList))
        return tempList[randomIndex]
        


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()