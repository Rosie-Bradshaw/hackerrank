// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// a = [1, 2, 3, 4, 3, 2, 1]

// The unique element is 4.

function lonelyInteger(a) {
    const result = a.filter ((value) => {
        return a.indexOf(value) === a.lastIndexOf(value)
    }); 
    return result
}

a = [1, 2, 3, 4, 3, 2, 1, 4, 6, 7]
console.log(lonelyInteger(a))