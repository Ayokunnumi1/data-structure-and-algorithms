// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference
// Input Format

// The first line contains a single integer, , the number of rows and



// function diagonalDifference(arr) {
//     let leftDiagonalSum = 0;
//     let rightDiagonalSum = 0;
    
//     // Iterate over the array
//     for (let i = 0; i < arr.length; i++) {
//         // Add up the elements of the left diagonal (row index === column index)
//         leftDiagonalSum += arr[i][i];
        
//         // Add up the elements of the right diagonal (row index + column index === array length - 1)
//         rightDiagonalSum += arr[i][arr.length - 1 - i];
//     }
    
//     // Calculate the absolute difference between the sums of the diagonals
//     const diagonalDifference = Math.abs(leftDiagonalSum - rightDiagonalSum);
    
//     return diagonalDifference;
// }

// columns in the square matrix .
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation
// 15
// // Example input array
// const arr = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
// ];

// // Calculate and print the diagonal difference
// console.log(diagonalDifference(arr));

function diagonalDifference(arr) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    
    // Iterate over the array
    for (let i = 0; i < arr.length; i++) {
        // Add up the elements of the left diagonal (row index === column index)
        leftDiagonalSum += arr[i][i];
        
        // Add up the elements of the right diagonal (row index + column index === array length - 1)
        rightDiagonalSum += arr[i][arr.length - 1 - i];
    }
    
    // Calculate the absolute difference between the sums of the diagonals
    const diagonalDifference = Math.abs(leftDiagonalSum - rightDiagonalSum);
    
    return diagonalDifference;
}

// Example input array
const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

// Calculate and print the diagonal difference
console.log(diagonalDifference(arr));
