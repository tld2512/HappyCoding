//bai1
function bai1(n) {
    var nNew = Math.ceil(n / 2) - 1;
    if (nNew < 2) return 0;
    return n * nNew * (nNew - 1) / 2;
}

//bai2
function bai2(n) {
    if (n < 3) {
        return 0;
    }
    var nNew = Math.ceil(n / 2) - 1;
    return n * (n - 1) * (n - 2) / 6 - n * (nNew - (n % 3 == 0 ? 1 : 0)) - (n % 3 == 0 ? n / 3 : 0);
}

//bai3
function sudoku(arr) {
    zero = [];
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (arr[i][j] == ".") {
                arr[i][j] = 0;
                zero.push(i * 9 + j);
            }
        }
    }
    solve = solve(arr, 0, zero);
    console.log(solve);
}

function solve(arr, i, zero) {
    if (i >= zero.length) {
        return arr;
    }
    var row = parseInt(zero[i] / 9);
    var col = zero[i] % 9;
    do {
        arr[row][col] = arr[row][col] + 1;
        if (arr[row][col] > 9) {
            arr[row][col] = 0;
            return solve(arr, i - 1, zero);

        }
        if (check(arr, zero[i])) {
            return solve(arr, i + 1, zero);
        }
    } while (true);
    return arr;
}

function check(arr, i) {
    var row = parseInt(i / 9);
    var col = i % 9;
    for (i = 0; i < 9; i++) {
        if (arr[row][col] == arr[row][i] && i != col || arr[row][col] == arr[i][col] && i != row) {
            return false;
        }
    }

    var rowStart = parseInt(row / 3) * 3;
    var colStart = parseInt(col / 3) * 3;
    for (m = rowStart; m < rowStart + 3; m++) {
        for (n = colStart; n < colStart + 3; n++) {
            if (arr[m][n] == arr[row][col] && m != row && n != col) {
                return false;
            }
        }
    }
    return true;
}

//test bai3

arr = [
    [6, ".", ".", ".", ".", ".", ".", ".", 0],
    [".", 9, ".", ".", 5, ".", ".", ".", 0],
    [".", 1, ".", ".", ".", 3, ".", ".", 0],
    [".", ".", ".", ".", ".", ".", ".", ".", 0],
    [3, 2, ".", ".", ".", ".", 5, ".", 0],
    [1, ".", ".", ".", ".", ".", ".", ".", 0],
    [4, ".", 2, 7, ".", 1, ".", ".", 0],
    [9, ".", ".", ".", ".", 5, ".", ".", 0],
    [7, ".", ".", ".", ".", 2, ".", 1, 0]
];

sudoku(arr);
