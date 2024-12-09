class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
    int rows = grid.size();
    int cols = grid[0].size();
    int islandCount = 0;

    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            if (grid[i][j] == '1') {
                bfs(grid, i, j);
                islandCount++;
            }
        }
    }

    return islandCount;
    }

    void bfs(vector<vector<char>>& grid, int x, int y) {
    int rows = grid.size();
    int cols = grid[0].size();
    queue<pair<int, int>> q;
    q.push({x, y});
    grid[x][y] = '0';
    int directions[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}}; 

    while (!q.empty()) {
        auto [cx, cy] = q.front();
        q.pop();

        for (auto& dir : directions) {
            int nx = cx + dir[0];
            int ny = cy + dir[1];

            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] == '1') {
                q.push({nx, ny});
                grid[nx][ny] = '0';
            }
        }
    }
}
};