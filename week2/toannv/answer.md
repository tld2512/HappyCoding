**Bài 1:**
Cho một mảng số nguyên có n phần tử, dịch chuyển mảng sang bên phải k bước, với k là số nguyên dương.

Ví dụ:
```
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] với k = 5
Output: [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
Giải thích:
dịch bước 1: [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
dịch bước 2: [9, 10, 1, 2, 3, 4, 5, 6, 7, 8]
dịch bước 3: [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]
dịch bước 4: [7, 8, 9, 10, 1, 2, 3, 4, 5, 6]
dịch bước 5: [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
```
----------------------

**Tiếp cận**

Từ mảng ban đầu

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Thực hiện hoán vị (0, n-1) (1, n-2) (2, n-3)

[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

Thực hiện hoán vị của (0, k) (1, k-1)

[**6, 7, 8, 9, 10**, 5, 4, 3, 2, 1]

Thực hiện hoán vị của (k, n-1) (k+1, n-2)

[6, 7, 8, 9, 10, **1, 2, 3, 4, 5**]

*output*
[6, 7, 8, 9, 10, 1, 2, 3, 4, 5]

----------------------
**Bài 2:**
Cho hai chuỗi s và p, kiểm tra xem hai chuỗi có matching với nhau hay không.
s chứa các ký tự thường từ `a-z`
p chứa các ký tự thường từ `a-z` và hai ký tự `.` và `*`

`.` tương ứng với 1 ký tự bất kỳ

`*` tương ứng với không có ký tự nào hoặc 1 chuỗi các ký tự đằng trước dấu `*`

Ví dụ:
```
s = "aa"
p = "a"
Output: false
```

```
s = "aa"
p = "a*"
Output: true
```

```
s = "ab"
p = ".*"
Output: true
```

```
s = "aab"
p = "c*a*b"
Output: true
```
----------------------

**Tiếp cận**

Sử dụng thuật toán [quy hoạch động](https://en.wikipedia.org/wiki/Dynamic_programming) để giải quyết.

Xây dựng 1 mảng dp hai chiều có kích thước la `s.length` và `p.length`
* Nếu p.charAt(j) == s.charAt(i) :  dp[i][j] = dp[i-1][j-1];
* Nếu p.charAt(j) == '.' : dp[i][j] = dp[i-1][j-1];
* Nếu p.charAt(j) == '*': có thể xét 2 trường hợp sau:
```Java
1. Nếu p.charAt(j-1) != s.charAt(i) : dp[i][j] = dp[i][j-2] //a* = rỗng
2. Nếu p.charAt(i-1) == s.charAt(i) or p.charAt(i-1) == '.':
                              dp[i][j] = dp[i-1][j]    //a* = aaaaaa
                           or dp[i][j] = dp[i][j-1]   // a* = a
                           or dp[i][j] = dp[i][j-2]   // a* = rỗng
```
----------------------
**Bài 3:**
Cho một mảng số nguyên chưa được sắp xếp. Tìm số nguyên dương nhỏ nhất còn thiếu ở trong mảng.

Ví dụ:
```
Input: [1,2,0]
Output: 3
```

```
Input: [3,4,-1,1]
Output: 2
```

```
Input: [7,8,9,11,12]
Output: 1
```
----------------------

```Java
public int solution(int[] nums) {
    HashMap<Integer, Integer> h = new HashMap<>();
    int min = 1;
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && min == 0) {
            min = nums[i];
        }
        if (nums[i] < min && nums[i] > 0) {
            min = nums[i];
        }
        h.put(nums[i],nums[i]);
    }

    if (min > 1) {
        return 1;
    }

    while (h.containsKey(min)) {
        min++;
    }
    return min;
}
```
