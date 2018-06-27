After receiving a good score on his math exam, Tom decides to treat himself to a nice dessert. At the supermarket, a store clerk shows him an exotic fruit that he has never seen before. The clerk tells him that some sections of the fruit are very tasty, while some other sections taste terrible, and it is best to eat the sections in pairs.

Tom will develop a program to calculate the best way to eat the fruit in order to maximize the tastiness.

Tom first slices the fruit into N slices, each with a different “tastiness.”  Tom will eat 2 adjacent slices per bite. Tom can eat any number of bites, but he wants to eat as much of the whole fruit as possible. The uneaten slices will be thrown away (in the worst case, he might have to throw it all away). The final tastiness is the sum of all the slices that he has eaten.

Input
```
- N
- N number of tastiness values, A[i]
```

Output
```
- The maximum tastiness achievable
```

Limits
```
- N <= 20000
- -20000 <= A[i] <= 20000
```

Sample Input
```
6
1 -2 3 3 2 -1
```

Sample Output
```
7
```
Explanation:
The 2 best bites to take are slices 3-4 and slices 5-6. Their sum is (3+3)+(2+-1) = 7.
