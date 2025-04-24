## Sort Challenge


To run the challenge:

```bash

git clone https://github.com/trkbrkr2000/SortChallenge.git

cd SortChallenge

yarn install

yarn test

```


Test Results:


```shell
 jest
 PASS  ./sourt.test.js
  sort
    ✓ should mark a package REJECTED (1 ms)
    ✓ should mark a package SPECIAL (bulky by volume) (1 ms)
    ✓ should mark a package STANDARD
    ✓ should mark a package SPECIAL (heavy)
    ✓ should mark a package STANDARD (not bulky or heavy)
    ✓ should mark a package REJECTED (negative dimensions)
    ✓ should mark a package REJECTED (zero dimensions)
    ✓ should mark a package REJECTED (zero mass)
    ✓ should mark a package REJECTED (negative mass)
    ✓ should mark a package REJECTED (mass and dimensions zero) (1 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 sort.js  |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        0.149 s, estimated 1 s
```
