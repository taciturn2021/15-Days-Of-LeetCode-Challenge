function numIslands(grid: string[][]): number {
    if (grid.length == 0) return 0;
    let numIslands: number = 0;
    const depthSearch = (grid: string[][] ,i: number, j: number) => {
        if ( ( i < 0 ) || ( i >= grid.length )  || ( j < 0 )  || ( j >= grid[i].length ) || ( grid[i][j] !== "1") ) return
        grid[i][j] = "0";
        depthSearch(grid,i+1,j);
        depthSearch(grid,i,j+1);
        depthSearch(grid,i-1,j);
        depthSearch(grid,i,j-1);
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1"){
                numIslands++;
                depthSearch(grid,i,j);
                }
            }
        }

    return numIslands;
};
