function reverseArrayInPlace(arr: number[]): number[] {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left]; // Small extra space
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

function testReverseArrayInPlace() {
    let originalArray = [1, 2, 3, 4, 5];
    console.log(originalArray); // [1, 2, 3, 4, 5]
    let reversedArray = reverseArrayInPlace(originalArray);
    console.log(reversedArray); // [5, 4, 3, 2, 1]
}
testReverseArrayInPlace();
