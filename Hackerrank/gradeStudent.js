// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// Examples

//  round to  (85 - 84 is less than 3)
//  do not round (result is less than 40)
//  do not round (60 - 57 is 3 or higher)
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// Function Description

// Complete the function gradingStudents in the editor below.

// gradingStudents has the following parameter(s):

// int grades[n]: the grades before rounding
// Returns

// int[n]: the grades after rounding as appropriate
// Input Format

// The first line contains a single integer, , the number of students.
// Each line  of the  subsequent lines contains a single integer, 

// function gradingStudents(grades) {
    // Write your code here

// }

function gradingStudents(grades) {
    // Create an array to store rounded grades
    let roundedGrades = [];
    
    // Iterate through each grade
    for (let grade of grades) {
        // Calculate the next multiple of 5
        let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        
        // Check if the grade is less than 38 or cannot be rounded
        if (grade < 38 || nextMultipleOf5 - grade >= 3) {
            // Add the original grade to the rounded grades array
            roundedGrades.push(grade);
        } else {
            // Round the grade up to the next multiple of 5
            roundedGrades.push(nextMultipleOf5);
        }
    }
    
    // Return the array of rounded grades
    return roundedGrades;
}

// Example usage:
let grades = [73, 67, 38, 33];
console.log(gradingStudents(grades)); // Output: [75, 67, 40, 33]
