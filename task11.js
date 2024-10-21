function removeDuplicates(arr) {
    
    const uniqueElements = new Set(arr);
    
    
    return Array.from(uniqueElements);
}


const originalArray = [1, 2, 2, 3, 4, 4, 5, 1];
const uniqueArray = removeDuplicates(originalArray);

console.log(uniqueArray); 
