function climbStairs(n: number): number {
    if (n == 1) return n;
    let memo = [];
    memo[n] = 0;
    memo[n-1] = 1;
    memo[n-2] = 2;
    let curr = n-3;
    while (curr >= 0) {
       memo[curr] = memo[curr+1] + memo[curr+2];
       curr--;
    }
    console.log(memo, curr);
    return memo[curr+1];
};

