# EditDistanceFinder & SpellChecker
## DEMO: [Click Here](http://editdistance-vue.herokuapp.com/)
## Description:

This application is made for measuring the difference between two words by **Levenshtein Distance Algorithm** and spell checking of the word from a dictionary which contains 21837 words. You can compare the edit distance between two words in **Distance Finder** page according to Levenshtein Distance.

**The Levenshtein Distance** between two words is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one word into the other.

|              |     | Letter 2 |
| :----------: | :-: | :------: |
|              | A   | B        |
| **Letter 1** | C   | D        |

#### To find the value of cell D, the letters in the row and column will be compared. There are 3 possibilities in this comparison.
1. **Letter 1 = Letter 2:**

   If that's the case, **D = A**, because after the A is calculated, since the distance has not changed, so D will be A.
2. **Letter 1 != Letter 2:**

   If that's the case, D = A + 1, because after the A is calculated, distance will be increased, so D = A + 1.
3. **Length(Word 1) != Length(Word 2):**

   If that's the case, Letter 1 = null or Letter 2 = null. Thus, the algorithm will control which is null. Therefore,
   
   1. **if Letter 1 = null:**
       D = B + 1
   2. **if Letter 2 = null:**
       D = C + 1
       
       
### There are some examples to explain this algorithm:

|         |     |  K  |  I  |  T  |  T  |  E  |  N  |
| :-----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|         |  0  |  1  |  2  |  3  |  4  |  5  |  6  |
|  **S**  |  1  |  1  |  2  |  3  |  4  |  5  |  6  |
|  **I**  |  2  |  2  |  1  |  2  |  3  |  4  |  5  |
|  **T**  |  3  |  3  |  2  |  1  |  2  |  3  |  4  |
|  **T**  |  4  |  4  |  3  |  2  |  1  |  2  |  3  |
|  **I**  |  5  |  5  |  4  |  3  |  2  |  2  |  3  |
|  **N**  |  6  |  6  |  5  |  4  |  3  |  3  |  2  |
|  **G**  |  7  |  7  |  6  |  5  |  4  |  4  |  3  |

Thus, **lev(sitting, kitten) = 3**

|         |     |  F  |  O  |  O  |  T  |
| :-----: | :-: | :-: | :-: | :-: | :-: |
|         |  0  |  1  |  2  |  3  |  4  |
|  **F**  |  1  |  0  |  1  |  2  |  3  |
|  **O**  |  2  |  1  |  0  |  1  |  2  |
|  **O**  |  3  |  2  |  1  |  0  |  1  |
|  **T**  |  4  |  3  |  2  |  1  |  0  |
|  **B**  |  5  |  4  |  3  |  2  |  1  |
|  **A**  |  6  |  5  |  4  |  3  |  2  |
|  **L**  |  7  |  6  |  5  |  4  |  3  |
|  **L**  |  8  |  7  |  6  |  5  |  4  |

Thus, **lev(football, foot) = 4**

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
