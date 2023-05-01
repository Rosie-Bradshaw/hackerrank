// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
// though answers with absolute error of up to  are acceptable.

// Example
// arr = [1, 1, 0, -1, -1]
// There are  elements, two positive, two negative and one zero. Their ratios are 2/5=0.400000, 2/5=0.400000 and 1/5=0.200000. 
// Results are printed as:

// 0.400000
// 0.400000
// 0.200000



function plusMinus(arr) {
    let positive = 0; 
    let negative = 0; 
    let zero = 0;
    const arraylength = arr.length;
    
    for (const i of arr) {
        if (i>0) {
            positive += 1; 
        } 
        else if (i<0) {
            negative += 1;
        }
        else zero += 1
        
    }
    console.log((positive/arraylength).toFixed(6))
    console.log((negative/arraylength).toFixed(6))
    console.log((zero/arraylength).toFixed(6))
}

arr = [1, 1, 0, -1, -1]
plusMinus(arr) 