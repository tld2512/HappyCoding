```python
N = int(raw_input())
s = map(int, raw_input().rstrip().split(' '))
l, n = 0, 0
for i in range(N-1): l, n = n, max(l + s[i] + s[i+1], n)
print n
```
