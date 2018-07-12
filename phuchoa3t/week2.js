//1
function arrayMove(arr, k) {
    b = arr.splice(-k);
    return b.concat(arr);
}

//2
function match(s, p) {
    return Boolean(s.match(new RegExp(p))[0]);
}

//3\
function bai3(arr)
{
    var min = 1;
    for (i = 0; i < arr.length; i++) {
        if (arr.indexOf(min) != -1 || arr[i] + 1 < min && arr[i] + 1 > 0 && arr.indexOf(arr[i] + 1) == -1) {
            min = arr[i] + 1;
        }
    }
    return min;
}



