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

**Bài 2:**
Cho hai chuỗi s và p, kiểm tra xem hai chuỗi có matching với nhau hay không.
s chứa các ký tự thường từ `a-z`
p chứa các ký tự thường từ `a-z` và hai ký tự `.` và `*`
`.` tương ứng với 1 ký tự bất kỳ
`*` tương ứng với không có ký tự nào hoặc 1 chuỗi các ký tự đằng trước dấu *
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
