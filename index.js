// Write a function that takes a String and returns an Array/list with the length of each word added to each element.

// Examples:
// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

function addLength(str){
    return str.split(' ').map((e) => `${e} ${e.length}`);
}

console.log(addLength("apple ban"))

//we used map because it maps through the original array and then creates a new one with the properties that you added