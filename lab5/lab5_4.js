let arrayString = prompt('Enter array separated by space');
let array = arrayString.split(' ').map(Number);
console.log(`Array: ${array}`);

console.log(sum(array));
console.log(`Sorted array: ${quickSort(array)}`);

function sum(array) {
    let minElement = Math.min(...array);
    let maxElement = Math.max(...array);
    let sum = minElement + maxElement;
    
    console.log(`Min element: ${minElement}`);
    console.log(`Max element: ${maxElement}`);

    return `Sum of min and max elements: ${sum}`;
}

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[0];
    let left = []; 
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) 
            left.push(array[i]);
        else
            right.push(array[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}
