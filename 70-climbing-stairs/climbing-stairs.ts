var memo: number[] = []
function climbStairs(n: number): number {
    let memo = []
    for (let i = 0; i < n+1; i++) {
        memo[i] = -10;
    }
    memo[0] = 1;
    memo[1] = 1;
    let total =0;
    for (let i = 2; i < n+1; i++){
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[memo.length-1];
    
    };