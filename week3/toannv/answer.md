**Bài 1:**
Cho n điểm nằm trên đường tròn có khoảng cách bằng nhau. Tìm tổng số tam giác tù có thể tạo được từ n điểm.

Tam giác tù là tam giác có 1 góc lớn hơn 90 độ.

=> để tạo thành 1 tam giác tù thì 3 điểm đó phải nằm ở trên 1 nửa đường tròn.
 - Với trường hợp n chẵn, thì số điểm lớn nhất nằm trên nửa đường tròn là n/2
 - Với trường hợp n lẻ, thì số điểm lớn nhất nằm trên nửa đường trong là (n + 1)/2

Nếu chọn 1 điểm là đỉnh của tam giác thì ta sẽ có C(2, n/2 - 1) cách tạo thành tam giác tù.

=> sẽ có n*C(2, n/2-1) cách tạo thành tam giác tù

---------

**Bài 2:**
Cho n điểm nằm trên đường tròn có khoảng cách bằng nhau. Tìm tổng số tam giác thường có thể tạo được từ n điểm.

Hướng tiệm cận của bài này sẽ là:
- Tìm tổng số tam giác có thể tạo được từ n điểm (1)
- Tìm tổng số tam giác cân có thể tạo được từ n điểm (2)
- Kết quả = (1) - (2)

Tổng số tam giác có thể tạo được từ n điểm là: C(3, n)

Tổng số tam giác cân có thể tạo được từ n điểm.

Tam giác cân là tam giác có ít nhất 2 cạnh bằng nhau.

Khi đó ta sẽ có `2a + c = n` 

*(tại sao bằng n thì anh em thử nghĩ nhé. Hint là thử biểu diễn các điểm thông qua array và sử dụng tính chất đồng dạng và các điểm cách đều)*

Với phương trình `2a + c = n` ta sẽ đi tìm xem có bao nhiêu cặp nghiệm (a, c) thỏa mãn phương trình trên (với a, c > 0)

Gọi x là số cặp nghiệm thỏa mãn `2a + c = n`. Nếu `3a = n` thì `x = x -1` (loại bỏ trường hợp tam giác đều)

Số tam giác đều có thể tạo được từ n điểm là: n/3

Như vậy tổng số tam giác cân có thể tạo được từ n điểm cách đều nhau là: n * x + n/3

=> kết quả là: C(3, n) - n * x - n/3


---------

**Bài 3:**
Cho mảng hai chiều có kích thước 9*9. Thỏa mãn điều kiện trò chơi sudoku. Các ô trống sẽ được xác định bởi ký tự `.`

*Giả sử rằng chỉ có 1 cách giải duy nhất*

*source code của java*
```Java
    public boolean solve(int start, int[] sequence, int[] rows, int[] cols, 
            int[] subs, int[] rowIndex, int[] colIndex, int[] subIndex) {
        for (int index = start; index < 81; ++index) {
            int i = rowIndex[index];
            int j = colIndex[index];
            int k = subIndex[index];
            if (sequence[index] == 0) {
                int candiadate = ~rows[i] & ~cols[j] & ~subs[k];
                while((candiadate & 0x1ff) != 0) {
                    int val = candiadate & (-candiadate);
                    sequence[index] = val;
                    rows[i] |= val;
                    cols[j] |= val;
                    subs[k] |= val;
                    if (solve(index + 1, sequence, rows, cols, subs, rowIndex, colIndex, subIndex)) {
                        return true;
                    }
                    sequence[index] = 0;
                    rows[i] &= ~val;
                    cols[j] &= ~val;
                    subs[k] &= ~val;
                    candiadate &= ~val;
                }
                return false;
            }
        }
        
        return true;
    }
    
    public void solveSudoku(char[][] board) {
        int rows[] = new int[9];
        int cols[] = new int[9];
        int subs[] = new int[9];
        int sequence[] = new int[81];
        int rowIndex[] = new int[81];
        int colIndex[] = new int[81];
        int subIndex[] = new int[81];
        for (int i = 0; i < 9; ++i) {
            for (int j = 0; j < 9; ++j) {
                int index = 9*i + j;
                rowIndex[index] = i;
                colIndex[index] = j;
                subIndex[index] = (i / 3) * 3 + j / 3;
                if (board[i][j] != '.') {
                    sequence[index] = 1 << (board[i][j] - '1');
                    rows[i] |= sequence[index];
                    cols[j] |= sequence[index];
                    subs[subIndex[index]] |= sequence[index];
                }
            }
        }
        
        solve(0, sequence, rows, cols, subs, rowIndex, colIndex, subIndex);
        
        for (int i = 0; i < 9; ++i) {
            for (int j = 0; j < 9; ++j) {
                if (board[i][j] == '.') {
                    int s = 9 * i + j;
                    int n;
                    for (n = 0; sequence[s] != (1 << n); ++n) {
                        
                    }
                    board[i][j] = (char) (n + '1');
                }
            }
        }
    }
```
