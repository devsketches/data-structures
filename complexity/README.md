# Complexity

Algorithm complexity is a measure of how much time and space an algorithm takes to solve a problem, as the input size of the problem grows larger. 

There are usually 2 measures of algorithmic complexities:
1. Time complexity - number of operations executed by the algorithm
2. Space complexity - memory size that is required by the algorithm

Time complexity is typically expressed in terms of Big O notation, which represents the upper bound of the number of operations an algorithm performs as a function of the input size n.
For example:

- O(1): constant time complexity, where the number of operations executed by the algorithm is independent of the input size.
- O(n): linear time complexity, where the number of operations grows linearly with the input size.
- O(n^2): quadratic time complexity, where the number of operations grows quadratically with the input size.
- O(2^n): exponential time complexity, where the number of operations grows exponentially with the input size.

To illustrate the complexity meaning you will need to implement the method "fasterFindCommonItems()" in the linear complexity of O(n).
The method accepts 2 arrays of integers and returns a new array that contains the common elements (equal integers) between the 2 arrays 

As an example, the findCommonItems was already implemented in O(n^2) complexity because it searches common items by using 2 nested loops causing the algorithm to execute **(n * m)** operations (where n, m are the 2 array sizes).